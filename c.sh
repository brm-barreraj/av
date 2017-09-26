#!/bin/bash

user="julian10404"
tables=[]
firstData=0
replace=" "
prex="av_"
while read -a row
do
    if [ $firstData != 0 ]; then
        table=${row[0]}
        tableWithoutPre=${table//$prex/""}
        tableLetter=${tableWithoutPre//"_"/" "}
        tableLetter=`sed 's/\b\(.\)/\u\1/g' <<< "$tableLetter"`
        tableLetter=${tableLetter//" "/""}
        nameModel=$tableLetter"Model"
        echo $nameModel
        file="<?php\n
            \tnamespace Models;\n
            \n
            \tclass $nameModel extends \Illuminate\Database\\\Eloquent\Model {\n
            \t\tprotected \$table = '$tableWithoutPre';\n
            \t\tpublic \$timestamps = false;\n
        \t}\n
        ?>"
        echo -e $file > "models/$nameModel.php"
    fi
    
    firstData=1
done < <(echo "SHOW TABLES" | mysql -u $user avantel)