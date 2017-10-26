window.addEventListener('load', function() {
    var editor;

});

editor = ContentTools.EditorApp.get();
ContentTools.IMAGE_UPLOADER = imageUploader;
editor.init('*[data-editable]', 'data-name');

editor.addEventListener('saved', function (ev) {
    var name, payload, regions, xhr;

    regions = ev.detail().regions;
    if (Object.keys(regions).length == 0) {
        return;
    }

    this.busy(true);

    payload = new FormData();
    for (name in regions) {
        if (regions.hasOwnProperty(name)) {
            payload.append(name, regions[name]);
        }
    }
    payload.append("id", document.getElementById("id").value);

    function onStateChange(ev) {
        if (ev.target.readyState == 4) {
            editor.busy(false);
            if (ev.target.status == '200') {
                new ContentTools.FlashUI('ok');
            } else {
                new ContentTools.FlashUI('no');
            }
        }
    };

    xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', onStateChange);
    xhr.open('POST', '/av/admin/update-content');
    xhr.send(payload);
});

function imageUploader(dialog) {
     var image, xhr, xhrComplete, xhrProgress,response;

    dialog.addEventListener('imageuploader.cancelupload', function () {

        if (xhr) {
            xhr.upload.removeEventListener('progress', xhrProgress);
            xhr.removeEventListener('readystatechange', xhrComplete);
            xhr.abort();
        }

        dialog.state('empty');
    });

    dialog.addEventListener('imageuploader.clear', function () {
        dialog.clear();
        image = null;
    });

    dialog.addEventListener('imageuploader.save', function () {
        console.log(response);
        dialog.save(response.url, response.size);
    });

    dialog.addEventListener('imageuploader.fileready', function (ev) {

        var formData;
        var file = ev.detail().file;

        xhrProgress = function (ev) {
            dialog.progress((ev.loaded / ev.total) * 100);
        }

        xhrComplete = function (ev) {

            if (ev.target.readyState != 4) {
                return;
            }

            xhr = null
            xhrProgress = null
            xhrComplete = null

            if (parseInt(ev.target.status) == 200) {
                response = JSON.parse(ev.target.responseText);
                dialog.populate(response.url, response.size);
            } else {
                new ContentTools.FlashUI('no');
            }
        }

        dialog.state('uploading');
        dialog.progress(0);

        formData = new FormData();
        formData.append('file', file);
        formData.append("id", document.getElementById("id").value);
        xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('progress', xhrProgress);
        xhr.addEventListener('readystatechange', xhrComplete);
        xhr.open('POST', '/av/admin/create-file', true);
        xhr.send(formData);
    });
}





