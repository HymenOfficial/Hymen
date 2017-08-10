@echo off
color f0
echo Welcome to the Hymen Bot terminal! This will allow you to run Hymen from your desktop!
timeout 2 >nul
echo Hymen will start in a couple of seconds, please wait...
timeout 5 >nul
goto timer

:timer
cls
echo Starting Hymen in 5
timeout 1 >nul
cls
echo Starting Hymen in 4
timeout 1 >nul
cls
echo Starting Hymen in 3
timeout 1 >nul
cls
echo Starting Hymen in 2
timeout 1 >nul
cls
echo Starting Hymen in 1
timeout 2 >nul
goto hymen

:hymen
cls
node index
pause