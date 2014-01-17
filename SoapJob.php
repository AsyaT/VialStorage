<?php
error_reporting(E_ALL);
ini_set("soap.wsdl_cache_enabled", "0");
$wsdl_url="http://192.168.0.91/trade10/ws/ws1.1cws?wsdl";
$login = 'Admin';
$password = '12345';

try 
{

$client = new SoapClient($wsdl_url,array('soap_version' => SOAP_1_1,
	   'trace'=>true,
	   'login'=>$login,
	   'password'=>$password
	   ));

$r=$client->__soapCall('GetData',array(NULL),NULL,NULL,$output_headers);

var_dump($r);
}
catch (Exception $e)
{
    print "Ошибка SOAP:<br>".$e->getMessage()."<br>".$e->getTraceAsString();
}
?>