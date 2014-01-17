<?
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
$v = array(         "categories" => array(
							"Блоки" => array(
									"id" => "1",
									"name" => "Блоки",
									"items" => array(												"Блоки 400*400*1700" => array( "tonnes" => 0.933, "pieses" => 2.000 ),												"Блоки 400*400*1800" => array( "tonnes" => 1.007, "pieses" => 2.000 )												)
												),							"Бой" => array(
									"id" => "2",
									"name" => "Бой",
									"items" => array(
												"Бой графита" => array( "tonnes" => 25.180, "pieses" => 0 ),
												"Бой угольный" => array( "tonnes" => 24.821, "pieses" => 0 )
												)
												),
							"Заготовки" => array(
									"id" => "3",
									"name" => "Заготовки",
									"items" => array(
												"D 100*1600 RP" => array( "tonnes" => 4.120, "pieses" => 184 ),
												"D 100*1600 B-12" => array( "tonnes" => 2.313, "pieses" => 105 )
												)
												),
							"Сыпучие" => array(
									"id" => "4",
									"name" => "Сыпучие",
									"items" => array(
												"Графит ГЛ-1" => array( "tonnes" => 36.229, "pieses" => 0 ),
												"Графит измельченный" => array( "tonnes" => 5.039, "pieses" => 1 ),
												"Масса электродная" => array( "tonnes" => 63.70, "pieses" => 0 ),
												"Пек" => array( "tonnes" => 0.300, "pieses" => 0 )
												)
												),
							"Труба без МО" => array(
									"id" => "5",
									"name" => "Труба без МО",
									"items" => array(
												"Труба без МО" => array( "tonnes" => 49.179, "pieses" => 17 )
												)
												),
							"Трубы угольные" => array(
									"id" => "6",
									"name" => "Трубы угольные",
									"items" => array(
												"Трубы угольные" => array( "tonnes" => 1.553, "pieses" => 273 )
												)
												)
																			));  echo json_encode($v);
?>
