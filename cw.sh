#!/bin/bash

user="root"
tables=[]
firstData=0
replace=" "
prex="avt_"
mkdir models
while read -a row
do
    if [ $firstData != 0 ]; then
        table=${row[0]}
        tableWithoutPre=${table//$prex/""}
        tableWithoutPre=`sed 'N;s/\n//g' <<< "$tableWithoutPre"`
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
done < <(echo "SHOW TABLES" | c:/xampp/mysql/bin/mysql -u $user avantel)