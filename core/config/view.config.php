<?php
$smarty = new Smarty;
$smarty->force_compile = false;
$smarty->debugging = false;
$smarty->caching = false;
$smarty->cache_lifetime = 120;
//$smarty->template_dir = './app/views';

$smarty->setTemplateDir(array(
    './app/views',
    './admin/views'
));

$smarty->compile_dir = './core/cache';
$smarty->compile_check = true;
$smarty->left_delimiter = '{#';
$smarty->right_delimiter = '#}';
function views(){global $smarty;return $smarty;}
