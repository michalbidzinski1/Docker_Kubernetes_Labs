Docker start uruchomi zainstalowany i zatrzymany kontener, natomiast docker run utworzy kontener o podanej nazwie i od razu go uruchomi, 
nawet jeśli wcześniej nie wykonaliśmy komendy docker pull.
-
Różnica pomiędzy docker start oraz docker start -a polega na tym, że dodając -a do docker start "dołączamy" standardowe strumienie dla
danych wyjściowych, danych wyjściowych błędów i sygnałów przekierowywujących. ( STDOUT/STDERR, forward signals)