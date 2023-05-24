export const B1100S = `
2.4.1  C-0001 

Code 
C-0001 
Classification 
Main body: Communication abnormality 
Cause 
Drive serial input abnormality of the main body. Within a specified period of time after the main body becomes active, a serial data is not 
received from the main body drive section. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  PF drive board (PFUDB: PF-709) 
  •  MB drive board (MBDB: MB-507) 
  •  LU drive board (LUDB: LU-411, LU-412) 
  •  Printer control board (PRCB: Main body) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 

                                                                         K- 19 
﻿bizhub PRO 1100                                                                          K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  2. Check the connector connection on PRCB, PFUDB, MBDB, and LUDB. Then repair it when there is any abnormality. 
  3. Replace PFUDB or MBDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB),  L.2.5.1 MB drive board (MBDB)) 
 4.  Replace LUDB. (Connector layout drawing in board: L.2.4.1 LU drive board (LUDB)) 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  6. Check the connector connection and the wiring between PRCB, PFUDB, MBDB, and LUDB. Then repair or replace it when there is any 
     abnormality. 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.2  C-0002 

Code 
C-0002 
Classification 
Main body: Communication abnormality 
Cause 
Drive communication error of the printer control board (PRCB). 
The communication error of the PRCB occurs. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.3  C-0003 

Code 
C-0003 
Classification 
PF: Communication error 
Cause 
Drive communication error of the PF drive board (PFUDB). 
The communication error of the PFUDB occurs. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB: Main body) 
  •  PF drive board (PFUDB: PF-709) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connection and the wiring between PRCB and PFUDB, and repair it when there is any abnormality. 
  3. Check the connector connection on PRCB and PFUDB, and repair it when there is any abnormality. 
 4.  Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.4  C-0004 

Code 
C-0004 
Classification 
LU: Drive abnormality 
Cause 
Drive communication reception error detection abnormality 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB: Main body) 
  •  LU drive board (LUDB: LU-411, LU-412) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 

                                                                    K-20 
﻿bizhub PRO 1100                                                                            K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connection and the wiring between PRCB and LUDB, and repair it when there is any abnormality. 
  3. Check the connector connection on PRCB and LUDB, and repair it when there is any abnormality. 
  4. Replace LUDB. (Connector layout drawing in board: L.2.4.1 LU drive board (LUDB)) 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.5  C-0005 

Code 
C-0005 
Classification 
MB: Communication abnormality 
Cause 
Drive communication reception error detection abnormality 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB) 
  •  MB drive board (MBDB: MB-507) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connection and the wiring between PRCB and MBDB, and repair it when there is any abnormality. 
  3. Check the connector connection on PRCB and MBDB, and repair it when there is any abnormality. 
  4. Replace MBDB. (Connector layout drawing in board:  L.2.5.1 MB drive board (MBDB)) 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.6  C-0006 

Code 
C-0006 
Classification 
Main body: Communication abnormality 
Cause 
ADU drive serial input abnormality. 
Within a specified period of time after the main body becomes active, a serial data is not received from the ADU drive board/1 (ADUDB1). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB) 
  •  ADU drive board/1 (ADUDB1) 
  •  DC power supply board/2 (DCPS/2) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connection between PRCB and ADUDB1, and repair it when there is any abnormality. 
  3. Check the connector connection between ADUDB1 and DCPS/2, and repair it when there is any abnormality. 
  4. Check the connector connection on PRCB, ADUDB1 and DCPS/2. Then repair it when there is any abnormality. 
  5. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
  6. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  7. Check the wiring among PRCB, ADUDB1, and DCPS/2. Then repair or replace it when there is any abnormality. 
  8. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.7  C-0007 

Code 
C-0007 
Classification 
Main body: Communication abnormality 
Cause 
Drive communication error of the ADU drive board/1 (ADUDB1). 
The communication error of the ADUDB1 occurs. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 

                                                                      K-21 
﻿bizhub PRO 1100                                                                             K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Estimated abnormal parts 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connection between PRCB and ADUDB1, and repair it when there is any abnormality. 
  3. Check the connector connection on PRCB and ADUDB1, and repair it when there is any abnormality. 
  4. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.8  C-0020 

Code 
C-0020 
Classification 
Main body: Communication abnormality 
Cause 
Serial communication error. The CPU of the printer control board (PRCB) detects the abnormal interrupt of the serial communication overrun. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.9  C-0030 

Code 
C-0030 
Classification 
Main body: Communication abnormality 
Cause 
Serial transmission abnormality of the printer control board (PRCB). The error signal is continuously detected in the serial communication in the 
PRCB. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.10  C-0031 

Code 
C-0031 
Classification 
Main body: Communication abnormality 
Cause 
Serial transmission abnormality of the ADU drive board/1 (ADUDB1). 
The error signal is continuously detected in the serial communication between the printer control board (PRCB) and the ADUDB1. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 

                                                                      K-22 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connection between PRCB and ADUDB1, and repair it when there is any abnormality. 
  3. Check the connector connection on PRCB and ADUDB1, and repair it when there is any abnormality. 
  4. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.11  C-0032 

Code 
C-0032 
Classification 
Main body: Communication abnormality 
Cause 
Serial transmission abnormality of the PF drive board (PFUDB). 
The error signal is continuously detected in the serial communication between the printer control board (PRCB) and the PFUDB. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB: Main body) 
  •  PF drive board (PFUDB: PF-709) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connection on PRCB and PFUDB, and repair it when there is any abnormality. 
  3. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.12  C-0033 

Code 
C-0033 
Classification 
Main body: Communication abnormality 
Cause 
LU drive board serial transmission abnormality. After the machine becomes active: After a specified time since the first error signal detection, 
the second error signal is detected in succession in the serial communication between the printer control board (PRCB) and the LU drive board 
(LUDB). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB: Main body) 
  •  LU drive board (LUDB: LU-411, LU-412) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connection and the wiring between PRCB and LUDB, and repair it when there is any abnormality. 
  3. Check the connector connection on PRCB and LUDB, and repair it when there is any abnormality. 
  4. Replace LUDB. (Connector layout drawing in board: L.2.4.1 LU drive board (LUDB)) 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.13  C-0034 

Code 
C-0034 
Classification 
Main body: Communication abnormality 
Cause 
MB drive board serial transmission abnormality. After the machine becomes active: After a specified time since the first error signal detection, 
the second error signal is detected in succession in the serial communication between the printer control board (PRCB) and the MB drive board 
(MBDB). 
Measures to take when an alert occurs 

                                                                       K-23 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB: Main body) 
  •  MB drive board (MBDB: MB-507) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connection and the wiring between PRCB and MBDB, and repair it when there is any abnormality. 
  3. Check the connector connection on PRCB and MBDB, and repair it when there is any abnormality. 
  4. Replace MBDB. (Connector layout drawing in board:  L.2.5.1 MB drive board (MBDB)) 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.14  C-0101 

Code 
C-0101 
Classification 
Main body: Drive 
Cause 
Paper feed motor (M4) speed abnormality. Within a specified period of time after the M4 becomes active, the error detection signal is detected 
twice in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed motor (M4) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  "Please call service" is displayed. 
Solution 
  1. Check the connector connection between PRCB and M4, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (28-01) of M4 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     Main body (3/4): 17-P) 
  3. Replace M4. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.15  C-0103 

Code 
C-0103 
Classification 
PF: Drive Abnormality 
Cause 
Paper feed motor (M1) speed abnormality. Within a specified period of time after M1 becomes active, the error detection signal is detected twice 
in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed motor (M1) 
  •  PF drive board (PFUDB) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available.  
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel.  
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check the IO Check (28-02) of M1 and the coupling of the gear, and repair it when there is any abnormality. (Wiring diagram: PF-709: 16- 
     N) 
  2. Check the connector connection between PFUDB and M1, and repair it when there is any abnormality. 
  3. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
  4. Replace M1. 
  5. Check the wiring between the PFUDB and the M1. Then repair or replace it when there is any abnormality. 
Faulty part isolation DIPSW 
DIPSW35-0, 1, 2 
Control during the detachment 
Paper feed in the tray 3, 4, and 5 are unavailable. 

                                                                       K-24 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.4.16  C-0104 

Code 
C-0104 
Classification 
Main body: Power source abnormality 
Cause 
Power abnormality of the vertical conveyance motor (M8) in the printer control board (PRCB). An error detection (blowout of ICP) of M8 is 
detected when the M8 becomes active. In addition, when M8 is active, an abnormal condition of M8 is detected 10 times in succession within a 
specified period of time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Vertical conveyance motor (M8) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and M8, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (22-50) and others of M8 and the coupling of the gear, and repair or replace it when there is any abnormality. Then 
     replace the PRCB. (Wiring diagram: Main body (3/4): 18-B) 
  3. Replace M8 and PRCB at the same time. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.17  C-0105 

Code 
C-0105 
Classification 
PF: Power source abnormality 
Cause 
Power source abnormality for the PF exit conveyance motor (M2) in the PF drive board (PFUDB). An error detection signal (blowout of ICP for 
M2) of the PFUDB is detected when the M2 becomes active. At this time, a close signal of the door is detected 10 times in succession within a 
specified period of time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  PF drive board (PFUDB) 
  •  PF exit conveyance motor (M2) 
  •  Interlock switch (MS1) 
  •  DC power supply board/1 (DCPS/1: Main body) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available.  
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel.  
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Check the IO Check (27-30) and others of M2 and the coupling of the gear, and repair it when there is any abnormality. (Wiring diagram: 
     PF-709: 16-P) 
  2. Check the connector connection between PFUDB and M2, and repair it when there is any abnormality. 
  3. Check the connector connection among PFUDB, MS1, and DCPS/1. Then repair it when there is any abnormality. 
  4. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
  5. Replace M2. 
  6. Replace MS1. 
  7. Replace DCPS/1. (Connector layout drawing in board:  L.2.1.8 DC power supply/1 (DCPS/1)) 
  8. Check the wiring among the PFUDB, the MS1 and DCPS/1. Then repair or replace it when there is any abnormality. 
  9. Check the wiring between the PFUDB and the M2. Then repair or replace it when there is any abnormality. 
Faulty part isolation DIPSW 
DIPSW35-0, 1, 2 
Control during the detachment 
Paper feed in the tray 3, 4, and 5 are unavailable. 

2.4.18  C-0110 

Code 
C-0110 
Classification 
Main body: Power source abnormality 
Cause 
Abnormality of the registration section motor IC in the ADU drive board/2 (ADUDB2). The error detection signal of the ADU conveyance motor/2 
(M16), the registration motor (M17) and the loop motor (M18) is detected after the print is started. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  ADU conveyance motor/2 (M16) 

                                                                         K-25 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  •  Registration motor (M17) 
  •  Loop motor (M18) 
  •  ADU drive board/2 (ADUDB2) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ADUDB2 and M16, M17, M18, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (83-06) and others of M16, IO Check (25-01) and others of M17, IO Check (26-00) and others of M18 and the coupling 
     of the gear, and repair or replace it when there is any abnormality. Then replace the M16, the M17, and the M18. (Wiring diagram: Main 
     body (2/4): 24-L, 24-J, 24-K) 
  3. Replace ADUDB2. (Connector layout drawing in board:  L.2.1.7 ADU drive board/2 (ADUDB2)) 
  4. Replace M16, M17, M18, and ADUDB2 at the same time. 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.19  C-0111 

Code 
C-0111 
Classification 
Main body: Power source abnormality 
Cause 
Abnormality of the duplex section motor IC in the ADU drive board/1 (ADUDB1). The error detection signal of the ADU reverse motor (M12), the 
reverse exit motor (M13), the ADU accelerate motor (M14), and the ADU conveyance motor/1 (M15) is detected after the print is started. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  ADU reverse motor (M12) 
  •  Reverse exit motor (M13) 
  •  ADU accelerate motor (M14) 
  •  ADU conveyance motor/1 (M15) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ADUDB1 and M12, M13, M14, M15, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (84-03) and others of M12, IO Check (27-13) and others of M13, IO Check (85-02) and others of M14, IO Check 
     (83-00) and others of M15 and the coupling of the gear, and repair or replace it when there is any abnormality. Then replace M12, M13, 
     M14, and M15. (Wiring diagram: Main body (2/4): 19-P, 20-P, 18-P, 8-P) 
  3. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
  4. Replace M12, M13, M14, M15, and ADUDB1 at the same time. 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.20  C-0112 

Code 
C-0112 
Classification 
Main body: Power source abnormality 
Cause 
IC abnormality of the vertical conveyance motor in the printer control board (PRCB). 
An abnormality signal of the vertical conveyance motor (M8) is detected 10 times in succession within a specified period of time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Vertical conveyance motor (M8) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and M8, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (22-50) and others of M8 and the coupling of the gear, and repair or replace it when there is any abnormality. Then 
     replace the M8. (Wiring diagram: Main body (3/4): 18-B) 
  3. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  4. Replace M8 and PRCB at the same time. 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.21  C-0113 

Code 
C-0113 

                                                                       K-26 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Classification 
Main body: Power source abnormality 
Cause 
SD and CL_24 V power source abnormality 1 for the tray of the printer control board (PRCB). At the start, the error detection signals of PRCB 
tray solenoid and clutch ICP blowout and 24 V cut off are detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection and the wiring between PRCB and DCPS/2 and which are related to 24 V DC, and repair it when there is 
     any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
  3. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.22  C-0114 

Code 
C-0114 
Classification 
Main body: Power source abnormality 
Cause 
SD and CL_24 V power source abnormality 2 for the tray of the printer control board (PRCB). 
At the start, the error detection signal of PRCB tray solenoid and clutch ICP blowout is detected but no 24 V cut off is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed clutch/1 (CL4) 
  •  Paper feed clutch/2 (CL6) 
  •  Pick-up solenoid/1 (SD3) 
  •  Pick-up solenoid/2 (SD4) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection and the wiring between PRCB and CL4, CL6, SD3, SD4, and which are related to DC24 V, and repair it 
     when there is any abnormality. 
  2. Check the IO Check (22-00) of CL4, IO Check (22-01) of CL6, IO Check (21-30) of SD3, IO Check (21-31) of SD4,or the coupling, repair or 
     replace it when there is any abnormality. Then replace the PRCB. (Wiring diagram: Main body (3/4): 3-B, 8-B, 5-B, 10-B) 
  3. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  4. Replace CL4, CL6, SD3, SD4, and PRCB at the same time. 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.23  C-0115 

Code 
C-0115 
Classification 
Main body: Power source abnormality 
Cause 
SD and CL_24 V power source abnormality 1 for the vertical conveyance of the printer control board (PRCB). At the start, the error detection 
signals of PRCB tray solenoid and clutch ICP blowout and 24 V cut off are detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection and the wiring between PRCB and DCPS/2 and which is related to DC24 V, and repair it when there is 
     any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
  3. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                       K-27 
﻿bizhub PRO 1100                                                                               K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.4.24  C-0116 

Code 
C-0116 
Classification 
Main body: Power source abnormality 
Cause 
SD and CL_24 V power source abnormality 2 for the tray of the printer control board (PRCB). At the start, the error detection signal of PRCB 
tray solenoid and clutch ICP blowout is detected but no 24 V cut off is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Pre-registration clutch/1 (CL1) 
  •  Vertical conveyance clutch (CL2) 
  •  Pre-registration clutch/2 (CL3) 
  •  Erase lamp (EL) 
  •  Tray lock solenoid/1 (SD1) 
  •  Tray lock solenoid/2 (SD2) 
  •  Drum claw solenoid (SD10) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection and the wiring between PRCB and CL1, CL2, CL3, SD1, SD2, SD10, EL, and which are related to DC24 
     V, and repair it when there is any abnormality. 
  2. Check the drive and the coupling of CL1, CL2, CL3, SD1, SD2, SD10, and EL, and repair or replace it when there is any abnormality. Then 
     replace PRCB. (Wiring diagram: Main body (1/4): 17-B, 16-B, 20-B, 20-I) 
  3. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  4. Replace CL1, CL2, CL3, SD1, SD2, SD10, EL, and PRCB at a time. 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.25  C-0118 

Code 
C-0118 
Classification 
PF: Power source abnormality 
Cause 
Power source abnormality for the solenoid and the clutch in the PF drive board (PFUDB). 
The error detection signal (blowout of ICP for solenoid and clutch) of PFUDB is detected when the printing starts. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  PF drive board (PFUDB) 
  •  Tray lock solenoid/1 (SD1), /2 (SD2), /3 (SD3) 
  •  Pick-up solenoid/1 (SD4), /2 (SD5), /3 (SD6) 
  •  Vertical conveyance clutch/1 (CL1), /2 (CL3), 3 (CL5) 
  •  Intermediate conveyance clutch/Up (CL2), /Lw (CL4) 
  •  Paper feed clutch/1 (CL6), /2 (CL9), /3 (CL12) 
  •  Separation clutch/1 (CL7), /2 (CL10), /3 (CL13) 
  •  Intermediate clutch/1 (CL8), /2 (CL11), /3 (CL14) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available.  
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel.  
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Check the IO Check (29-60) of SD1, IO Check (29-61) of SD2, IO Check (29-62) of SD3, IO Check (21-32) of SD4, IO Check (21-33) of 
     SD5, IO Check (21-34) of SD6, IO Check (22-17) of CL1, IO Check (22-18) of CL3, IO Check (22-19) of CL5, IO Check (22-31) of CL2, IO 
     Check (22-32) of CL4, IO Check (22-02) of CL6, IO Check (22-03) of CL9, IO Check (22-04) of CL12, IO Check (21-02) of CL7, IO Check 
     (21-03) of CL10, IO Check (21-04) of CL13, IO Check (21-45) of CL8, IO Check (21-46) of CL11, IO Check (21-47) of CL14, or repair it 
     when there is any abnormality. 
  2. Check the connector connection and the wiring between PFUDB and SD1, SD2, SD3, SD4, SD5, SD6. Then repair or replace it when there 
     is any abnormality. 
  3. Check the connector connection and the wiring between PFUDB and CL1, CL3, CL5, CL2, CL4, CL6, CL9, CL12, CL7, CL10, CL13, CL8, 
     CL11, CL14. Then repair or replace it when there is any abnormality. 
  4. Replace SD1, SD2, SD3, SD4, SD5, SD6, CL1, CL3, CL5, CL2, CL4, CL6, CL9, CL12, CL7, CL10, CL13, CL8, CL11, and CL14. 
  5. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
Faulty part isolation DIPSW 
DIPSW35-0, 1, 2 
Control during the detachment 
Paper feed in the tray 3, 4, and 5 are unavailable. 

                                                                        K-28 
﻿bizhub PRO 1100                                                                            K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.4.26  C-0119 

Code 
C-0119 
Classification 
Main body: Drive 
Cause 
Transfer belt cleaning motor (M5) speed abnormality. Within a specified period of time after M5 becomes active, the EM error detection signal of 
M5 is detected twice in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Transfer belt cleaning motor (M5) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and M5, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (24-07) of M5 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     Main body (3/4): 21-P) 
  3. Replace M5. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.27  C-0120 

Code 
C-0120 
Classification 
Main body: Drive 
Cause 
Paper exit conveyance motor (M31) speed abnormality. Within a specified period of time after M31 becomes active, the EM error detection 
signal of M31 is detected twice in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper exit conveyance motor (M31) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and M31, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (27-00) of M31 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     Main body (3/4): 23-P) 
  3. Replace M31. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.28  C-0121 

Code 
C-0121 
Classification 
Main body: Drive 
Cause 
Paper exit motor (M20) speed abnormality. Within a specified period of time after M20 becomes active, the EM error detection signal of M20 is 
detected twice in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper exit motor (M20) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and M20, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (27-20) and others of M20 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: Main body (3/4): 22-P) 
  3. Replace M20. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 

                                                                      K-29 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Control during the detachment 

2.4.29  C-0150(LU) 

Code 
C-0150 
Classification 
LU 
Cause 
An abnormal speed signal of the paper feed motor (M101) is checked. An error detection signal is detected twice in succession a specified 
period of time after M101 was turned ON (the first signal is ignored). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed motor (M101) 
  •  LU drive board (LUDB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between LUDB and M101, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (28-04) and others of M101 and the coupling of the gear, and repair or replace it when there is any abnormality. 
     (Wiring diagram: LU: 6-C) 
  3. Replace M101. 
  4. Replace LUDB. (Connector layout drawing in board: L.2.4.1 LU drive board (LUDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.30  C-0151(LU) 

Code 
C-0151 
Classification 
LU 
Cause 
The locking of the paper lift motor (M100) is detected. When the M100 is active, an error detection signal of the M100 is detected in succession 
for 1 second. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper lift motor (M100) 
  •  Lower limit sensor (PS101) 
  •  Upper limit sensor (PS109) 
  •  LU drive board (LUDB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the paper loaded condition and the misalignment of the rear end restriction plate, and repair it when there is any abnormality. 
  2. Check the connector connection between LUDB and M100, PS101, PS109, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (23-31) of PS101, IO Check (23-29) of PS109, or the operation. Then repair or replace it when there is any 
     abnormality. (Wiring diagram: LU: 4-G, 6-G) 
  4. Check the IO Check (23-29) and others of M100 and the coupling of the gear, and repair or replace it when there is any abnormality. 
     (Wiring diagram: LU: 5-C) 
  5. Replace PS109 and PS101. 
  6. Replace M100. 
  7. Replace LUDB. (Connector layout drawing in board: L.2.4.1 LU drive board (LUDB)) 
Faulty part isolation DIPSW 
DIPSW18-3 
Control during the detachment 
The paper feed in the LU is unavailable. (The operation panel is displayed in shade) 

2.4.31  C-0152(LU) 

Code 
C-0152 
Classification 
LU: Power source abnormality 
Cause 
Abnormality of the paper lift motor (M100) power in the LU drive board (LUDB). 
An error detection signal (blowout of ICP) of M100 is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper lift motor (M100) 
  •  LU drive board (LUDB) 
Correction 

                                                                       K-30 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between LUDB and M100, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (23-29) and others of M100 and the coupling of the gear, and repair or replace it when there is any abnormality. Then 
     replace the M100. (Wiring diagram: LU: 5-C) 
  3. Replace LUDB. (Connector layout drawing in board: L.2.4.1 LU drive board (LUDB)) 
  4. Replace M100 and LUDB at the same time. 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.32  C-0153(LU) 

Code 
C-0153 
Classification 
LU: Power source abnormality 
Cause 
Abnormality of the solenoid and clutch power in the LU drive board (LUDB). 
An error detection signals (blowout of ICP) of the pick up solenoid (SD100), the paper feed clutch (CL101), and the preregistration clutch 
(CL102) are detected after the print is started. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Pick-up solenoid (SD100) 
  •  Paper feed clutch (CL101) 
  •  Pre-registration clutch (CL102) 
  •  LU drive board (LUDB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between LUDB and SD100, CL101, CL102, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (21-38) of SD100, IO Check (22-90) of CL101, IO Check (22-91) of CL102 and the coupling of the gear, and repair or 
     replace it when there is any abnormality. Then replace the SD100, the CL101, and the CL102. (Wiring diagram: LU: 7-G, 6-G) 
  3. Replace LUDB. (Connector layout drawing in board: L.2.4.1 LU drive board (LUDB)) 
  4. Replace SD100/CL101/CL102 and LUDB at the same time. 
Faulty part isolation DIPSW 
Control during the detachment 

2.4.33  C-0180 

Code 
C-0180 
Classification 
MB: Drive 
Cause 
Paper feed motor/BP (M2) speed abnormality. Within a specified period of time after M2 becomes active, an error detection signal is detected 
twice in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed motor/BP (M2) 
  •  MB drive board (MBDB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between MBDB and M2, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (28-10) of M2 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     MB-507: 7-K) 
  3. Replace M2. 
  4. Replace MBDB. (Connector layout drawing in board:  L.2.5.1 MB drive board (MBDB)) 
Faulty part isolation DIPSW 
DIPSW35-6 
Control during the detachment 

2.4.34  C-0181 

Code 
C-0181 
Classification 
MB: Power source abnormality 
Cause 
Power source abnormality for the relay exit motor/BP (M3) in the MB drive board (MBDB). 
When M3 becomes active, an error detection signal (blowout of ICP) of M3 is detected. 

                                                                         K-31 
﻿bizhub PRO 1100                                                                            K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Relay exit motor/BP (M3) 
  •  MB drive board (MBDB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between MBDB and M3, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (27-70) and others of M3 and the coupling of the gear, and repair or replace it when there is any abnormality. Then 
     replace the MBDB. (Wiring diagram: MB-507: 5-K) 
  3. Replace M3 and MBDB at the same time. (Connector layout drawing in board:  L.2.5.1 MB drive board (MBDB)) 
Faulty part isolation DIPSW 
DIPSW18-3 
DIPSW35-6 
Control during the detachment 

2.4.35  C-0182 

Code 
C-0182 
Classification 
MB: Power source abnormality 
Cause 
Power source abnormality for the solenoid and the clutch in the MB drive board (MBDB). 
The error detection signal (blowout of ICP) of the pick-up solenoid/BP (SD1), the pre-registration clutch/BP (CL1), the intermediate conveyance 
clutch/BP (CL2), and the paper feed clutch/BP (CL3) is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Pick-up solenoid/BP (SD1) 
  •  Pre-registration clutch/BP (CL1) 
  •  Intermediate conveyance clutch/BP (CL2) 
  •  Paper feed clutch/BP (CL3) 
  •  MB drive board (MBDB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between MBDB and SD1, CL1, CL2, CL3, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (21-39) of SD1, IO Check (22-93) of CL1, IO Check (22-94) of CL2, IO Check (22-92) of CL3 and the coupling of the 
     gear, and repair or replace it when there is any abnormality. Then replace the SD1, the CL1, the CL2, and the CL3. (Wiring diagram: 
     MB-507: 10-K, 14-K, 11-K) 
  3. Replace MBDB. (Connector layout drawing in board:  L.2.5.1 MB drive board (MBDB)) 
  4. Replace SD1, CL1, CL2, CL3, and MBDB at the same time. 
Faulty part isolation DIPSW 
DIPSW18-3 
DIPSW35-6 
Control during the detachment 

2.4.36  C-0183 

Code 
C-0183 
Classification 
MB: Drive 
Cause 
Relay conveyance motor/BP (M1) speed abnormality. Within a specified period of time after M1 becomes active, the error detection signal is 
detected twice in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Relay conveyance motor/BP (M1) 
  •  MB drive board (MBDB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between MBDB and M1, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (28-11) of M1 and the coupling of the gear, and repair or replace it when there is any abnormality. Then replace the 
     MBDB. (Wiring diagram: MB-507: 6-K) 
  3. Replace MBDB. (Connector layout drawing in board:  L.2.5.1 MB drive board (MBDB)) 
  4. Replace M1 and MBDB at the same time. 
Faulty part isolation DIPSW 
DIPSW18-3 

                                                                      K-32 
﻿bizhub PRO 1100                                                                               K TROUBLESHOOTING > 2. MALFUNCTION CODE 

DIPSW35-6 
Control during the detachment 

2.4.37  C-0203 

Code 
C-0203 
Classification 
Main body: Tray 1 
Cause 
Tray 1 up abnormality 2. When the upper limit sensor/1 (PS6) is inactive: Within 20 seconds after the lifting operation of the paper lift motor/1 
(M25), PS6 does not become active. At this time, the error detection signal is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Upper limit sensor/1 (PS6) 
  •  Tray lift-up motor/1 (M25) 
  •  Printer control board (PRCB) 
  •  DC power supply/2 (DCPS/2) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the paper loaded condition and the rear end restriction plate condition of the tray 1, and repair it when there is any abnormality. 
  2. Check the connector connection between PRCB and M25, PS6, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (23-07) and others of M25 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: Main body (3/4): 4-B) 
  4. Check the IO Check (23-07) or operation of PS6, and repair or replace it when there is any abnormality. (Wiring diagram: Main body (3/4): 
     1-B) 
  5. Replace PS6. 
  6. Replace M25. 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  8. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
DIPSW18-0 
Control during the detachment 
Paper feed in tray 1 is unavailable. (The operation panel is displayed in shade) 

2.4.38  C-0204 

Code 
C-0204 
Classification 
Main body: Tray 1 
Cause 
The locking of the paper lift motor/1 (M25) is detected. 
When the M25 is active, an error detection signal of the M25 is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Tray lift-up motor/1 (M25) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and M25, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (23-07) and others of M25 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: Main body (3/4): 4-B) 
  3. Replace M25. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
DIPSW18-0 
Control during the detachment 
Paper feed in tray 1 is unavailable. (The operation panel is displayed in shade) 

2.4.39  C-0207 

Code 
C-0207 
Classification 
Main body: Tray 2 
Cause 
Tray 2 up abnormality 2. When the upper limit sensor/2 (PS10) is inactive: Within 20 seconds after the lifting operation of the tray lift-up motor/2 
(M34), PS10 does not become active. At this time, the error detection signal is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 

                                                                        K-33 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Estimated abnormal parts 
  •  Upper limit sensor/2 (PS10) 
  •  Tray lift-up motor/2 (M34) 
  •  Printer control board (PRCB) 
  •  DC power supply/2 (DCPS/2) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the paper loaded condition and the rear end restriction plate condition of the tray 2, and repair it when there is any abnormality. 
  2. Check the connector connection between PRCB and M34, PS10, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (23-09) and others of M34 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: Main body (3/4): 9-B) 
  4. Check the IO Check (23-09) or operation of PS10, and repair or replace it when there is any abnormality. (Wiring diagram: Main body (2/4): 
     6-B) 
  5. Replace PS10. 
  6. Replace M34. 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  8. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
DIPSW18-1 
Control during the detachment 
Paper feed in tray 2 is unavailable. (The operation panel is displayed in shade) 

2.4.40  C-0208 

Code 
C-0208 
Classification 
Main body: Tray 2 
Cause 
The locking of the paper lift motor/2 (M34) is detected. 
When the M34 is active, the error detection signal of the M34 is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Tray lift-up motor/2 (M34) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and M34, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (23-09) and others of M34 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: Main body (3/4): 9-B) 
  3. Replace M34. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
DIPSW18-1 
Control during the detachment 
Paper feed in tray 2 is unavailable. (The operation panel is displayed in shade) 

2.5  Solution 2 (C-0301_0400) 

2.5.1  C-0307 

Code 
C-0307 
Classification 
Main body: Fan abnormality 
Cause 
Paper exit cooling fan/Lw1 (FM10) rotation abnormality + 24 V power abnormality. Within a specified period of time after the FM10 becomes 
active, the 10EM error detection signal of the FM is detected twice in succession. At this time, an error detection signal (24 V cut off) is also 
detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ACDB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
  3. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 

                                                                        K-34 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Control during the detachment 

2.5.2  C-0309 

Code 
C-0309 
Classification 
Main body: Fan abnormality 
Cause 
Paper exit cooling fan/Lw1 (FM10) rotation abnormality. Within a specified period of time after the FM10 becomes active, the EM error detection 
signal of the FM10 is detected twice in succession. In addition, an error detection signal (24 V cut off) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper exit cooling fan/Lw1 (FM10) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and FM10, and the wiring. Then repair it when there is any abnormality. 
  2. Check the connector connection between ACDB and FM10, and the wiring. Then repair it when there is any abnormality. 
  3. Rotate FM10 with the IO Check (42-94) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (2/4): 16-A) 
  4. Replace FM10. 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  6. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.5.3  C-0310 

Code 
C-0310 
Classification 
Main body: Fan abnormality 
Cause 
Paper exit cooling fan/Lw2 (FM28) rotation abnormality + 24 V power abnormality Within a specified period of time after the FM28 becomes 
active, the EM error detection signal of the FM28 is detected twice in succession. At this time, an error detection signal (24 V cut off) is also 
detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ACDB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
  3. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.5.4  C-0312 

Code 
C-0312 
Classification 
Main body: Fan abnormality 
Cause 
Paper exit cooling fan/Lw2 (FM28) rotation abnormality. Within a specified period of time after the FM28 becomes active, the EM error detection 
signal of the FM28 is detected twice in succession. However, an error detection signal (24 V cut off) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper exit cooling fan/Lw2 (FM28) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and FM28, and the wiring. Then repair it when there is any abnormality. 
  2. Check the connector connection between ACDB and FM28, and the wiring. Then repair it when there is any abnormality. 
  3. Rotate FM28 with the IO Check (42-94) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (2/4): 16-A) 

                                                                         K-35 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  4. Replace FM28. 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  6. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.5.5  C-0341 

Code 
C-0341 
Classification 
PF: Fan abnormality 
Cause 
Power source abnormality of the paper feed assist fan/Fr1 (FM1). Within a specified period of time after FM1 becomes active, FM1 error 
detection signal is detected twice in succession. At this time, the error detection signal of PFUDB (blowout of ICP for fan) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed assist fan/Fr1 (FM1), /Rr1 (FM2) 
  •  Paper feed assist fan/Fr2 (FM3), /Rr2 (FM4) 
  •  Paper feed assist fan/Fr3 (FM5), /Rr3 (FM6) 
  •  PF cooling fan (FM7) 
  •  PF drive board (PFUDB) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available.  
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel.  
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Rotate the fan with the IO Check (42-82) of FM1, IO Check (42-82) of FM2, IO Check (42-83) of FM3, IO Check (42-83) of FM4, IO Check 
     (42-84) of FM5, IO Check (42-84) of FM6, and IO Check (42-62) of FM7, or by hand. Then repair it when there is any abnormality. 
  2. Check the connector connection between PFUDB and FM1, FM2, FM3, FM4, FM5, FM6, FM7, and the wiring. Then repair or replace it 
     when there is any abnormality. 
  3. Replace FM1, FM2, FM3, FM4, FM5, FM6, and FM7. 
  4. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
Faulty part isolation DIPSW 
DIPSW35-0 
Control during the detachment 
Paper feed in the tray 3 is unavailable. 

2.5.6  C-0342 

Code 
C-0342 
Classification 
PF: Fan abnormality 
Cause 
Rotation abnormality of the paper feed assist fan/Fr1 (FM1). Within a specified period of time after FM1 becomes active, FM1 error detection 
signal is detected twice in succession. At this time, the error detection signal of PFUDB (blowout of ICP for fan) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed assist fan/Fr1 (FM1) 
  •  PF drive board (PFUDB) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available.  
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel.  
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Rotate FM1 with the IO Check (42-82) or by hand. Then repair it when there is any abnormality. (Wiring diagram: PF-709: 6-A) 
  2. Check the connector connection between PFUDB and FM1, and the wiring. Then repair or replace it when there is any abnormality. 
  3. Replace FM1. 
  4. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
Faulty part isolation DIPSW 
DIPSW35-0 
Control during the detachment 
Paper feed in the tray 3 is unavailable. 

2.5.7  C-0344 

Code 
C-0344 
Classification 
PF: Fan abnormality 
Cause 

                                                                        K-36 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Power source abnormality of the paper feed assist fan/Rr1 (FM2). Within a specified period of time after FM2 becomes active, FM2 error 
detection signal is detected twice in succession. At this time, the error detection signal of PFUDB (blowout of ICP for fan) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed assist fan/Fr1 (FM1), /Rr1 (FM2) 
  •  Paper feed assist fan/Fr2 (FM3), /Rr2 (FM4) 
  •  Paper feed assist fan/Fr3 (FM5), /Rr3 (FM6) 
  •  PF cooling fan (FM7) 
  •  PF drive board (PFUDB) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available.  
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel.  
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Rotate the fan with the IO Check (42-82) of FM1, IO Check (42-82) of FM2, IO Check (42-83) of FM3, IO Check (42-83) of FM4, IO Check 
     (42-84) of FM5, IO Check (42-84) of FM6, and IO Check (42-62) of FM7, or by hand. Then repair it when there is any abnormality. 
  2. Check the connector connection between PFUDB and FM1, FM2, FM3, FM4, FM5, FM6, FM7, and the wiring. Then repair or replace it 
     when there is any abnormality. 
  3. Replace FM1, FM2, FM3, FM4, FM5, FM6, and FM7. 
  4. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
Faulty part isolation DIPSW 
DIPSW35-0 
Control during the detachment 
Paper feed in the tray 3 is unavailable. 

2.5.8  C-0345 

Code 
C-0345 
Classification 
PF: Fan abnormality 
Cause 
Rotation abnormality of the paper feed assist fan/Rr1 (FM2). Within a specified period of time after FM2 becomes active, FM2 error detection 
signal is detected twice in succession. At this time, the error detection signal of PFUDB (blowout of ICP for fan) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed assist fan/Rr1 (FM2) 
  •  PF drive board (PFUDB) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available.  
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel.  
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Rotate FM2 with the IO Check (42-82) or by hand. Then repair it when there is any abnormality. (Wiring diagram: PF-709: 6-A) 
  2. Check the connector connection between PFUDB and FM2, and the wiring. Then repair or replace it when there is any abnormality. 
  3. Replace FM2. 
  4. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
Faulty part isolation DIPSW 
DIPSW35-0 
Control during the detachment 
Paper feed in the tray 3 is unavailable. 

2.5.9  C-0347 

Code 
C-0347 
Classification 
PF: Fan abnormality 
Cause 
Power source abnormality of the paper feed assist fan/Fr2 (FM3). Within a specified period of time after FM3 becomes active, FM3 error 
detection signal is detected twice in succession. At this time, the error detection signal of PFUDB (blowout of ICP for fan) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed assist fan/Fr1 (FM1), /Rr1 (FM2) 
  •  Paper feed assist fan/Fr2 (FM3), /Rr2 (FM4) 
  •  Paper feed assist fan/Fr3 (FM5), /Rr3 (FM6) 
  •  PF cooling fan (FM7) 
  •  PF drive board (PFUDB) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available.  

                                                                        K-37 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel.  
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Rotate the fan with the IO Check (42-82) of FM1, IO Check (42-82) of FM2, IO Check (42-83) of FM3, IO Check (42-83) of FM4, IO Check 
     (42-84) of FM5, IO Check (42-84) of FM6, and IO Check (42-62) of FM7, or by hand. Then repair it when there is any abnormality. 
  2. Check the connector connection between PFUDB and FM1, FM2, FM3, FM4, FM5, FM6, FM7, and the wiring. Then repair or replace it 
     when there is any abnormality. 
  3. Replace FM1, FM2, FM3, FM4, FM5, FM6, and FM7. 
  4. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
Faulty part isolation DIPSW 
DIPSW35-1 
Control during the detachment 
Paper feed in the tray 4 is unavailable. 

2.5.10  C-0348 

Code 
C-0348 
Classification 
PF: Fan abnormality 
Cause 
Rotation abnormality of the paper feed assist fan/Fr2 (FM3). Within a specified period of time after FM3 becomes active, FM3 error detection 
signal is detected twice in succession. At this time, the error detection signal of PFUDB (blowout of ICP for fan) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed assist fan/Fr2 (FM3) 
  •  PF drive board (PFUDB) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available.  
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel.  
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Rotate FM3 with the IO Check (42-83) or by hand. Then repair it when there is any abnormality. (Wiring diagram: PF-709: 13-A) 
  2. Check the connector connection between PFUDB and FM3, and the wiring. Then repair or replace it when there is any abnormality. 
  3. Replace FM3. 
  4. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
Faulty part isolation DIPSW 
DIPSW35-1 
Control during the detachment 
Paper feed in the tray 4 is unavailable. 

2.5.11  C-0350 

Code 
C-0350 
Classification 
PF: Fan abnormality 
Cause 
Power source abnormality of the paper feed assist fan/Rr2 (FM4). Within a specified period of time after FM4 becomes active, FM4 error 
detection signal is detected twice in succession. At this time, the error detection signal of PFUDB (blowout of ICP for fan) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed assist fan/Fr1 (FM1), /Rr1 (FM2) 
  •  Paper feed assist fan/Fr2 (FM3), /Rr2 (FM4) 
  •  Paper feed assist fan/Fr3 (FM5), /Rr3 (FM6) 
  •  PF cooling fan (FM7) 
  •  PF drive board (PFUDB) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available.  
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel.  
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Rotate the fan with the IO Check (42-82) of FM1, IO Check (42-82) of FM2, IO Check (42-83) of FM3, IO Check (42-83) of FM4, IO Check 
     (42-84) of FM5, IO Check (42-84) of FM6, and IO Check (42-62) of FM7, or by hand. Then repair it when there is any abnormality. 
  2. Check the connector connection between PFUDB and FM1, FM2, FM3, FM4, FM5, FM6, FM7, and the wiring. Then repair or replace it 
     when there is any abnormality. 
  3. Replace FM1, FM2, FM3, FM4, FM5, FM6, and FM7. 
  4. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
Faulty part isolation DIPSW 
DIPSW35-1 
Control during the detachment 
Paper feed in the tray 4 is unavailable. 

                                                                        K-38 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.5.12  C-0351 

Code 
C-0351 
Classification 
PF: Fan abnormality 
Cause 
Rotation abnormality of the paper feed assist fan/Rr2 (FM4). Within a specified period of time after FM4 becomes active, FM4 error detection 
signal is detected twice in succession. At this time, the error detection signal of PFUDB (blowout of ICP for fan) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed assist fan/Rr2 (FM4) 
  •  PF drive board (PFUDB) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available.  
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel.  
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Rotate FM4 with the IO Check (42-83) or by hand. Then repair it when there is any abnormality. (Wiring diagram: PF-709: 13-A) 
  2. Check the connector connection between PFUDB and FM4, and the wiring. Then repair or replace it when there is any abnormality. 
  3. Replace FM4. 
  4. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
Faulty part isolation DIPSW 
DIPSW35-1 
Control during the detachment 
Paper feed in the tray 4 is unavailable. 

2.5.13  C-0353 

Code 
C-0353 
Classification 
PF: Fan abnormality 
Cause 
Power source abnormality of the paper feed assist fan/Fr3 (FM5). Within a specified period of time after FM5 becomes active, FM5 error 
detection signal is detected twice in succession. At this time, the error detection signal of PFUDB (blowout of ICP for fan) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed assist fan/Fr1 (FM1), /Rr1 (FM2) 
  •  Paper feed assist fan/Fr2 (FM3), /Rr2 (FM4) 
  •  Paper feed assist fan/Fr3 (FM5), /Rr3 (FM6) 
  •  PF cooling fan (FM7) 
  •  PF drive board (PFUDB) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available.  
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel.  
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Rotate the fan with the IO Check (42-82) of FM1, IO Check (42-82) of FM2, IO Check (42-83) of FM3, IO Check (42-83) of FM4, IO Check 
     (42-84) of FM5, IO Check (42-84) of FM6, and IO Check (42-62) of FM7, or by hand. Then repair it when there is any abnormality. 
  2. Check the connector connection between PFUDB and FM1, FM2, FM3, FM4, FM5, FM6, FM7, and the wiring. Then repair or replace it 
     when there is any abnormality. 
  3. Replace FM1, FM2, FM3, FM4, FM5, FM6, and FM7. 
  4. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
Faulty part isolation DIPSW 
DIPSW35-2 
Control during the detachment 
Paper feed in the tray 5 is unavailable. 

2.5.14  C-0354 

Code 
C-0354 
Classification 
PF: Fan abnormality 
Cause 
Rotation abnormality of the paper feed assist fan/Fr3 (FM5). Within a specified period of time after FM5 becomes active, FM5 error detection 
signal is detected twice in succession. At this time, the error detection signal of PFUDB (blowout of ICP for fan) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed assist fan/Fr3 (FM5) 
  •  PF drive board (PFUDB) 

                                                                        K-39 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available.  
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel.  
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Rotate FM5 with the IO Check (42-84) or by hand. Then repair it when there is any abnormality. (Wiring diagram: PF-709: 20-A) 
  2. Check the connector connection between PFUDB and FM5, and the wiring. Then repair or replace it when there is any abnormality. 
  3. Replace FM5. 
  4. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
Faulty part isolation DIPSW 
DIPSW35-2 
Control during the detachment 
Paper feed in the tray 5 is unavailable. 

2.5.15  C-0356 

Code 
C-0356 
Classification 
PF: Fan abnormality 
Cause 
Power source abnormality of the paper feed assist fan/Rr3 (FM6). Within a specified period of time after FM6 becomes active, FM6 error 
detection signal is detected twice in succession. At this time, the error detection signal of PFUDB (blowout of ICP for fan) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed assist fan/Fr1 (FM1), /Rr1 (FM2) 
  •  Paper feed assist fan/Fr2 (FM3), /Rr2 (FM4) 
  •  Paper feed assist fan/Fr3 (FM5), /Rr3 (FM6) 
  •  PF cooling fan (FM7) 
  •  PF drive board (PFUDB) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available.  
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel.  
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Rotate the fan with the IO Check (42-82) of FM1, IO Check (42-82) of FM2, IO Check (42-83) of FM3, IO Check (42-83) of FM4, IO Check 
     (42-84) of FM5, IO Check (42-84) of FM6, and IO Check (42-62) of FM7, or by hand. Then repair it when there is any abnormality. 
  2. Check the connector connection between PFUDB and FM1, FM2, FM3, FM4, FM5, FM6, FM7, and the wiring. Then repair or replace it 
     when there is any abnormality. 
  3. Replace FM1, FM2, FM3, FM4, FM5, FM6, and FM7. 
  4. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
Faulty part isolation DIPSW 
DIPSW35-2 
Control during the detachment 
Paper feed in the tray 5 is unavailable. 

2.5.16  C-0357 

Code 
C-0357 
Classification 
PF: Fan abnormality 
Cause 
Rotation abnormality of the paper feed assist fan/Rr3 (FM6). Within a specified period of time after FM6 becomes active, FM6 error detection 
signal is detected twice in succession. At this time, the error detection signal of PFUDB (blowout of ICP for fan) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed assist fan/Rr3 (FM6) 
  •  PF drive board (PFUDB) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available.  
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel.  
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Rotate FM6 with the IO Check (42-84) or by hand. Then repair it when there is any abnormality. (Wiring diagram: PF-709: 21-A) 
  2. Check the connector connection between PFUDB and FM6, and the wiring. Then repair or replace it when there is any abnormality. 
  3. Replace FM6. 
  4. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
Faulty part isolation DIPSW 
DIPSW35-2 
Control during the detachment 

                                                                        K-40 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Paper feed in the tray 5 is unavailable. 

2.5.17  C-0359 

Code 
C-0359 
Classification 
PF: Fan abnormality 
Cause 
Power source abnormality of the PF cooling fan (FM7). Within a specified period of time after FM7 becomes active, FM7 error detection signal is 
detected twice in succession. At this time, the error detection signal of PFUDB (blowout of ICP for fan) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed assist fan/Fr1 (FM1), /Rr1 (FM2) 
  •  Paper feed assist fan/Fr2 (FM3), /Rr2 (FM4) 
  •  Paper feed assist fan/Fr3 (FM5), /Rr3 (FM6) 
  •  PF cooling fan (FM7) 
  •  PF drive board (PFUDB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate the fan with the IO Check (42-82) of FM1, IO Check (42-82) of FM2, IO Check (42-83) of FM3, IO Check (42-83) of FM4, IO Check 
     (42-84) of FM5, IO Check (42-84) of FM6, and IO Check (42-62) of FM7, or by hand. Then repair it when there is any abnormality. 
  2. Check the connector connection between PFUDB and FM1, FM2, FM3, FM4, FM5, FM6, FM7, and the wiring. Then repair or replace it 
     when there is any abnormality. 
  3. Replace FM1, FM2, FM3, FM4, FM5, FM6, and FM7. 
  4. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.5.18  C-0360 

Code 
C-0360 
Classification 
PF: Fan abnormality 
Cause 
Rotation abnormality of the PF cooling fan (FM7). Within a specified period of time after FM7 becomes active, FM7 error detection signal is 
detected twice in succession. At this time, the error detection signal of PFUDB (blowout of ICP for fan) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  PF cooling fan (FM7) 
  •  PF drive board (PFUDB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM7 with the IO Check (42-62) or by hand. Then repair it when there is any abnormality. (Wiring diagram: PF-709: 5-A) 
  2. Check the connector connection between PFUDB and FM7, and the wiring. Then repair or replace it when there is any abnormality. 
  3. Replace FM7. 
  4. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.6  Solution 3 (C-0401_0700) 

2.6.1  C-0403 

Code 
C-0403 
Classification 
Main body: Power abnormality 
Cause 
12 V power source abnormality in the printer control board (PRCB). The error detection signal of PRCB (blowout of ICP for 12 V) is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB) 
  •  DC power supply/2 (DCPS/2) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection on PRCB and DCPS/2, and repair it when there is any abnormality. 
  2. Check the wiring between the PRCB and the DCPS/2. Then repair or replace it when there is any abnormality. 
  3. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 

                                                                        K-41 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  4. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.6.2  C-0404 

Code 
C-0404 
Classification 
Main body: Power abnormality 
Cause 
5 V power source abnormality in the printer control board (PRCB). The error detection signal of PRCB (blowout of ICP for 5 V) is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB) 
  •  DC power supply/2 (DCPS/2) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection on PRCB and DCPS/2, and repair it when there is any abnormality. 
  2. Check the wiring between the PRCB and the DCPS/2. Then repair or replace it when there is any abnormality. 
  3. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  4. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.6.3  C-0410 

Code 
C-0410 
Classification 
Main body: Power abnormality 
Cause 
12 V power source abnormality in the ADU drive board/1 (ADUDB1). The error detection signal of ADUDB1 (blowout of ICP for 12 V) is 
detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  ADU drive board/1 (ADUDB1) 
  •  DC power supply/2 (DCPS/2) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection on ADUDB1 and DCPS/2, and repair it when there is any abnormality. 
  2. Check the connector connection and the wiring between ADUDB1 and DCPS/2. Then repair or replace it when there is any abnormality. 
  3. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
  4. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.6.4  C-0411 

Code 
C-0411 
Classification 
Main body: Power abnormality 
Cause 
ADU drive board/1 (ADUDB1) power abnormality 1. An error detection signal (blowout of ICP) of the transfer paper correction sensor (PS4), 
transfer exposure lamp (L4) or SD is detected. At this time, an error detection signal (24 V cut off) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  ADU drive board/1 (ADUDB1) 
  •  DC power supply/1 (DCPS/1) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection and the wiring on ADUDB1, and repair it when there is any abnormality. 
  2. Check the connector connection between ADUDB1 and DCPS/1, and the wiring. Then repair it when there is any abnormality. 
  3. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
  4. Replace DCPS/1. (Connector layout drawing in board:  L.2.1.8 DC power supply/1 (DCPS/1)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                        K-42 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.6.5  C-0412 

Code 
C-0412 
Classification 
Main body: Power abnormality 
Cause 
ADU drive board/1 (ADUDB1) power abnormality 2. An error detection signal (blowout of ICP) of the correction sensor (PS4), the transfer 
exposure lamp (L4) or SD is detected. However, an abnormality signal (24 V cut off) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  ADU lock solenoid (SD6) 
  •  Reverse exit solenoid (SD7) 
  •  De-curler solenoid/Up (SD8) 
  •  Centering sensor (PS4) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection and the wiring on ADUDB1, and repair it when there is any abnormality. 
  2. Check the connector connection between ADUDB1 and PS4, SD6, SD7, SD8, and the wiring. Then repair it when there is any abnormality. 
     (Wiring diagram: Main body (2/4): 18-I, 17-P, 17-I) 
  3. Check the drive and the coupling of PS4, SD6, SD7, and SD8, and repair or replace it when there is any abnormality. 
  4. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.6.6  C-0413 

Code 
C-0413 
Classification 
Main body: Power abnormality 
Cause 
Interlock power source abnormality of the ADU drive board/1 (ADUDB1). When the door detection signal is close, an error detection signal of 
ADUDB1 (24 V interlock power source) is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  ADU drive board/1 (ADUDB1) 
  •  DC power supply/1 (DCPS/1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection on ADUDB1 and DCPS/1, and repair it when there is any abnormality. 
  2. Check the connector connection and the wiring between ADUDB1 and DCPS/1. Then repair or replace it when there is any abnormality. 
  3. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
  4. Replace DCPS/1. (Connector layout drawing in board:  L.2.1.8 DC power supply/1 (DCPS/1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.6.7  C-0414 

Code 
C-0414 
Classification 
Main body: Centering sensor abnormality 
Cause 
When the centering sensor (PS4) becomes active, the machine does not send the centering data from the ADU drive board for 5 sheets or more 
in succession. When the centering detection is inactive, this error code is not detected. 
When it occurs during the OHP sheet passage, refer to the troubleshooting guide 
R.1.40 Specific paper feeding conditions (Label, OHP). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Centering sensor (PS4) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ADUDB1 and PS4, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (18-02) of PS4, and repair or replace it when there is any abnormality. (Wiring diagram: Main body (2/4): 17-I) 
  3. Replace PS4. 

                                                                       K-43 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  4. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.6.8  C-0420 

Code 
C-0420 
Classification 
PF: Power source abnormality 
Cause 
12 V power source abnormality of the PF drive board (PFUDB). The error detection signal of PFUDB (blowout of ICP for 12 V) is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  PF drive board (PFUDB) 
  •  DC power supply board/2 (DCPS/2: Main body) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection on PFUDB and DCPS/2. Then repair it when there is any abnormality. 
  2. Check the connector connection and the wiring between PFUDB and DCPS/2. Then repair or replace it when there is any abnormality. 
  3. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
  4. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.6.9  C-0422 

Code 
C-0422 
Classification 
PF: Power source abnormality 
Cause 
24 V power source abnormality of the PF drive board (PFUDB). When the printing starts, an error detection signal (24 V power DOWN) of 
PFUDB is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  PF drive board (PFUDB) 
  •  DC power supply board/2 (DCPS/2: Main body) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection on PFUDB and DCPS/2. Then repair it when there is any abnormality. 
  2. Check the connector connection and the wiring between PFUDB and DCPS/2. Then repair or replace it when there is any abnormality. 
  3. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
  4. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.6.10  C-0450 

Code 
C-0450 
Classification 
LU: Installation abnormality 
Cause 
The LU-409 or the LU-410 for bizhub PRO 951 is connected to bizhub PRO 1100. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  LU drive board (LUDB: LU-411, LU-412) 
  •  Printer control board (PRCB: Main body) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check to see whether LUDB is for LU-411 or LU-412. 
  2. Check the connector connection and the wiring on LUDB, and repair it when there is any abnormality. 
  3. Check the connector connection and the wiring between LUDB and PRCB of the main body, and repair it when there is any abnormality. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                       K-44 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.6.11  C-0451 

Code 
C-0451 
Classification 
PF: Installation abnormality 
Cause 
The PF for bizhub PRO 951 is connected to bizhub PRO 1100. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  PF drive board (PFUDB: PF-709) 
  •  Printer control board (PRCB: Main body) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Confirm that PFUDB is the board for PF-709. 
  2. Check the connector connection on PFUDB and PRCB, and repair it when there is any abnormality. 
  3. Check the connector connection between PFUDB and PRCB, and repair it when there is any abnormality. 
  4. Replace PFUDB. (Connector layout drawing in board:  L.2.3.1 PF drive board (PFUDB)) 
  5. Check the wiring between the PFUDB and the PRCB. Then repair or replace it when there is any abnormality. 
  6. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.6.12  C-0452 

Code 
C-0452 
Classification 
MB: Power source abnormality 
Cause 
Abnormality of the power for the MB drive board (MBDB) 12 V. The error detection signal of MBDB (blowout of ICP for 12 V) is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  MB drive board (MBDB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection and the wiring on MBDB, and repair it when there is any abnormality. 
  2. Replace MBDB. (Connector layout drawing in board:  L.2.5.1 MB drive board (MBDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.6.13  C-0453 

Code 
C-0453 
Classification 
MB: Power source abnormality 
Cause 
Abnormality of the power for the MB drive board (MBDB) 24 V. 
During printing, an error detection signal (24 V power DOWN) of MBDB is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  MB drive board (MBDB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection and the wiring on MBDB, and repair it when there is any abnormality. 
  2. Replace MBDB. (Connector layout drawing in board:  L.2.5.1 MB drive board (MBDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.7  Solution 4 (C-1001_1181) 

2.7.1  C-1005 

Code 
C-1005 
Classification 
FS: FS-532 abnormality 
Cause 

                                                                       K-45 
﻿bizhub PRO 1100                                                                             K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Communication error. 
Measures to take when alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB) 
  •  FNS control board (FNSCB) 
Correction 
Turn OFF/ON the sub power switch of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the panel. 
Solution 
  1. Turn OFF the sub power switch, and then turn OFF the main power switch. Then unplug all the power plug. Restart the main body after 10 
     seconds. 
  2. Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
  3. Check the connector connection of the control board and the drive board in each option, and repair it if any abnormality. 
  4. Rewrite the firmware of the option. 
  5. Replace the control board of the option corresponds to the malfunction code. 
Faulty part isolation DIPSW 
Control while detached 

2.7.2  C-1012 

Code 
C-1012 
Classification 
GP: GP-501 abnormality 
Causes 
Communication abnormality. 
Resulting operation 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB) 
  •  Punch Controller PCB 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the panel. 
Procedure 
  1.  After the sub power switch becomes inactive, deactivate the main power switch and unplug the all the power plugs. Restart the main body 
     after 10 seconds. 
  2. Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
  3. Check the connector connection of the control board and the drive board in each option, and repair it if any abnormality. 
  4. Rewrite the firmware of the option. 
  5. Replace the control board of the option corresponds to the malfunction code. 
DipSW 
Control during separation 

2.7.3  C-1015 

Code 
C-1015 
Classification 
RU-518: Communication error (1st device) 
Cause 
Communication error. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Deactivate the sub power switch and unplug the power plug. Restart the main body after 10 seconds. 
  2. Check the connector connection between the main body and each option, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection of PCB1. Then repair it when there is any abnormality. 
  4. Reinstall RU-518 firmware. 
  5. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.7.4  C-1102 

Code 
C-1102 
Classification 
FS: FS-532 abnormality 
Cause 
The tray up down motor (M11) does not become inactive even when a specified period of time elapses after it starts operations. Alternatively, it 
operates for more than the allowed time at a speed out of the specified one. 

                                                                      K-46 
﻿bizhub PRO 1100                                                                            K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Main tray up down motor (M11) 
  •  Main tray upper limit sensor (PS14) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the tray up and down section, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between FNSCB and M11, PS14, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (72-11) operation of PS14, LED emission, and the light-receiving path, and repair or replace it when there is any 
     abnormality. (Wiring diagram: FS-532: 7-B) 
  4. Check the IO Check (72-15) of M11 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     FS-532: 7-B) 
  5. Replace LED1 and PS14. 
  6. Replace M11. 
  7. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-4 
Control during the detachment 
FS main tray and stapling are not available 

2.7.5  C-1102 (OT-510) 

Code 
C-1102 
Classification 
OT: OT-510 abnormality 
Cause 
The tray up down motor (M11) does not become inactive even when a specified period of time elapses after it starts operations. Alternatively, it 
operates for more than the allowed time at a speed out of the specified one. 
Measures to take when an alert occurs 
Main body and options stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Main tray up down motor (M11) 
  •  Main tray upper limit sensor (PS14) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check the tray up and down section, and clean or repair it when there is any abnormality. 
  2. Check the connector connection and the wiring between FNSCB, M11, and PS14, and repair it when there is any abnormality. 
  3. Check the IO Check (72-11) operation of PS14, LED emission, and the light-receiving path, and repair or replace it when there is any 
     abnormality. (Wiring diagram: OT-510 : 7-B) 
  4. Check the IO Check (72-15) of M11 or the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     OT-510 : 7-B) 
  5. Replace LED1 and PS14. 
  6. Replace M11. 
  7. Replace FNSCB. (CONNECTOR LAYOUT DRAWING IN BOARD:  L.2.6.1 FNS control board) 
Faulty part isolation DIPSW 
Control while detached 

2.7.6  C-1103 

Code 
C-1103 
Classification 
FS: FS-532 abnormality 
Cause 
The stacker alignment home sensor (PS12) does not become active within a specified period of time after the home position search operation of 
the stacker alignment motor (M9) starts. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Stacker alignment motor (M9) 
  •  Stacker alignment home sensor (PS12) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 

                                                                      K-47 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  1. Check the alignment section. Then clean or repair it when there is any abnormality. 
  2. Check the connector connection between FNSCB and M9, PS12, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (72-09) of M9 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     FS-532: 5-F) 
  4. Check the IO Check (72-09) of PS12 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 10- 
     B) 
  5. Replace PS12. 
  6. Replace M9. 
  7. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-3 
Control during the detachment 
The use of the staple is unavailable 

2.7.7  C-1105 

Code 
C-1105 
Classification 
FS: FS-532 abnormality 
Cause 
The paper exit opening unit does not get to the specified opening position within a specified period of time after the paper exit opening motor 
(M10) starts operations. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Paper exit opening motor (M10) 
  •  Paper exit home sensor (PS13) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the paper exit opening section, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between FNSCB and M10, PS13, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (72-13) and others of M10 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: FS-532: 3-F) 
     Note 
       ▪  The output check of the IO check mode has restrictive conditions. Check the IO check mode list before the output check. 
  4. Check the IO Check (72-10) of PS13 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 4-B) 
  5. Replace PS13. 
  6. Replace M10. 
  7. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-4 
Control during the detachment 
FS main tray and stapling are not available 

2.7.8  C-1105 (OT-510) 

Code 
C-1105 
Classification 
OT: OT-510 abnormality 
Cause 
The paper exit opening unit does not get to the specified opening position within a specified period of time after the paper exit opening motor 
(M10) starts operations. 
Measures to take when an alert occurs 
Main body and options stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Paper exit opening motor (M10) 
  •  Paper exit home sensor (PS13) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check the paper exit opening section, and clean or repair it when there is any abnormality. 
  2. Check the connector connection and the wiring between FNSCB, M10, and PS13, and repair it when there is any abnormality. 
  3. Check the IO Check (72-13) of M10 or the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     OT-510 : 3-F) 
     Note 
       ▪  The output check of the IO check mode has restrictive conditions. Check the IO check mode list before the output check. 
  4. Check the IO Check (72-10) of PS13 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: OT-510 : 4- 
     B) 

                                                                       K-48 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  5. Replace PS13. 
  6. Replace M10. 
  7. Replace FNSCB. (CONNECTOR LAYOUT DRAWING IN BOARD:  L.2.6.1 FNS control board) 
Faulty part isolation DIPSW 
Control while detached 

2.7.9  C-1106 

Code 
C-1106 
Classification 
FS: FS-532 abnormality 
Cause 
The stapler movement home sensor (PS22) does not become active within a specified period of time after the home position search operation of 
the stapler movement motor (M14) starts. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Stapler movement motor (M14) 
  •  Stapler movement home sensor (PS22) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the stapler movement section, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between FNSCB and M14, PS22, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (72-24) and others of M14 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: FS-532: 5-F) 
  4. Check the IO Check (72-19) of PS22 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 10- 
     B) 
  5. Replace PS22. 
  6. Replace M14. 
  7. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-3 
Control during the detachment 
The use of the staple is unavailable 

2.7.10  C-1109 

Code 
C-1109 
Classification 
FS: FS-532 abnormality 
Cause 
The stapler home sensor (PS40) does not become active within a specified period of time after the stapler motor (M31) starts operations. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Stapler unit 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection and the wiring between FNSCB and the stapler, and repair it when there is any abnormality. 
  2. Replace the stapler assy. 
  3. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-3 
Control during the detachment 
The use of the staple is unavailable 

2.7.11  C-1113 

Code 
C-1113 
Classification 
FS: FS-532 abnormality 
Cause 
The stacker rear stopper home sensor (PS27) does not become active within a specified period of time after the home position search operation 
of the stacker movement motor (M19) starts. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 

                                                                          K-49 
﻿bizhub PRO 1100                                                                               K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  •  Stacker movement motor (M19) 
  •  Stacker rear stopper home sensor (PS27) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the stapler rotation section, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between FNSCB and M19, PS27, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (72-30) of M19 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     FS-532: 5-F) 
  4. Check the IO Check (72-24) of PS27 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 11- 
     B) 
  5. Replace PS27. 
  6. Replace M19. 
  7. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-3 
Control during the detachment 
The use of the staple is unavailable 

2.7.12  C-1114 

Code 
C-1114 
Classification 
FS: FS-532 abnormality 
Cause 
The rewind paddle release home sensor (PS38) does not become active even after a specified period of time after the rewind paddle release 
home motor (M28) starts the home position search operation. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Rewind paddle release home sensor (PS38) 
  •  Rewind paddle release motor (M28) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the stacker section, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between FNSCB and M28, PS38, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (72-39) of M28 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     FS-532: 2-F) 
  4. Check the IO Check (72-35) of PS38 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 12- 
     B) 
  5. Replace PS38. 
  6. Replace M28. 
  7. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-3 
Control during the detachment 
The use of the staple is unavailable 

2.7.13  C-1115 

Code 
C-1115 
Classification 
FS: SD-510 abnormality 
Cause 
The 1st folding knife home sensor (PS110) does not become active within a specified period of time after the 1st folding knife motor (M107) 
becomes active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  SD control board (SDCB) 
  •  1st folding knife motor (M107) 
  •  1st folding knife home sensor (PS110) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the half-fold and the fold&staple and the tri-fold section, and repair it when there is any abnormality. 
  2. Check the connector connection between FNSCB and SDCB, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between SDCB and M107, PS110, and the wiring. Then repair it when there is any abnormality. 

                                                                        K-50 
﻿bizhub PRO 1100                                                                                  K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  4. Check the IO Check (72-56) of M107 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     SD-510: 8-B) 
  5. Check the IO Check (72-59) of PS110 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: SD-510: 9- 
     B) 
  6. Replace PS110. 
  7. Replace M107. 
  8. Replace SDCB. (Connector layout drawing in board:  L.2.11.1 SD control board) 
  9. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW17-1 
Control during the detachment 
The use of the half-fold, the fold&staple, and the tri-fold is unavailable. 

2.7.14  C-1124 

Code 
C-1124 
Classification 
PI: PI abnormality 
Cause 
Within a specified period of time after the tray lift motor/Lw (M202) becomes active, the tray upper limit sensor/Lw (PS209) or the tray lower limit 
sensor/Lw (PS210) does not become active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  PI drive board (PIDB) 
  •  Tray lift motor/Lw (M202) 
  •  Tray upper limit sensor/Lw (PS209) 
  •  Tray lower limit sensor/Lw (PS210) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the PI lower tray section, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between PIDB and M202, PS209, PS210, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between FNSCB and PIDB, and the wiring. Then repair it when there is any abnormality. 
  4. Check the IO Check (72-88) of M202 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     PI: 5-B) 
  5. Check the IO Check (72-93) of PS209, IO Check (72-94) of PS210, and the operation. Then repair or replace it when there is any 
     abnormality. (Wiring diagram: PI: 6-B) 
  6. Replace M202. 
  7. Replace PS209. 
  8. Replace PS210. 
  9. Replace PIDB. (Connector layout drawing in board:  L.2.14.1 PI drive board (PIDB)) 
 10. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW17-0 
Control during the detachment 
PI unusable 
(PI unconnected) 

2.7.15  C-1125 

Code 
C-1125 
Classification 
PI: PI abnormality 
Cause 
Within a specified period of time after the tray lift motor/Up (M201) becomes active, the tray upper limit sensor/Up (PS205) or the tray lower limit 
sensor/Up (PS204) does not become active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  PI drive board (PIDB) 
  •  Tray lift motor/Up (M201) 
  •  Tray upper limit sensor/Up (PS205) 
  •  Tray lower limit sensor/Up (PS204) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the PI lower tray section, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between PIDB and M201, PS204, PS205, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between FNSCB and PIDB, and the wiring. Then repair it when there is any abnormality. 

                                                                          K-51 
﻿bizhub PRO 1100                                                                                  K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  4. Check the IO Check (72-86) and others of M201 and the coupling of the gear, and repair or replace it when there is any abnormality. 
     (Wiring diagram: PI: 4-B) 
  5. Check the IO Check (72-86) of PS204, IO Check (72-85) of PS205, and the operation. Then repair or replace it when there is any 
     abnormality. (Wiring diagram: PI: 4-B) 
  6. Replace M201. 
  7. Replace PS204. 
  8. Replace PS205. 
  9. Replace PIDB. (Connector layout drawing in board:  L.2.14.1 PI drive board (PIDB)) 
 10. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW17-0 
Control during the detachment 
PI unusable 
(PI unconnected) 

2.7.16  C-1127 

Code 
C-1127 
Classification 
PK: PK abnormality 
Cause 
The punch shift home sensor (PS303) does not become active within a specified period of time after the punch shift motor (M302) becomes 
active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Punch drive board (PDB) 
  •  Punch shift motor (M302) 
  •  Punch shift home sensor (PS303) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the punch kit, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between PDB and M302, PS303, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between FNSCB and PDB, and the wiring. Then repair it when there is any abnormality. 
  4. Check the IO Check (72-65) and others of M302 and the coupling of the gear, and repair or replace it when there is any abnormality. 
     (Wiring diagram: PK: 7-B) 
  5. Check the IO Check (72-74) of the PS303 and the operation, and repair or replace it when there is any abnormality. 
  6. Replace M302. 
  7. Replace PS303. 
  8. Replace PDB. (Connector layout drawing in board:  L.2.12.1 Punch drive board (PDB)) 
  9. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-5 
Control during the detachment 
The use of FS, SD, PK is unavailable. 

2.7.17  C-1130 

Code 
C-1130 
Classification 
FS: ZU-608 abnormality 
Cause 
Within a specified period of time after the 1st folding stopper motor (M602) starts the home position search operation, the 1st folding stopper 
home sensor (PS603) does not become active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  ZU control board (ZUCB) 
  •  1st folding stopper motor (M602) 
  •  1st folding stopper home sensor (PS603) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ZUCB and M602, PS603, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (79-41) of M602 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     ZU-608: 2-B) 
  3. Check the IO Check (79-55) of PS603 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: ZU-608: 3- 
     B) 
  4. Replace PS603. 
  5. Replace M602. 
  6. Replace ZUCB. (Connector layout drawing in board:  L.2.8.1 ZU control board (ZUCB)) 

                                                                          K-52 
﻿bizhub PRO 1100                                                                             K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Faulty part isolation DIPSW 
DIPSW17-3 
Control during the detachment 
The use of Z-folding and punch is unavailable. 

2.7.18  C-1131 

Code 
C-1131 
Classification 
FS: ZU-608 abnormality 
Cause 
Within a specified period of time after the 2nd folding stopper motor (M603) starts the home position search operation, the 2nd folding stopper 
home sensor (PS604) does not become active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  ZU control board (ZUCB) 
  •  2nd folding stopper motor (M603) 
  •  2nd folding stopper home sensor (PS604) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ZUCB and M603, PS604, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (79-42) of M603 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     ZU-608: 2-B) 
  3. Check the IO Check (79-47) of PS604 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: ZU-608: 3- 
     B) 
  4. Replace PS604. 
  5. Replace M603. 
  6. Replace ZUCB. (Connector layout drawing in board:  L.2.8.1 ZU control board (ZUCB)) 
Faulty part isolation DIPSW 
DIPSW17-3 
Control during the detachment 
The use of Z-folding and punch is unavailable. 

2.7.19  C-1132 

Code 
C-1132 
Classification 
PK: PK abnormality 
Cause 
The punch home sensor (PS301) does not become active within a specified period of time after the punch motor (M301) becomes active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Punch drive board (PDB) 
  •  Punch motor (M301) 
  •  Punch home sensor/1 (PS301) 
  •  Punch home sensor/2 (PS307) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the punch kit, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between PDB and M301, PS301, PS307, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between FNSCB and PDB, and the wiring. Then repair it when there is any abnormality. 
  4. Check the IO Check (72-69) and others of M301 and the coupling of the gear, and repair or replace it when there is any abnormality. 
     (Wiring diagram: PK: 5-B) 
  5. Check the IO Check (72-69) of PS301, IO Check (72-70) of PS307 and the operation, and repair or replace it when there is any 
     abnormality. 
  6. Replace M301. 
  7. Replace PS301 and PS302. 
  8. Replace PDB. (Connector layout drawing in board:  L.2.12.1 Punch drive board (PDB)) 
  9. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-5 
Control during the detachment 
The use of FS, SD, PK is unavailable. 

2.7.20  C-1133 

Code 
C-1133 

                                                                      K-53 
﻿bizhub PRO 1100                                                                            K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Classification 
FS: ZU-608 abnormality 
Cause 
Within a specified period of time after the punch shift motor (M605) starts the home position search operation, the punch shift home sensor 
(PS605) does not become active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  ZU control board (ZUCB) 
  •  Punch shift motor (M605) 
  •  Punch shift home sensor (PS605) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ZUCB and M605, PS605, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (79-50) of M605 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     ZU-608: 1-B) 
  3. Check the IO Check (79-46) of PS605 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: ZU-608: 4- 
     B) 
  4. Replace PS605. 
  5. Replace M605. 
  6. Replace ZUCB. (Connector layout drawing in board:  L.2.8.1 ZU control board (ZUCB)) 
Faulty part isolation DIPSW 
DIPSW17-3 
Control during the detachment 
The use of Z-folding and punch is unavailable. 

2.7.21  C-1134 

Code 
C-1134 
Classification 
FS: ZU-608 abnormality 
Cause 
An error detection signal of FM601 is detected continuously for a specified period of time while the main motor cooling fan (FM601) is ON. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  ZU control board (ZUCB) 
  •  Main motor cooling fan (FM601) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ZUCB and FM601, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM601 with the IO Check (79-48) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: ZU-608: 6- 
     B) 
  3. Replace FM601. 
  4. Replace ZUCB. (Connector layout drawing in board:  L.2.8.1 ZU control board (ZUCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.7.22  C-1135 

Code 
C-1135 
Classification 
FS: ZU-608 abnormality 
Cause 
After the punch motor (M604) turns ON, M604 does not turn ON within a specified period of time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  ZU control board (ZUCB) 
  •  Punch motor (M604) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ZUCB and M604, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (79-49) of M604 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     ZU-608: 5-B) 
  3. Replace M604. 
  4. Replace ZUCB. (Connector layout drawing in board:  L.2.8.1 ZU control board (ZUCB)) 
Faulty part isolation DIPSW 

                                                                     K-54 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Control during the detachment 

2.7.23  C-1136 

Code 
C-1136 
Classification 
FS: ZU-608 abnormality 
Cause 
Even after a specified period of time after the punch switchover motor (M608) becomes active, the punch switchover switch (MS601) does not 
become inactive from active or does not become active from inactive. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  ZU control board (ZUCB) 
  •  Punch switchover motor (M608) 
  •  Punch switchover switch (MS601) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ZUCB and M608, MS601, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (79-38) and others of M608 and the coupling of the gear, and repair or replace it when there is any abnormality. 
     (Wiring diagram: ZU-608: 5-B) 
  3. Check the IO Check (79-51) of MS601 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: ZU-608: 5- 
     B) 
  4. Replace MS601. 
  5. Replace M608. 
  6. Replace ZUCB. (Connector layout drawing in board:  L.2.8.1 ZU control board (ZUCB)) 
Faulty part isolation DIPSW 
DIPSW17-3 
Control during the detachment 
The use of Z-folding and punch is unavailable. 

2.7.24  C-1137 

Code 
C-1137 
Classification 
FS: FS-532 abnormality 
Cause 
The conveyance route switch home sensor (PS31) does not become active within a specified period of time after the conveyance route switch 
motor (M22) becomes active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Conveyance route switch motor (M22) 
  •  Conveyance route switch home sensor (PS31) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between FNSCB and M22, PS31, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (72-33) of M22 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     FS-532: 1-F) 
  3. Check the IO Check (72-28) of PS31 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 2-B) 
  4. Replace PS31. 
  5. Replace M22. 
  6. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-5 
Control during the detachment 
The use of FS, SD, PK is unavailable. 

2.7.25  C-1141 

Code 
C-1141 
Classification 
FS: FS-532 abnormality 
Cause 
After the stack assist motor (M8) becomes active, the stack assist home sensor (PS11) does not become active within a specified period of 
time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 

                                                                       K-55 
﻿bizhub PRO 1100                                                                             K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  •  FNS control board (FNSCB) 
  •  Stack assist motor (M8) 
  •  Stack assist home sensor (PS11) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between FNSCB and M8, PS11, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (72-08) of M8 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     FS-532: 6-F) 
  3. Check the IO Check (72-08) of PS11 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 12- 
     B) 
  4. Replace PS11. 
  5. Replace M8. 
  6. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-3 
Control during the detachment 
The use of the staple is unavailable 

2.7.26  C-1144 

Code 
C-1144 
Classification 
FS: FS-532 abnormality 
Cause 
The paper exit alignment plate home sensor (PS20) does not become active within a specified period of time after the paper exit alignment plate 
motor (M12) becomes active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Paper exit alignment plate motor (M12) 
  •  Paper exit alignment plate home sensor (PS20) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between FNSCB and M12, PS20, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (72-18) and others of M12 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: FS-532: 4-F) 
     Note 
       ▪  The output check of the IO check mode has restrictive conditions. Check the IO check mode list before the output check. 
  3. Check the IO Check (72-17) of PS20 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 5-B) 
  4. Replace PS20. 
  5. Replace M12. 
  6. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-4 
Control during the detachment 
FS main tray and stapling are not available 

2.7.27  C-1144 (OT-510) 

Code 
C-1144 
Classification 
OT: OT-510 abnormality 
Cause 
The alignment plate home sensor (PS20) does not become active within a specified period of time after the alignment plate motor (M12) 
becomes active. 
Measures to take when an alert occurs 
Main body and options stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Alignment motor (M12) 
  •  Alignment home sensor (PS20) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check the connector connection and the wiring between FNSCB, M12, and PS20, and repair it when there is any abnormality. 

                                                                      K-56 
﻿bizhub PRO 1100                                                                            K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  2. Check the IO Check (72-18) of M12 or the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     OT-510: 4-F) 
     Note 
       ▪  The output check of the IO check mode has restrictive conditions. Check the IO check mode list before the output check. 
  3. Check the IO Check (72-17) of PS20 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: OT-510: 5- 
     B) 
  4. Replace PS20. 
  5. Replace M12. 
  6. Replace FNSCB. (CONNECTOR LAYOUT DRAWING IN BOARD:  L.2.6.1 FNS control board) 
Faulty part isolation DIPSW 
Control while detached 

2.7.28  C-1147 

Code 
C-1147 
Classification 
FS: FS-532 abnormality 
Cause 
The paper exit alignment plate up down home sensor (PS21) does not become active within a specified period of time after the paper exit 
alignment plate up down motor (M13) becomes active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Paper exit alignment plate up down motor (M13) 
  •  Paper exit alignment plate up down home sensor (PS21) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between FNSCB and M13, PS21, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (72-22) and others of M13 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: FS-532: 4-F) 
     Note 
       ▪  The output check of the IO check mode has restrictive conditions. Check the IO check mode list before the output check. 
  3. Check the IO Check (72-18) of PS21 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 5-B) 
  4. Replace PS21. 
  5. Replace M13. 
  6. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-4 
Control during the detachment 
FS main tray and stapling are not available 

2.7.29  C-1147 (OT-510) 

Code 
C-1147 
Classification 
OT: OT-510 abnormality 
Cause 
The alignment plate up down home sensor (PS21) does not become active within a specified period of time after the alignment plate up down 
motor (M13) becomes active. 
Measures to take when an alert occurs 
Main body and options stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Alignment plate up down motor (M13) 
  •  Alignment plate up down home sensor (PS21) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check the connector connection and the wiring between FNSCB, M13, and PS21, and repair it when there is any abnormality. 
  2. Check the IO Check (72-22) of M13 or the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     OT-510: 4-F) 
     Note 
       ▪  The output check of the IO check mode has restrictive conditions. Check the IO check mode list before the output check. 
  3. Check the IO Check (72-18) of PS21 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: OT-510: 5- 
     B) 
  4. Replace PS21. 
  5. Replace M13. 
  6. Replace FNSCB. (CONNECTOR LAYOUT DRAWING IN BOARD:  L.2.6.1 FNS control board) 
Faulty part isolation DIPSW 

                                                                     K-57 
﻿bizhub PRO 1100                                                                                  K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Control while detached 

2.7.30  C-1153 

Code 
C-1153 
Classification 
FS: FS-532 abnormality 
Cause 
The main tray home sensor (PS23) does not become active within a specified period of time after the tray shift roller motor (M15) becomes 
active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Tray shift roller motor (M15) 
  •  Main tray home sensor (PS23) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between FNSCB and M15, PS23, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (72-26) of M15 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     FS-532: 3-F) 
  3. Check the IO Check (72-20) of PS23 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 6-B) 
  4. Replace PS23. 
  5. Replace M15. 
  6. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-4 
Control during the detachment 
FS main tray and stapling are not available 

2.7.31  C-1153 (OT-510) 

Code 
C-1153 
Classification 
OT: OT-510 abnormality 
Cause 
The main tray home sensor (PS23) does not become active within a specified period of time after the tray shift roller motor (M15) becomes 
active. 
Measures to take when an alert occurs 
Main body and options stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Tray shift roller motor (M15) 
  •  Main tray home sensor (PS23) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check the connector connection and the wiring between FNSCB, M15, and PS23, and repair it when there is any abnormality. 
  2. Check the IO Check (72-26) of M15 or the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     OT-510: 3-F) 
  3. Check the IO Check (72-20) of PS23 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: OT-510: 6- 
     B) 
  4. Replace PS23. 
  5. Replace M15. 
  6. Replace FNSCB. (CONNECTOR LAYOUT DRAWING IN BOARD:  L.2.6.1 FNS control board) 
Faulty part isolation DIPSW 
Control while detached 

2.7.32  C-1154 

Code 
C-1154 
Classification 
FS: FS-532 abnormality 
Cause 
After the gripper exit sensor/Up (M16) becomes active, the gripper home sensor/Up (PS24) does not become active within a specified period of 
time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 

                                                                          K-58 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  •  FNS control board (FNSCB) 
  •  Gripper paper exit motor/Up (M16) 
  •  Gripper home sensor/Up (PS24) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between FNSCB and M16, PS24, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (72-27) of M16 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     FS-532: 2-F) 
  3. Check the IO Check (72-21) of PS24 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 4-B) 
  4. Replace PS24. 
  5. Replace M16. 
  6. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-4 
Control during the detachment 
FS main tray and stapling are not available 

2.7.33  C-1154 (OT-510) 

Code 
C-1154 
Classification 
OT: OT-510 abnormality 
Cause 
After the gripper exit sensor/Lw (M16) becomes active, the gripper home sensor/Up (PS24) does not become active within a specified period of 
time. 
Measures to take when an alert occurs 
Main body and options stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Gripper paper exit motor/Up (M16) 
  •  Gripper home sensor/Up (PS24) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check the connector connection and the wiring between FNSCB, M16, and PS24, and repair it when there is any abnormality. 
  2. Check the IO Check (72-27) of M16 or the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     OT-510: 2-F) 
  3. Check the IO Check (72-21) of PS24 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: OT-510: 4- 
     B) 
  4. Replace PS24. 
  5. Replace M16. 
  6. Replace FNSCB. (CONNECTOR LAYOUT DRAWING IN BOARD:  L.2.6.1 FNS control board) 
Faulty part isolation DIPSW 
Control while detached 

2.7.34  C-1155 

Code 
C-1155 
Classification 
FS: FS-532 abnormality 
Cause 
After the gripper exit sensor/Lw (M17) becomes active, the gripper home sensor/Lw (PS25) does not become active within a specified period of 
time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Gripper paper exit motor/Lw (M17) 
  •  Gripper home sensor/Lw (PS25) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between FNSCB and M17, PS25, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (72-28) of M17 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     FS-532: 3-F) 
  3. Check the IO Check (72-22) of PS25 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 6-B) 
  4. Replace PS25. 
  5. Replace M17. 

                                                                       K-59 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  6. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-4 
Control during the detachment 
FS main tray and stapling are not available 

2.7.35  C-1155 (OT-510) 

Code 
C-1155 
Classification 
OT: OT-510 abnormality 
Cause 
After the gripper exit sensor/Lw (M17) becomes active, the gripper home sensor/Lw (PS25) does not become active within a specified period of 
time. 
Measures to take when an alert occurs 
Main body and options stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Gripper paper exit motor/Lw (M17) 
  •  Gripper home sensor/Lw (PS25) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check the connector connection and the wiring between FNSCB, M17, and PS25, and repair it when there is any abnormality. 
  2. Check the IO Check (72-28) of M17 or the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     OT-510: 3-F) 
  3. Check the IO Check (72-22) of PS25 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: OT-510: 6- 
     B) 
  4. Replace PS25. 
  5. Replace M17. 
  6. Replace FNSCB. (CONNECTOR LAYOUT DRAWING IN BOARD:  L.2.6.1 FNS control board) 
Faulty part isolation DIPSW 
Control while detached 

2.7.36  C-1156 

Code 
C-1156 
Classification 
FS: FS-532 abnormality 
Cause 
After the stacker rear stopper motor (M20) becomes active, the stacker rear stopper home sensor (PS29) does not become active within a 
specified period of time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Stacker rear stopper motor (M20) 
  •  Stacker rear stopper home sensor (PS29) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between FNSCB and M20, PS29, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (72-31) of M20 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     FS-532: 5-F) 
  3. Check the IO Check (72-26) of PS29 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 11- 
     B) 
  4. Replace PS29. 
  5. Replace M20. 
  6. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-3 
Control during the detachment 
The use of the staple is unavailable 

2.7.37  C-1157 

Code 
C-1157 
Classification 
FS: FS-532 abnormality 
Cause 

                                                                         K-60 
﻿bizhub PRO 1100                                                                                  K TROUBLESHOOTING > 2. MALFUNCTION CODE 

After the stacker paper press motor (M21) becomes active, the stacker paper press home sensor (PS30) does not become active within a 
specified period of time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Stacker paper press motor (M21) 
  •  Stacker paper press home sensor (PS30) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between FNSCB and M21, PS30, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (72-32) of M21 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     FS-532: 6-F) 
  3. Check the IO Check (72-27) of PS30 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 11- 
     B) 
  4. Replace PS30. 
  5. Replace M21. 
  6. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-3 
Control during the detachment 
The use of the staple is unavailable 

2.7.38  C-1158 

Code 
C-1158 
Classification 
FS: FS-532 abnormality 
Cause 
After the roller pressure motor (M27) becomes active, the roller pressure motor home sensor (PS34) does not become active within a specified 
period of time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Roller pressure motor (M27) 
  •  Roller pressure motor home sensor (PS34) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between FNSCB and M27, PS34, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (72-38) of M27 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     FS-532: 6-F) 
  3. Check the IO Check (72-31) of PS34 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 11- 
     B) 
  4. Replace PS34. 
  5. Replace M27. 
  6. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-3 
Control during the detachment 
The use of the staple is unavailable 

2.7.39  C-1159 

Code 
C-1159 
Classification 
FS: FS-532 abnormality 
Cause 
The bypass gate home sensor (PS36) does not become active within a specified period of time after the bypass gate motor (M25) becomes 
active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Bypass gate motor (M25) 
  •  Bypass gate home sensor (PS36) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 

                                                                          K-61 
﻿bizhub PRO 1100                                                                                  K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  1. Check the connector connection between FNSCB and M25, PS36, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (72-36) of M25 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     FS-532: 1-F) 
  3. Check the IO Check (72-33) of PS36 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 2-B) 
  4. Replace PS36. 
  5. Replace M25. 
  6. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-3, DIPSW17-1 
Control during the detachment 
The use of the staple, the half-fold, the fold&staple, and the tri-fold is unavailable. 

2.7.40  C-1170 

Code 
C-1170 
Classification 
FS: FS-532 abnormality 
Cause 
The exit paper press home sensor (PS37) does not become active within a specified period of time after the exit paper press motor (M26) 
becomes active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Exit paper press motor (M26) 
  •  Exit paper press home sensor (PS37) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between FNSCB and M26, PS37, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (72-37) of M26 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     FS-532: 3-F) 
  3. Check the IO Check (72-34) of PS37 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 7-B) 
  4. Replace PS37. 
  5. Replace M26. 
  6. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-4 
Control during the detachment 
FS main tray and stapling are not available 

2.7.41  C-1170 (OT-510) 

Code 
C-1170 
Classification 
OT: OT-510 abnormality 
Cause 
Within a specified period of time after the paper hold motor (M26) becomes active, the paper hold home sensor (PS37) does not become active. 
Measures to take when an alert occurs 
Main body and options stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Paper hold motor (M26) 
  •  Paper hold home sensor (PS37) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check the connector connection and the wiring between FNSCB, M26, and PS37, and repair it when there is any abnormality. 
  2. Check the IO Check (72-37) of M26 or the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     OT-510: 3-F) 
  3. Check the IO Check (72-34) of PS37 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: OT-510: 7- 
     B) 
  4. Replace PS37 
  5. Replace M26. 
  6. Replace FNSCB. (CONNECTOR LAYOUT DRAWING IN BOARD:  L.2.6.1 FNS control board) 
Faulty part isolation DIPSW 
Control while detached 

2.7.42  C-1171 

Code 

                                                                          K-62 
﻿bizhub PRO 1100                                                                             K TROUBLESHOOTING > 2. MALFUNCTION CODE 

C-1171 
Classification 
FS: FS-532 abnormality 
Cause 
The small size paper alignment home sensor (PS26) does not become active within a specified period of time after the small size paper 
alignment motor (M18) becomes active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Small size paper alignment motor (M18) 
  •  Small size paper alignment home sensor (PS26) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between FNSCB and M18, PS26, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (72-29) of M18 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     FS-532: 5-F) 
  3. Check the IO Check (72-23) of PS26 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 11- 
     B) 
  4. Replace PS26. 
  5. Replace M18. 
  6. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-3 
Control during the detachment 
The use of the staple is unavailable 

2.7.43  C-1172 

Code 
C-1172 
Classification 
FS: FS-532 abnormality 
Cause 
An error detection signal of FM1 is detected continuously for a specified period of time while the large size paper alignment fan (FM1) is ON. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  Large size paper alignment fan (FM1) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between FNSCB and FM1, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM1 with the IO Check (72-44) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: FS-532: 6-F) 
  3. Replace FM1. 
  4. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW6-3 
Control during the detachment 
The use of the staple is unavailable 

2.7.44  C-1173 

Code 
C-1173 
Classification 
FS: SD-510 abnormality 
Cause 
Within a specified period of time after the stapler movement motor (M103) becomes active, the stapler shift home sensor (PS105) does not 
become active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  SD control board (SDCB) 
  •  Stapler movement motor (M103) 
  •  Stapler shift home sensor (PS105) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between SDCB and M103, PS105, and the wiring. Then repair it when there is any abnormality. 

                                                                      K-63 
﻿bizhub PRO 1100                                                                                  K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  2. Check the connector connection between FNSCB and SDCB, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (72-52) of M103 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     SD-510: 2-G) 
  4. Check the IO Check (72-54) of PS105 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: SD-510: 3- 
     B) 
  5. Replace PS105. 
  6. Replace M103. 
  7. Replace SDCB. (Connector layout drawing in board:  L.2.11.1 SD control board) 
  8. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW17-1 
Control during the detachment 
The use of the half-fold, the fold&staple, and the tri-fold is unavailable. 

2.7.45  C-1174 

Code 
C-1174 
Classification 
FS: SD-510 abnormality 
Cause 
The operation does not complete within a specified period of time after the SD stapler motor (M102) starts the operation. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  SD control board (SDCB) 
  •  SD stapler motor (M102) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between SDCB and M102, and the wiring. Then repair it when there is any abnormality. 
  2. Check the connector connection between FNSCB and SDCB, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (72-51) of M102 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     SD-510: 4-G) 
  4. Replace M102. 
  5. Replace SDCB. (Connector layout drawing in board:  L.2.11.1 SD control board) 
  6. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW17-1 
Control during the detachment 
The use of the half-fold, the fold&staple, and the tri-fold is unavailable. 

2.7.46  C-1175 

Code 
C-1175 
Classification 
FS: SD-510 abnormality 
Cause 
After the stopper motor (M105) becomes active, the stopper home sensor (PS107) does not become active within a specified period of time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  SD control board (SDCB) 
  •  Stopper motor (M105) 
  •  Stopper home sensor (PS107) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between SDCB and M105, PS107, and the wiring. Then repair it when there is any abnormality. 
  2. Check the connector connection between FNSCB and SDCB, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (72-54) of M105 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     SD-510: 1-G) 
  4. Check the IO Check (72-56) of PS107 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: SD-510: 6- 
     B) 
  5. Replace PS107. 
  6. Replace M105. 
  7. Replace SDCB. (Connector layout drawing in board:  L.2.11.1 SD control board) 
  8. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW17-1 
Control during the detachment 
The use of the half-fold, the fold&staple, and the tri-fold is unavailable. 

                                                                          K-64 
﻿bizhub PRO 1100                                                                                  K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.7.47  C-1176 

Code 
C-1176 
Classification 
FS: SD-510 abnormality 
Cause 
After the center paddle motor (M106) becomes active, the center paddle home sensor (PS108) does not become active within a specified period 
of time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  SD control board (SDCB) 
  •  Center paddle motor (M106) 
  •  Center paddle home sensor (PS108) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between SDCB and M106, PS108, and the wiring. Then repair it when there is any abnormality. 
  2. Check the connector connection between FNSCB and SDCB, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (72-55) of M106 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     SD-510: 3-G) 
  4. Check the IO Check (72-57) of PS108 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: SD-510: 4- 
     B) 
  5. Replace PS108. 
  6. Replace M106. 
  7. Replace SDCB. (Connector layout drawing in board:  L.2.11.1 SD control board) 
  8. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW17-1 
Control during the detachment 
The use of the half-fold, the fold&staple, and the tri-fold is unavailable. 

2.7.48  C-1177 

Code 
C-1177 
Classification 
FS: SD-510 abnormality 
Cause 
The 2nd folding knife home sensor (PS111) does not become active within a specified period of time after the 2nd folding knife motor (M110) 
becomes active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  SD control board (SDCB) 
  •  2nd folding knife motor (M110) 
  •  2nd folding knife home sensor (PS111) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between SDCB and M110, PS111, and the wiring. Then repair it when there is any abnormality. 
  2. Check the connector connection between FNSCB and SDCB, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (72-59) of M110 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     SD-510: 5-G) 
  4. Check the IO Check (72-60) of PS111 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: SD-510: 6- 
     G) 
  5. Replace PS111. 
  6. Replace M110. 
  7. Replace SDCB. (Connector layout drawing in board:  L.2.11.1 SD control board) 
  8. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW17-1 
Control during the detachment 
The use of the half-fold, the fold&staple, and the tri-fold is unavailable. 

2.7.49  C-1179 

Code 
C-1179 
Classification 
FS: FS-532 abnormality 
Cause 

                                                                          K-65 
﻿bizhub PRO 1100                                                                                  K TROUBLESHOOTING > 2. MALFUNCTION CODE 

RUKA communication error 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the panel. 
Solution 
  1. Deactivate the sub power switch, and then become inactive the main power switch. Then unplug all the power plug. Restart the main body 
     after 10 seconds. 
  2. Check the connector connection and the wiring between the main body and each option, and repair it when there is any abnormality. 
  3. Check the connector connection of the control board and the drive board in each option, and repair it when there is any abnormality. 
  4. Rewrite the firmware of the option. 
  5. Replace the control board of the option corresponds to the malfunction code. 
Faulty part isolation DIPSW 
Control while detached 

2.7.50  C-1179 (OT-510) 

Code 
C-1179 
Classification 
OT: OT-510 abnormality 
Cause 
RUKA communication error 
Measures to take when an alert occurs 
Main body and options stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the panel. 
Solution 
  1. Deactivate the sub power switch, and then become inactive the main power switch. Then unplug all the power plug. Restart the main body 
     after 10 seconds. 
  2. Check the connector connection and the wiring between the main body and each option, and repair it when there is any abnormality. 
  3. Check the connector connection of FNSCB, and repair it when there is any abnormality. 
  4. Rewrite the firmware of the option. 
  5. Replace the control board of the option corresponds to the malfunction code. 
Faulty part isolation DIPSW 
Control while detached 

2.7.51  C-1180 

Code 
C-1180 
Classification 
FS: SD-510 abnormality 
Cause 
The alignment home sensor (PS106) does not become active within a specified period of time after the saddle stitching alignment motor (M104) 
becomes active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  SD control board (SDCB) 
  •  Saddle stitching alignment motor (M104) 
  •  Alignment home sensor (PS106) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between SDCB and M104, PS106, and the wiring. Then repair it when there is any abnormality. 
  2. Check the connector connection between FNSCB and SDCB, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (72-53) of M104 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     SD-510: 3-G) 
  4. Check the IO Check (72-55) of PS106 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: SD-510: 4- 
     B) 
  5. Replace PS106. 
  6. Replace M104. 
  7. Replace SDCB. (Connector layout drawing in board:  L.2.11.1 SD control board) 
  8. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW17-1 
Control during the detachment 
The use of the half-fold, the fold&staple, and the tri-fold is unavailable. 

                                                                          K-66 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.7.52  C-1181 

Code 
C-1181 
Classification 
FS: SD-510 abnormality 
Cause 
After the lower paddle motor (M109) becomes active, the lower paddle home sensor (PS114) does not become active within a specified period 
of time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  SD control board (SDCB) 
  •  Lower paddle motor (M109) 
  •  Lower paddle home sensor (PS114) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between SDCB and M109, PS114, and the wiring. Then repair it when there is any abnormality. 
  2. Check the connector connection between FNSCB and SDCB, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (72-58) of M109 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     SD-510: 8-B) 
  4. Check the IO Check (72-58) of PS114 or the operation, and repair or replace it when there is any abnormality. (Wiring diagram: SD-510: 7- 
     B) 
  5. Replace PS114. 
  6. Replace M109. 
  7. Replace SDCB. (Connector layout drawing in board:  L.2.11.1 SD control board) 
  8. Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
Faulty part isolation DIPSW 
DIPSW17-1 
Control during the detachment 
The use of the half-fold, the fold&staple, and the tri-fold is unavailable. 

2.8  Solution 5 (C-1402_2100) 

2.8.1  C-1402 

Code 
C-1402 
Classification 
FS or OT: FS-532 or OT-510 abnormality 
Cause 
Non-volatile memory abnormality. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connection of FNSCB(FS-532), FNSCB(OT-510), and the wiring. Then repair it when there is any abnormality. 
  3. Reinstalling the FS or OT firmware. 
  4. FS-532: Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
     OT-510: Replace FNSCB. (Connector layout drawing in board:  L.2.6.1 FNS control board) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.2  C-1412 

Code 
C-1412 
Classification 
FS or OT: FS-532 or OT-510 abnormality 
Cause 
24 V activation failure 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Power source 
  •  FNS control board (FNSCB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 

                                                                          K-67 
﻿bizhub PRO 1100                                                                                  K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  1. Confirm the connection from the main body to FS or OT and if the power source is supplied. Repair it when there is any abnormality. 
  2. FS-532: Check FNSCB, and replace it when there is any abnormality. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
     OT-510: Check FNSCB, and replace it when there is any abnormality. (Connector layout drawing in board:  L.2.6.1 FNS control board) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.3  C-1442 

Code 
C-1442 
Classification 
FS: FS-532/SD-510 abnormality 
Cause 
Communication error between FS-532 and SD-510. 
Measures to take when alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FNS control board (FNSCB) 
  •  SD control board (SDCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the panel. 
Solution 
  1. Deactivate the sub power switch, and then become inactive the main power switch. Then unplug all the power plug. Restart the main body 
     after 10 seconds. 
  2. Check the connector connection and the wiring between the main body and each option, and repair it when there is any abnormality. 
  3. Check the connector connection of the control board and the drive board in each option, and repair it when there is any abnormality. 
  4. Rewrite the firmware of the option. 
  5. Replace the control board of the option corresponds to the malfunction code. 
Faulty part isolation DIPSW 
DIPSW17-1 
Control during the detachment 
The use of the half-fold, the fold&staple, and the tri-fold is unavailable. 

2.8.4  C-1701 

Code 
C-1701 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
The de-curler entrance gate motor (M101) does not stop even after a specified period of time after M101 starts the operation. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  De-curler entrance gate sensor (PS101) 
  •  De-curler entrance gate motor (M101) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the IO Check (66-11) of PS101 and M101 and the coupling of the gear, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and PS101, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 13-M) 
  3. Check the connector connection between PCB1 and M101, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 11-M) 
  4. Replace PS101. 
  5. Replace M101. 
  6. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.5  C-1702 

Code 
C-1702 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
The conveyance path switch motor (M102) does not stop even after a specified period of time after M102 starts the operation. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Conveyance path switch sensor (PS102) 
  •  Conveyance path switch motor (M102) 
  •  RU control board (PCB1) 
Correction 

                                                                          K-68 
﻿bizhub PRO 1100                                                                            K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the IO Check (66-12) of PS102 and M102 and the coupling of the gear, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and PS102, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 14-M) 
  3. Check the connector connection between PCB1 and M102, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 12-M) 
  4. Replace PS102. 
  5. Replace M102. 
  6. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.6  C-1703 

Code 
C-1703 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
The reverse exit gate motor (M103) does not stop even after a specified period of time after M103 starts the operation. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Reverse exit gate sensor (PS103) 
  •  Reverse exit gate motor (M103) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the IO Check (66-13) of PS103 and M103 and the coupling of the gear, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and PS103, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 14-M) 
  3. Check the connector connection between PCB1 and M103, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 11-M) 
  4. Replace PS103. 
  5. Replace M103. 
  6. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.7  C-1704 

Code 
C-1704 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
The reverse exit pressure release motor (M104) does not stop even after a specified period of time after M104 starts the operation. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Reverse exit pressure release sensor (PS104) 
  •  Reverse exit pressure release motor (M104) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the IO Check (66-14) of PS104 and M104 and the coupling of the gear, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and PS104, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 16-M) 
  3. Check the connector connection between PCB1 and M104, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 13-M) 
  4. Replace PS104. 
  5. Replace M104. 
  6. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.8  C-1705 

Code 
C-1705 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 

                                                                      K-69 
﻿bizhub PRO 1100                                                                                   K TROUBLESHOOTING > 2. MALFUNCTION CODE 

The de-curler angle switch motor/1 (M109) retry control failed and does not stop even after a specified period of time after initial operation 
restarts. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  De-curler angle sensor/1 (PS113) 
  •  De-curler angle switch motor/1 (M109) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check the IO Check (66-15) of PS113 and M109 and the coupling of the gear, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and PS113, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 11-E) 
  3. Check the connector connection between PCB1 and M109, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 9-E) 
  4. Replace PS113. 
  5. Replace M109. 
  6. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW79-1 
Control during the detachment 
De-curler function is unavailable. 

2.8.9  C-1706 

Code 
C-1706 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
The de-curler angle switch motor/2 (M110) retry control failed and does not stop even after a specified period of time after initial operation 
restarts. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  De-curler angle sensor/2 (PS114) 
  •  De-curler angle switch motor/2 (M110) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check the IO Check (66-16) of PS114, IO Check (66-17) of M110, and the coupling of the gear. Then repair or replace it when there is any 
     abnormality. 
  2. Check the connector connection between PCB1 and PS114, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 10-E) 
  3. Check the connector connection between PCB1 and M110, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 9-E) 
  4. Replace PS114. 
  5. Replace M110. 
  6. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW79-1 
Control during the detachment 
De-curler function is unavailable. 

2.8.10  C-1707 

Code 
C-1707 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
The activation of the humidification pressure release motor/Up (M105) does not complete even after a specified period of time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Humidification pressure release sensor/Up (PS119) 
  •  Humidification pressure release motor/Up (M105) 
  •  RU control board (PCB1) 
Correction 

                                                                           K-70 
﻿bizhub PRO 1100                                                                               K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check the IO Check (66-26) of PS119 and the IO Check (66-25) of M105 and the coupling of the gear. Then repair or replace it when there 
     is any abnormality. 
  2. Check the connector connection between PCB1 and PS119, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 16-E) 
  3. Check the connector connection between PCB1 and M105, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 18-E) 
  4. Replace PS119. 
  5. Replace M105. 
  6. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-2 
Control during the detachment 
Humidification function is unavailable. 

2.8.11  C-1708 

Code 
C-1708 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
The activation of the humidification pressure release motor/Lw (M106) does not complete even after a specified period of time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Humidification pressure release sensor/Lw (PS120) 
  •  Humidification pressure release motor/Lw (M106) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check the IO Check (66-27) of PS120 and the IO Check (66-26) of M106 and the coupling of the gear. Then repair or replace it when there 
     is any abnormality. 
  2. Check the connector connection between PCB1 and PS120, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 16-E) 
  3. Check the connector connection between PCB1 and M106, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 18-E) 
  4. Replace PS120. 
  5. Replace M106. 
  6. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-2 
Control during the detachment 
Humidification function is unavailable. 

2.8.12  C-1709 

Code 
C-1709 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the entrance conveyance pipe cooling fan/Fr (FM1) is active, an error detection signal is detected continuously for a specified period of 
time. Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Entrance conveyance pipe cooling fan/Fr (FM1) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM1 with the IO Check (66-20) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM1, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 19-E) 
  3. Replace FM1. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 

                                                                        K-71 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Control during the detachment 

2.8.13  C-1710 

Code 
C-1710 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the entrance conveyance pipe cooling fan/Md (FM2) is active, an error detection signal is detected continuously for a specified period of 
time. Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Entrance conveyance pipe cooling fan/Md (FM2) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM2 with the IO Check (66-20) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM2, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 19-E) 
  3. Replace FM2. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.14  C-1711 

Code 
C-1711 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the entrance conveyance pipe cooling fan/Rr (FM3) is active, an error detection signal is detected continuously for a specified period of 
time. Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Entrance conveyance pipe cooling fan/Rr (FM3) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM3 with the IO Check (66-20) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM3, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 20-E) 
  3. Replace FM3. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.15  C-1713 

Code 
C-1713 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the entrance roller cooling fan/Rr (FM5) is active, an error detection signal is detected continuously for a specified period of time. Though 
the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Entrance roller cooling fan/Rr (FM5) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM5 with the IO Check (66-20) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM5, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 21-E) 
  3. Replace FM5. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                       K-72 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.8.16  C-1714 

Code 
C-1714 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the entrance roller cooling fan/Fr (FM6) is active, an error detection signal is detected continuously for a specified period of time. Though 
the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Entrance roller cooling fan/Fr (FM6) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM6 with the IO Check (66-20) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM6, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 21-E) 
  3. Replace FM6. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.17  C-1715 

Code 
C-1715 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the horizontal conveyance pipe cooling fan/1Fr (FM7) is active, an error detection signal is detected continuously for a specified period of 
time. Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Horizontal conveyance pipe cooling fan/1Fr (FM7) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM7 with the IO Check (66-21) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM7, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 16-M) 
  3. Replace FM7. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.18  C-1716 

Code 
C-1716 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the horizontal conveyance pipe cooling fan/1Md (FM8) is active, an error detection signal is detected continuously for a specified period of 
time. Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Horizontal conveyance pipe cooling fan/1Md (FM8) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM8 with the IO Check (66-21) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM8, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 16-M) 
  3. Replace FM8. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                       K-73 
﻿bizhub PRO 1100                                                                             K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.8.19  C-1717 

Code 
C-1717 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the horizontal conveyance pipe cooling fan/1Rr (FM9) is active, an error detection signal is detected continuously for a specified period of 
time. Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Horizontal conveyance pipe cooling fan/1Rr (FM9) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM9 with the IO Check (66-21) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM9, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 16-M) 
  3. Replace FM9. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.20  C-1718 

Code 
C-1718 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
When the horizontal conveyance section dry fan/Fr (FM10) is active, an error detection signal is detected continuously for a specified period of 
time. Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Horizontal conveyance section dry fan/Fr (FM10) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM10 with the IO Check (66-21) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM10, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 8-M) 
  3. Replace FM10. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.21  C-1719 

Code 
C-1719 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
When the horizontal conveyance section dry fan/Md (FM11) is active, an error detection signal is detected continuously for a specified period of 
time. Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Horizontal conveyance section dry fan/Md (FM11) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM11 with the IO Check (66-21) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM11, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 9-M) 
  3. Replace FM11. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                      K-74 
﻿bizhub PRO 1100                                                                             K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.8.22  C-1720 

Code 
C-1720 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
When the horizontal conveyance section dry fan/Rr (FM12) is active, an error detection signal is detected continuously for a specified period of 
time. Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Horizontal conveyance section dry fan/Rr (FM12) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM12 with the IO Check (66-21) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM12, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 9-M) 
  3. Replace FM12. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.23  C-1721 

Code 
C-1721 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the horizontal conveyance pipe cooling fan/2Fr (FM13) is active, an error detection signal is detected continuously for a specified period 
of time. Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Horizontal conveyance pipe cooling fan/2Fr (FM13) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM13 with the IO Check (66-21) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM13, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 10-M) 
  3. Replace FM13. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.24  C-1722 

Code 
C-1722 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the horizontal conveyance pipe cooling fan/2Md (FM14) is active, an error detection signal is detected continuously for a specified period 
of time. Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Horizontal conveyance pipe cooling fan/2Md (FM14) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM14 with the IO Check (66-21) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM14, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 10-M) 
  3. Replace FM14. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                      K-75 
﻿bizhub PRO 1100                                                                             K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.8.25  C-1723 

Code 
C-1723 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the horizontal conveyance pipe cooling fan/2Rr (FM15) is active, an error detection signal is detected continuously for a specified period 
of time. Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Horizontal conveyance pipe cooling fan/2Rr (FM15) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM15 with the IO Check (66-21) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM15, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 10-M) 
  3. Replace FM15. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.26  C-1724 

Code 
C-1724 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the exit conveyance pipe cooling fan (FM17) is active, an error detection signal is detected continuously for a specified period of time. 
Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Exit conveyance pipe cooling fan (FM17) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM17 with the IO Check (66-21) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM17, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 15-M) 
  3. Replace FM17. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.27  C-1725 

Code 
C-1725 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the entrance conveyance pipe inner cooling fan (FM19) is active, an error detection signal is detected continuously for a specified period 
of time. Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Entrance conveyance pipe inner cooling fan (FM19) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM19 with the IO Check (66-20) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM19, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 21-E) 
  3. Replace FM19. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                      K-76 
﻿bizhub PRO 1100                                                                             K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.8.28  C-1726 

Code 
C-1726 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the horizontal conveyance pipe inner cooling fan/1 (FM20) is active, an error detection signal is detected continuously for a specified 
period of time. Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Horizontal conveyance pipe inner cooling fan/1 (FM20) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM20 with the IO Check (66-21) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM20, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 9-M) 
  3. Replace FM20. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.29  C-1727 

Code 
C-1727 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the horizontal conveyance pipe inner cooling fan/2 (FM21) is active, an error detection signal is detected continuously for a specified 
period of time. Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Horizontal conveyance pipe inner cooling fan/2 (FM21) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM21 with the IO Check (66-21) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM21, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 10-M) 
  3. Replace FM21. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.30  C-1728 

Code 
C-1728 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the inside machine cooling fan/1 (FM23) is active, an error detection signal is detected continuously for a specified period of time. Though 
the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Inside machine cooling fan/1 (FM23) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM23 with the IO Check (66-20) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM23, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 21-E) 
  3. Replace FM23. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                      K-77 
﻿bizhub PRO 1100                                                                             K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.8.31  C-1729 

Code 
C-1729 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the inside machine cooling fan/2 (FM24) is active, an error detection signal is detected continuously for a specified period of time. Though 
the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Inside machine cooling fan/2 (FM24) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM24 with the IO Check (66-21) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM24, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 17-M) 
  3. Replace FM24. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.32  C-1730 

Code 
C-1730 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the inside machine cooling fan/3 (FM25) is active, an error detection signal is detected continuously for a specified period of time. Though 
the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Inside machine cooling fan/3 (FM25) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM25 with the IO Check (66-21) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM25, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 17-M) 
  3. Replace FM25. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.33  C-1731 

Code 
C-1731 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the inside machine cooling fan/4 (FM26) is active, an error detection signal is detected continuously for a specified period of time. Though 
the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Inside machine cooling fan/4 (FM26) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM26 with the IO Check (66-21) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM26, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 18-M) 
  3. Replace FM26. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                      K-78 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.8.34  C-1732 

Code 
C-1732 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the inside machine cooling fan/5 (FM27) is active, an error detection signal is detected continuously for a specified period of time. Though 
the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Inside machine cooling fan/5 (FM27) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM27 with the IO Check (66-20) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM27, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 20-E) 
  3. Replace FM27. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.35  C-1733 

Code 
C-1733 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
When the inside machine cooling fan/6 (FM28) is active, an error detection signal is detected continuously for a specified period of time. Though 
the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Inside machine cooling fan/6 (FM28) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Rotate FM28 with the IO Check (66-21) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM28, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 17-M) 
  3. Replace FM28. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.36  C-1734 

Code 
C-1734 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
When the de-curler section dry fan/1Fr (FM29) is active, an error detection signal is detected continuously for a specified period of time. Though 
the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  De-curler section dry fan/1Fr (FM29) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Rotate FM29 with the IO Check (66-29) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM29, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 15-M) 
  3. Replace FM29. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 

                                                                       K-79 
﻿bizhub PRO 1100                                                                               K TROUBLESHOOTING > 2. MALFUNCTION CODE 

DIPSW13-2 
Control during the detachment 
Humidification function is unavailable. 

2.8.37  C-1735 

Code 
C-1735 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
When the de-curler section dry fan/1Md (FM30) is active, an error detection signal is detected continuously for a specified period of time. 
Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  De-curler section dry fan/1Md (FM30) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Rotate FM30 with the IO Check (66-29) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM30, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 15-M) 
  3. Replace FM30. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-2 
Control during the detachment 
Humidification function is unavailable. 

2.8.38  C-1736 

Code 
C-1736 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
When the de-curler section dry fan/1Rr (FM31) is active, an error detection signal is detected continuously for a specified period of time. Though 
the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  De-curler section dry fan/1Rr (FM31) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Rotate FM31 with the IO Check (66-29) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM31, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 15-M) 
  3. Replace FM31. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-2 
Control during the detachment 
Humidification function is unavailable. 

2.8.39  C-1737 

Code 
C-1737 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
When the reverse exit section dry fan/Fr (FM32) is active, an error detection signal is detected continuously for a specified period of time. 
Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Reverse exit section dry fan/Fr (FM32) 

                                                                        K-80 
﻿bizhub PRO 1100                                                                               K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Rotate FM32 with the IO Check (66-29) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM32, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 19-M) 
  3. Replace FM32. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-2 
Control during the detachment 
Humidification function is unavailable. 

2.8.40  C-1738 

Code 
C-1738 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
When the reverse exit section dry fan/Md (FM33) is active, an error detection signal is detected continuously for a specified period of time. 
Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Reverse exit section dry fan/Md (FM33) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Rotate FM33 with the IO Check (66-29) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM33, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 19-M) 
  3. Replace FM33. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-2 
Control during the detachment 
Humidification function is unavailable. 

2.8.41  C-1739 

Code 
C-1739 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
When the reverse exit section dry fan/Rr (FM34) is active, an error detection signal is detected continuously for a specified period of time. 
Though the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Reverse exit section dry fan/Rr (FM34) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Rotate FM34 with the IO Check (66-29) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM34, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 19-M) 
  3. Replace FM34. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-2 
Control during the detachment 
Humidification function is unavailable. 

                                                                        K-81 
﻿bizhub PRO 1100                                                                               K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.8.42  C-1740 

Code 
C-1740 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
It is detected that the water amount sensor/Up (PS109) is active continuously for longer than the specified time period. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Water amount sensor/Up (PS109) 
  •  Pump motor (M401) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check around the water conveyance path. Then repair it when there is any abnormality. 
  2. Check the IO Check (66-30) of PS109, the IO check (66-27) of M401 and water leak. Then repair or replace it when there is any 
     abnormality. 
  3. Check the connector connection between PCB1 and PS109, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 17-E) 
  4. Check the connector connection between PCB1 and M401, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 15-E) 
  5. Replace PS109. 
  6. Replace M401. 
  7. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-2 
Control during the detachment 
Humidification function is unavailable. 

2.8.43  C-1741 

Code 
C-1741 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
It is detected that the water amount sensor/Lw (PS110) is active continuously for longer than the specified time period. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Water amount sensor/Lw (PS110) 
  •  Pump motor (M401) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check around the water conveyance path. Then repair it when there is any abnormality. 
  2. Check the IO Check (66-31) of PS110, the IO check (66-27) of M401 and water leak. Then repair or replace it when there is any 
     abnormality. 
  3. Check the connector connection between PCB1 and PS110, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 17-E) 
  4. Check the connector connection between PCB1 and M401, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 15-E) 
  5. Replace PS110. 
  6. Replace M401. 
  7. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-2 
Control during the detachment 
Humidification function is unavailable. 

2.8.44  C-1742 

Code 
C-1742 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 

                                                                        K-82 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

It is detected that the water supply tank limit sensor (PS13) is active continuously for longer than the specified time period. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Water supply tank limit sensor (PS13) 
  •  Water feed control solenoid (SD4) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check around the water supply tank. Then repair it when there is any abnormality. 
  2. Check the IO Check (66-35) of PS13, the IO check (66-28) of SD4 and water leak. Then repair or replace it when there is any abnormality. 
  3. Check the connector connection between PCB1 and PS13, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 14-M) 
  4. Check the connector connection between PCB1 and SD4, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 15-E) 
  5. Replace PS13. 
  6. Replace SD4. 
  7. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-2 
Control during the detachment 
Humidification function is unavailable. 

2.8.45  C-1743 

Code 
C-1743 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
It is detected that the water storage tank remaining amount detection switch/2 (SW5) is active continuously for longer than the specified time 
period. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Water storage tank remaining amount detection switch/2 (SW5) 
  •  Pump motor (M401) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check around the water storage tank. Then repair it when there is any abnormality. 
  2. Check the IO Check (66-38) of SW5, the IO check (66-27) of M401 and water leak. Then repair or replace it when there is any abnormality. 
  3. Check the connector connection between PCB1 and SW5, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 15-E) 
  4. Check the connector connection between PCB1 and M401, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 15-E) 
  5. Replace SW5. 
  6. Replace M401. 
  7. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-2 
Control during the detachment 
Humidification function is unavailable. 

2.8.46  C-1744 

Code 
C-1744 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
Color density sensor detection preparation adjustment value abnormality. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Color density sensor unit 
  •  Color density relay board (CDRLB) 
  •  Color density control board (PCB3) 
  •  RU control board (PCB1) 

                                                                        K-83 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check the connections between RU-518 and the upstream machine. Then repair it when there is any abnormality. 
  2. Check the IO Check (66-22) of the color density LED, and repair or replace it when there is any abnormality. 
  3. Check the connector connection of CDRLB, and the wiring. Then repair it when there is any abnormality. 
  4. Check the connector connections between the color density sensor unit and PCB3, and the wiring. Then repair it when there is any 
     abnormality. 
  5. Check the connector connection between PCB3 and PCB1, and the wiring. Then repair it when there is any abnormality. 
  6. Replace CDRLB. 
  7. Replace the color density sensor unit. 
  8. Replace PCB3. (Connector layout drawing in board:  L.2.7.4 Color density control board (PCB3)) 
  9. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-3 
Control during the detachment 
Color density control function is unavailable. 

2.8.47  C-1745 

Code 
C-1745 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
Color density sensor detection start abnormality. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Color sensor shutter solenoid (SD1) 
  •  Color density control board (PCB3) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check the IO Check (66-23) of SD1, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between SD1 and PCB3, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between PCB3 and PCB1, and the wiring. Then repair it when there is any abnormality. 
  4. Replace SD1. 
  5. Replace PCB3. (Connector layout drawing in board:  L.2.7.4 Color density control board (PCB3)) 
  6. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-3 
Control during the detachment 
Color density control function is unavailable. 

2.8.48  C-1746 

Code 
C-1746 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
EPPROM read out abnormality in the color density relay board (CDRLB). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Color density relay board (CDRLB) 
  •  Color density control board (PCB3) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connection of CDRLB, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between PCB3 and PCB1, and the wiring. Then repair it when there is any abnormality. 

                                                                        K-84 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  4. Reinstall RU-518 firmware. 
  5. Replace CDRLB. 
  6. Replace PCB3. (Connector layout drawing in board:  L.2.7.4 Color density control board (PCB3)) 
  7. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-3 
Control during the detachment 
Color density control function is unavailable. 

2.8.49  C-1747 

Code 
C-1747 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
RU-518 SubCPU communication error (Main side). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Color density control board (PCB3) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connection between PCB3 and PCB1, and the wiring. Then repair it when there is any abnormality. 
  3. Reinstall the RU-518 firmware. 
  4. Replace PCB3. (Connector layout drawing in board:  L.2.7.4 Color density control board (PCB3)) 
  5. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-3 
Control during the detachment 
Color density control function is unavailable. 

2.8.50  C-1748 

Code 
C-1748 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
RU-518 SubCPU communication error (Sub side). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Color density control board (PCB3) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connection between PCB3 and PCB1, and the wiring. Then repair it when there is any abnormality. 
  3. Reinstall the RU-518 firmware. 
  4. Replace PCB3. (Connector layout drawing in board:  L.2.7.4 Color density control board (PCB3)) 
  5. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-3 
Control during the detachment 
Color density control function is unavailable. 

2.8.51  C-1749 

Code 
C-1749 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
Non-volatile memory abnormality. 

                                                                        K-85 
﻿bizhub PRO 1100                                                                               K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connections and the wiring of PCB1. Then repair it when there is any abnormality. 
  3. Reinstall the RU-518 firmware. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.52  C-1750 

Code 
C-1750 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
Communication errors in RU. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connections and the wiring of PCB1. Then repair it when there is any abnormality. 
  3. Reinstall the RU-518 firmware. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.53  C-1751 

Code 
C-1751 
Classification 
RU-518: RU-518 abnormality (1st device) 
Cause 
RU-518 operation prohibition abnormality. 
RU-518 received operation start signal from the main body when RU-518 is unready. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connections and the wiring of PCB1. Then repair it when there is any abnormality. 
  3. Reinstall the RU-518 firmware. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.54  C-1752 

Code 
C-1752 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
It is detected that the water leak sensor/1 (PS121) is active continuously for longer than the specified time period. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Water leak sensor/1 (PS121) 
  •  RU control board (PCB1) 
Correction 

                                                                        K-86 
﻿bizhub PRO 1100                                                                               K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check around the water conveyance path. Then repair it when there is any abnormality. 
  2. Check the IO Check (66-33) of PS121, and repair or replace it when there is any abnormality. 
  3. Check the connector connection between PCB1 and PS121, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 14-E) 
  4. Replace PS121. 
  5. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-2 
Control during the detachment 
Humidification function is unavailable. 

2.8.55  C-1753 

Code 
C-1753 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
It is detected that the water leak sensor/2 (PS122) is active continuously for longer than the specified time period. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Water leak sensor/2 (PS122) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check around the pump motor (M401). Then repair it when there is any abnormality. 
  2. Check the IO Check (66-34) of PS122, and repair or replace it when there is any abnormality. 
  3. Check the connector connection between PCB1 and PS122, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 14-E) 
  4. Replace PS122. 
  5. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-2 
Control during the detachment 
Humidification function is unavailable. 

2.8.56  C-1754 

Code 
C-1754 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
Regarding the SW4 and SW5 detection status, a combination abnormality is detected continuously for longer than the specified time period. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Water storage tank remaining amount detection switch/1 (SW4) 
  •  Water storage tank remaining amount detection switch/2 (SW5) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check inside the water storage tank. Then repair it when there is any abnormality. 
  2. Check the IO Check (66-36) and others of SW4, IO Check (66-38) and others of SW5, and repair or replace it when there is any 
     abnormality. 
  3. Check the connector connection between PCB1 and SW4, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 15-E) 
  4. Check the connector connection between PCB1 and SW5, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 15-E) 
  5. Replace SW4. 
  6. Replace SW5. 
  7. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 

                                                                        K-87 
﻿bizhub PRO 1100                                                                               K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Faulty part isolation DIPSW 
DIPSW13-2 
Control during the detachment 
Humidification function is unavailable. 

2.8.57  C-1755 

Code 
C-1755 
Classification 
RU-518: 24 V3 power supply abnormality (1st device) 
Cause 
A 24 V3 power supply abnormality is detected continuously for longer than the specified time period. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connections between RU-518 and the upstream machine. Then repair it when there is any abnormality. 
  2. Check the connector connection and the wiring on PCB1, and repair it when there is any abnormality. 
  3. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.58  C-1756 

Code 
C-1756 
Classification 
RU-518: 24 V2 power supply abnormality (1st device) 
Cause 
A 24 V2 power supply abnormality is detected continuously for longer than the specified time period. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS2) 
  •  RU control board (PCB1) 
  •  Relay/1 (RY1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between RY1 and PCB1, and the wiring. Then repair it when there is any abnormality. 
  2. Check the connector connection between DCPS2 and PCB1, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection and the wiring on DCPS2, and repair it when there is any abnormality. 
  4. Replace RY1. 
  5. Replace DCPS2. (Connector layout drawing in board: L.2.7.7 DC power supply/2 (DCPS2)) 
  6. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.59  C-1757 

Code 
C-1757 
Classification 
RU-518: 24 V1 power supply abnormality (1st device) 
Cause 
A 24 V1 power supply abnormality is detected continuously for longer than the specified time period. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Front door sensor (PS117) 
  •  Upper door sensor (PS118) 
  •  Front door switch (SW1) 
  •  Upper door switch (SW2) 
  •  Relay/2 (RY2) 
  •  DC power supply/1 (DCPS1) 
  •  DC power supply/2 (DCPS2) 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the IO Check (66-19) of PS117, and repair or replace it when there is any abnormality. 
  2. Check the IO Check (66-20) of PS118, and repair or replace it when there is any abnormality. 

                                                                        K-88 
﻿bizhub PRO 1100                                                                               K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  3. Check the connector connection between PCB1 and PS117, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 11-E) 
  4. Check the connector connection between PCB1 and PS118, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 21-M) 
  5. Check the connector connection between PCB1 and SW1, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 3-D) 
  6. Check the connector connection between PCB1 and SW2, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 3-E) 
  7. Check the connector connection between PCB1 and DCPS1, DCPS2, RY2, and the wiring. Then repair it when there is any abnormality. 
  8. Check the connector connection between PCB1 and DCPS1, and the wiring. Then repair it when there is any abnormality. 
  9. Check the connector connection between PCB1 and DCPS2, and the wiring. Then repair it when there is any abnormality. 
 10. Replace PS117. 
 11. Replace PS118. 
 12. Replace SW1. 
 13. Replace SW2. 
 14. Replace RY2. 
 15. Replace DCPS1. (Connector layout drawing in board:  L.2.7.6 DC power supply/1 (DCPS1)) 
 16. Replace DCPS2. (Connector layout drawing in board: L.2.7.7 DC power supply/2 (DCPS2)) 
 17. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.8.60  C-1758 

Code 
C-1758 
Classification 
HM-103: HM-103 abnormality (1st device) 
Cause 
When the de-curler section dry fan/2 (FM35) is active, an error detection signal is detected continuously for a specified period of time. Though 
the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  De-curler section dry fan/2 (FM35) 
  •  RU control board (PCB1) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Rotate FM35 with the IO Check (66-29) or by hand, and repair or replace it when there is any abnormality. 
  2. Check the connector connection between PCB1 and FM35, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     RU-518/HM-103: 9-M) 
  3. Replace FM35. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
DIPSW13-2 
Control during the detachment 
Humidification function is unavailable. 

2.9  Solution 6 (C-2101_2300) 

2.9.1  C-2101 

Code 
C-2101 
Classification 
Main body: Abnormality of cleaning the wire 
Cause 
Operation time abnormality of the charger cleaning motor (M23) 
  •  When the main power switch (SW1) becomes active and the charger cleaning home sensor (PS26) becomes inactive, within 20 seconds 
     after the home position search operation (return operation) by the activation of M23, PS26 does not become active. At this time, the error 
     detection (blowout of ICP) signal is not detected. 
  •  Within 5 seconds after the start of the reverse operation (return operation), PS26 does not become inactive. At this time, the error detection 
     (blowout of ICP) signal is not detected. 
  •  Within a specified period of time after the machine detects the deactivation of PS26 by the start of the reverse operation (return operation), 
     the charger cleaning limit sensor (PS27) does not become active. In the other case, within a specified period of time after PS27 becomes 
     active, PS26 does not become active. At this time, the error detection (blowout of ICP) signal is not detected. 
  •  At the beginning of the cleaning operation starts: When both the PS26 and PS27 are active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Charger cleaning home sensor (PS26) 
  •  Charger cleaning limit sensor (PS27) 
  •  Charger cleaning motor (M23) 
  •  Web motor (M24) 

                                                                        K-89 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and M23, M24, PS26, PS27, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (48-00) and others of M23, IO Check (45-20) of M24, and the coupling of the gear, and repair or replace it when there 
     is any abnormality. (Wiring diagram: Main body (3/4): 22-I, main body: (2/4): 2-A) 
  3. Check the IO Check (02-10) of PS26, IO Check (02-11) of PS27, and the operation, and repair or replace it when there is any abnormality. 
     (Wiring diagram: Main body (3/4): 21-I) 
  4. Replace PS26 or PS27. 
  5. Replace M23 or M24. 
  6. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.2  C-2102 

Code 
C-2102 
Classification 
Main body: Abnormality of cleaning the wire 
Cause 
Power source abnormality for the charger cleaning motor (M23) 
  •  When the main power switch (SW1) becomes active and the charger cleaning home sensor (PS26) becomes inactive, within 20 seconds 
     after the home position search operation (return operation) by the activation of M23, PS26 does not become active. At this time, the error 
     detection signal (ICP cut out) is detected. 
  •  Within 5 seconds after the start of the reverse operation (return operation), PS26 does not become inactive. At this time, the error detection 
     signal (ICP cut out) is detected. 
  •  Within a specified period of time after the machine detects the deactivation of PS26 by the start of the reverse operation (return operation), 
     the charger cleaning limit sensor (PS27) does not become active. In the other case, within a specified period of time after PS26 becomes 
     active, PS26 does not become active. At this time, the error detection signal (ICP cut out) is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Charger cleaning motor (M23) 
  •  Web motor (M24) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and M23, M24, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (48-00) and others of M23, IO Check (45-20) of M24, and the coupling of the gear, and repair or replace it when there 
     is any abnormality. (Wiring diagram: Main body (3/4): 22-I, main body: (2/4): 2-A) 
  3. Replace M23, M24, and the PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.3  C-2103 

Code 
C-2103 
Classification 
Main body: Abnormality of cleaning the wire 
Cause 
Operation abnormality of the charger cleaning motor (M23). 
During the displacement from the charger cleaning limit sensor (PS27) side to the charger cleaning home sensor (PS26) side, the motor lock 
signal is detected. Then, the 5th motor lock signal is detected after the retry operation. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Charger cleaning motor (M23) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and M23, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (48-00) and others of M23 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: Main body (3/4): 22-I) 
  3. Replace M23. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                         K-90 
﻿bizhub PRO 1100                                                                                    K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.9.4  C-2201 

Code 
C-2201 
Classification 
Main body: Motor abnormality 
Cause 
Speed abnormality of the toner bottle motor (M6). Within a specified period of time after M6 becomes active, the error detection signal is 
detected twice in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Toner bottle motor (M6) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the toner bottle installation section, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between PRCB and M6, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (01-00) of M6 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     Main body (3/4): 18-P) 
  4. Replace M6. 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.5  C-2202 

Code 
C-2202 
Classification 
Main body: Motor abnormality 
Cause 
Developing motor (M3) speed abnormality. After 1 second since the activation of M3, the abnormality signal is detected. Therefore, the machine 
deactivates M3 for 0.5 seconds. Then, after 1 second since its reactivation, the abnormality signal is detected again. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Developing motor (M3) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the developing sleeve, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between PRCB and M3, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (50-00) and others of M3 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: Main body (3/4): 15-P) 
  4. Replace M3. 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.6  C-2204 

Code 
C-2204 
Classification 
Main body: Motor abnormality 
Cause 
Blade motor (M22) drive abnormality + 24 V power abnormality. Within a specified period of time after the blade pressure signal becomes 
active, the blade READY signal (READY condition) cannot be detected. Alternatively, within a specified period of time after the blade pressure 
signal becomes active, the blade READY signal (READY release condition) cannot be detected. At this time, an error detection signal (24 V cut 
off) is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between PRCB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 

                                                                           K-91 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  3. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.7  C-2205 

Code 
C-2205 
Classification 
Main body: Motor abnormality 
Cause 
Blade motor (M22) power abnormality. Within a specified period of time after the blade pressure signal becomes active, the blade READY signal 
(READY condition) cannot be detected. Alternatively, within a specified period of time after the blade pressure signal becomes active, the blade 
READY signal (READY release condition) cannot be detected. At this time, an error detection signal (blowout of ICP) of the blade motor (M22) 
is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Blade motor (M22) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between PRCB and M22, and the wiring. Then repair it when there is any abnormality. 
  2. Check the coupling of the gear of M22, and repair or replace it when there is abnormality. (Wiring diagram: Main body (3/4): 23-I) 
  3. Replace M22 and PRCB at the same time. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.8  C-2206 

Code 
C-2206 
Classification 
Main body: Motor abnormality 
Cause 
It is checked before the movement of the blade motor (M22) completes. Within a specified period of time after the blade pressure signal 
becomes active, the blade READY signal (READY condition) cannot be detected. Alternatively, within a specified period of time after the blade 
pressure signal becomes active, the blade READY signal (READY release condition) cannot be detected. At this time, the error detection signal 
is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Blade motor (M22) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the operation of the blade, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between PRCB and M22, and the wiring. Then repair it when there is any abnormality. 
  3. Check the coupling of the gear of M22, and repair or replace it when there is abnormality. (Wiring diagram: Main body (3/4): 23-I) 
  4. Replace M22. 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.9  C-2207 

Code 
C-2207 
Classification 
Main body: Motor abnormality 
Cause 
Blade motor (M22) drive abnormality + 24 V power abnormality. Within a specified period of time after the blade replacement signal becomes 
active, the blade READY signal (READY release condition) cannot be detected. Or, the blade READY signal (READY release condition) cannot 
be detected within a specified period of time after the blade replacement signal turns OFF. At this time, an error detection signal (24 V cut off) is 
detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 

                                                                        K-92 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  3. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.10  C-2208 

Code 
C-2208 
Classification 
Main body: Motor abnormality 
Cause 
Blade motor (M22) power abnormality. Within a specified period of time after the blade replacement signal becomes active, the blade READY 
signal (READY release condition) cannot be detected. Or, the blade READY signal (READY release condition) cannot be detected within a 
specified period of time after the blade replacement signal turns OFF. At this time, an error detection signal (blowout of ICP) of the blade motor 
(M22) is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Blade motor (M22) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and M22, and the wiring. Then repair it when there is any abnormality. 
  2. Check the coupling of the gear of M22, and repair or replace it when there is abnormality. (Wiring diagram: Main body (3/4): 23-I) 
  3. Replace M22 and PRCB at the same time. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.11  C-2209 

Code 
C-2209 
Classification 
Main body: Motor abnormality 
Cause 
It is checked before the movement of the blade motor (M22) completes. Within a specified period of time after the blade replacement signal 
becomes active, the blade READY signal (READY release condition) cannot be detected. Or, the blade READY signal (READY release 
condition) cannot be detected within a specified period of time after the blade replacement signal turns OFF. At this time, the error detection 
signal is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Blade motor (M22) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the operation of the blade, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between PRCB and M22, and the wiring. Then repair it when there is any abnormality. 
  3. Check the coupling of the gear of M22, and repair or replace it when there is abnormality. (Wiring diagram: Main body (3/4): 23-I) 
  4. Replace M22. 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.12  C-2210 

Code 
C-2210 
Classification 
Main body: Motor abnormality 
Cause 
Drum motor (M2) speed abnormality. Within a specified period of time after M2 becomes active, the error detection signal is detected 5 times in 
succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Drum motor (M2) 
  •  Printer control board (PRCB) 

                                                                         K-93 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between PRCB and M2, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (41-21) and others of M2 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: Main body (3/4): 16-P) 
  3. Replace M2. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.13  C-2211 

Code 
C-2211 
Classification 
Main body: Motor abnormality 
Cause 
Power source abnormality for the intermediate hopper motor (M11). When M11 becomes active, the error detection signal (blowout of ICP) is 
detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Intermediate hopper motor (M11) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and M11, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (54-00) of M11 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     Main body (3/4): 19-B) 
  3. Replace M11 and PRCB at the same time. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.14  C-2212 

Code 
C-2212 
Classification 
Main body: Motor abnormality 
Cause 
Hopper agitator motor (M10) power abnormality. An error detection signal (blowout of ICP) is detected when M10 becomes active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Hopper agitator motor (M10) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and M10, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (54-10) of M10 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     Main body (3/4): 18-B) 
  3. Replace M10 and PRCB at the same time. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.15  C-2227 

Code 
C-2227 
Classification 
Main body: Motor abnormality 
Cause 
Rotation abnormality of the developing screw motor (M21). Within a specified period of time after M21 becomes active, M21EM error detection 
signal is detected twice in succession. However, the error detection signal (blowout of ICP) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Developing screw motor (M21) 
  •  Printer control board (PRCB) 
Correction 

                                                                       K-94 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the developing screw section, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between PRCB and M21, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (50-12) of M21 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     Main body (2/4): 7-A) 
  4. Replace M21. 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.16  C-2228 

Code 
C-2228 
Classification 
Main body: Motor abnormality 
Cause 
Rotation abnormality of the transfer belt motor (M30). Within a specified period of time after M30 becomes active or the speed changes, the 
M30EM error detection signal is detected twice in succession and the main body door detection is close. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Transfer belt motor (M30) 
  •  ADU drive board/1 (ADUDB1) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the transfer belt, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between PRCB and M30, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between ADUDB1 and M30, and the wiring. Then repair it when there is any abnormality. 
  4. Check the IO Check (24-04) and others of M30 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: Main body (2/4): 9-P) 
  5. Replace M30. 
  6. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  7. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.17  C-2231 

Code 
C-2231 
Classification 
Main body: Motor abnormality 
Cause 
Rotation abnormality of the de-curler motor (M32). After the activation of M32, the M32EM error detection signal is detected twice in succession 
and the main body door detection is close. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  De-curler motor (M32) 
  •  ADU drive board/1 (ADUDB1) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the de-curler section, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between PRCB and M32, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between ADUDB1 and M32, and the wiring. Then repair it when there is any abnormality. 
  4. Check the IO Check (41-10) and others of M32 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: Main body (2/4): 5-P) 
  5. Replace M32. 
  6. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.18  C-2234 

Code 
C-2234 
Classification 

                                                                       K-95 
﻿bizhub PRO 1100                                                                                   K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Main body: Motor abnormality 
Cause 
Operation time abnormality 1 of the transfer belt pressure release motor (M26). During the displacement of M26 from the HP position to the 
pressure position: Within a specified period of time, the transfer pressure position sensor/1 (PS55) or the transfer pressure position sensor/2 
(PS56) does not become active. When the main body door detection is close in this time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Transfer pressure position sensor/1 (PS55) 
  •  Transfer pressure position sensor/2 (PS56) 
  •  Transfer belt pressure release motor (M26) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the transfer belt pressure release section, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between ADUDB1 and M26, PS55, PS56, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (03-40) of PS55, IO Check (03-41) of PS56, and the operation, and repair or replace it when there is any abnormality. 
     (Wiring diagram: Main body (2/4): 10-I) 
  4. Check the IO Check (48-03) and others of M26 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: Main body (2/4): 21-P) 
  5. Replace PS55 or PS56. 
  6. Replace M26. 
  7. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.19  C-2235 

Code 
C-2235 
Classification 
Main body: Motor abnormality 
Cause 
Operation time abnormality 2 of the transfer belt pressure release motor (M26). 
  •  Within a specified period of time after the main power becomes active, the activation of the transfer pressure home sensor (PS54) is not 
     detected. When the main body door detection is close in this time. 
  •  During the displacement of M26 from the pressure position to the transfer HP position: Within a specified period of time, PS54 does not 
     become active. When the main body door detection is close in this time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Transfer pressure home sensor (PS54) 
  •  Transfer belt pressure release motor (M26) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the transfer belt pressure release section, and clean or repair it when there is any abnormality. 
  2. Check the connector connection between ADUDB1 and M26, PS54, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (03-42) or operation of PS54, and repair or replace it when there is any abnormality. (Wiring diagram: Main body (2/4): 
     11-I) 
  4. Check the IO Check (48-03) and others of M26 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: Main body (2/4): 21-P) 
  5. Replace PS54. 
  6. Replace M26. 
  7. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.20  C-2236 

Code 
C-2236 
Classification 
Main body: Motor abnormality 
Cause 
Motor IC abnormality of the transfer belt pressure release motor (M26) in the ADU drive board/1 (ADUDB1). Since the printing starts, FM26 
error detection signal is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Transfer belt pressure release motor (M26) 
  •  ADU drive board/1 (ADUDB1) 
Correction 

                                                                           K-96 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ADUDB1 and M26, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (48-03) and others of M26 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: Main body (2/4): 21-P) 
  3. Replace M26 and ADUDB1 at the same time. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.21  C-2237 

Code 
C-2237 
Classification 
Main body: Motor abnormality 
Cause 
Waste toner motor (M9) rotation abnormality. The M9 error detection signal is detected twice in succession within a specified period of time after 
M9EM becomes active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Waste toner motor (M9) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the waste toner section, and clean/repair it when there is any abnormality. 
  2. Check the connector connection between PRCB and M9, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (54-22) of M9 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     Main body (3/4): 20-P) 
  4. Replace M9. 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.22  C-2238 

Code 
C-2238 
Classification 
Main body: Motor abnormality 
Cause 
Blade motor (M22) abnormality. Within a specified period of time after M22 becomes active, it does not move to the weak pressure position. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Blade sensor/1 (PS24) 
  •  Blade sensor/2 (PS25) 
  •  Blade motor (M22) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and M22, PS24, PS25, and the wiring. Then repair it when there is any abnormality. 
  2. Check the coupling of the gear of M22, and repair or replace it when there is abnormality. (Wiring diagram: Main body (3/4): 23-I) 
  3. Check the IO Check (02-13) of PS24, IO Check (02-14) of PS25, and the operation, and repair or replace it when there is any abnormality. 
     (Wiring diagram: Main body (3/4): 23-I, 24-I) 
  4. Replace PS24 or PS25. 
  5. Replace M22. 
  6. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.23  C-2241 

Code 
C-2241 
Classification 
Main body: Motor abnormality 
Cause 
Driver abnormality of the intermediate hopper motor (M11) in the printer control board (PRCB). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 

                                                                       K-97 
﻿bizhub PRO 1100                                                                                  K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Estimated abnormal parts 
  •  Intermediate hopper motor (M11) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and M11, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (54-00) of M11 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring diagram: 
     Main body (3/4): 19-B) 
  3. Replace M11 and PRCB at the same time. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.9.24  C-2242 

Code 
C-2242 
Classification 
Main body: Motor abnormality 
Cause 
Drum cleaner motor (M35) abnormality. 
Within a specified period of time after M35 becomes active or the speed changes, the M35EM error detection signal is detected twice in 
succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Drum cleaner motor (M35) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and M35, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate M35 with the IO Check (41-24) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (2/4): 8-A) 
  3. Replace M35. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10  Solution 7 (C-2301_4000) 

2.10.1  C-2304 

Code 
C-2304 
Classification 
Main body: Fan abnormality 
Cause 
Developing suction fan (FM22) rotation abnormality + 24 V power abnormality. Within a specified period of time after FM22 becomes active or 
the speed changes, the FM5EM error detection signal is detected twice in succession. At this time, an error detection signal (24 V cut off) is also 
detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
  3. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.2  C-2306 

Code 
C-2306 
Classification 
Main body: Fan abnormality 
Cause 

                                                                          K-98 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Rotation abnormality of the developing suction fan (FM22). Within a specified period of time after FM22 becomes active or the speed changes, 
FM5EM error detection signal is detected twice in succession. However, the error detection signal (24 V cut off) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Developing suction fan (FM22) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and FM22, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM22 with the IO Check (42-04) and others or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: 
     Main body (2/4): 21-A) 
  3. Replace FM22. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.3  C-2307 

Code 
C-2307 
Classification 
Main body: Fan abnormality 
Cause 
Front fan rotation (FM31) rotation abnormality + 24 V power abnormality. Within a specified period of time after FM31 becomes active, the 
FM31EM error detection signal is detected twice in succession. At this time, an error detection signal (24 V cut off) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
  3. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.4  C-2309 

Code 
C-2309 
Classification 
Main body: Fan abnormality 
Cause 
Front fan (FM31) rotation abnormality. Within a specified period of time after FM31 becomes active, FM31EM error detection signal is detected 
twice in succession. However, the error detection signal (24 V cut off) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Front fan (FM31) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and FM31, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM31 with the IO Check (42-91) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (2/4): 17-A) 
  3. Replace FM31. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.5  C-2311 

Code 
C-2311 
Classification 
Main body: Fan abnormality 
Cause 

                                                                         K-99 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Rear exhaust fan (FM34) rotation abnormality + 24 V power source abnormality. Within a specified period of time after FM11 becomes active, 
the FM11EM error detection signal is detected twice in succession. At this time, an error detection signal (24 V cut off) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.6  C-2313 

Code 
C-2313 
Classification 
Main body: Fan abnormality 
Cause 
Rear suction fan (FM34) rotation abnormality. Within a specified period of time after FM34 becomes active, FM34EM error detection signal is 
detected twice in succession. However, the error detection signal (24 V cut off) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Rear suction fan (FM34) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and FM34, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM34 with the IO Check (42-95) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (2/4): 19-A) 
  3. Replace FM34. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.7  C-2314 

Code 
C-2314 
Classification 
Main body: Fan abnormality 
Cause 
Rear suction fan (FM34) rotation abnormality. Since the printing starts, FM34 error detection signal is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Rear suction fan (FM34) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and FM34, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM34 with the IO Check (42-95) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (2/4): 19-A) 
  3. Replace FM34. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.8  C-2317 

Code 
C-2317 
Classification 
Main body: Fan abnormality 
Cause 
Ozone exhaust fan (FM44) rotation abnormality + 24 V power source abnormality. Within a specified period of time after FM44 becomes active, 
the FM44EM error detection signal is detected twice in succession. At this time, an error detection signal (24 V cut off) is also detected. 

                                                                        K- 100 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.9  C-2318 

Code 
C-2318 
Classification 
Main body: Fan abnormality 
Cause 
Rotation abnormality of the ozone exhaust fan (FM44). Within a specified period of time after FM44 becomes active, FM44EM error detection 
signal is detected twice in succession. However, the error detection signal (24 V cut off) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Ozone exhaust fan (FM44) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and FM44, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM44 with the IO Check (42-97) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (2/4): 15-A) 
  3. Replace FM44. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.10  C-2401 

Code 
C-2401 
Classification 
Main body: Power abnormality 
Cause 
Detection of the erase lamp (EL) CN disconnection. When the power becomes active: Within a specified period of time after the machine 
activates the detection of the CN disconnection signal of EL, the error detection signal (disconnection) is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Erase lamp (EL) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the EL section, and clean or repair it when there is any abnormality. (Wiring diagram: Main body (3/4): 22-I) 
  2. Check the connector connection between PRCB and EL, and the wiring. Then repair it when there is any abnormality. 
  3. Replace EL. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.11  C-2402 

Code 
C-2402 
Classification 
Main body: Drum 
Cause 
Drum temperature sensor cut off. After a specified period of time since the dehumidification heater/1 (HTR1) control starts by the activation of 
the main power switch (SW1), the change in the temperature of the drum temperature sensor (TH5) is -2 degrees or lower. Also, the drum 
temperature is 10 degrees or lower after 1 minute. 
Measures to take when an alert occurs 

                                                                        K- 101 
﻿bizhub PRO 1100                                                                             K TROUBLESHOOTING > 2. MALFUNCTION CODE 

The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Drum temperature sensor (TH5) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and TH5, and the wiring. Then repair it when there is any abnormality. 
  2. Check the TH5, and repair or replace it when there is any abnormality. (Wiring diagram: Main body (3/4): 18-I) 
  3. Replace TH5. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.12  C-2403 

Code 
C-2403 
Classification 
Main body: Drum 
Cause 
Drum temperature sensor earth fault. When the fusing temperature is 50 degrees or lower and the main power switch (SW1) becomes active: 
The detection temperature of the drum temperature sensor (TH5) is 52 degrees or higher. In addition, after a specified period of time, the 
detection temperature is 52 degrees or higher. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Drum temperature sensor (TH5) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and TH5, and the wiring. Then repair it when there is any abnormality. 
  2. Check the TH5, and repair or replace it when there is any abnormality. (Wiring diagram: Main body (3/4): 18-I) 
  3. Replace TH5. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.13  C-2411 

Code 
C-2411 
Classification 
Main body: Drum 
Cause 
TCR sensor (TCRS) output abnormality 1. 
Vout_max detects 3.7 V (189 step) or more during printing. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  TCR sensor (TCRS) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the TCRS, and clean or replace it when there is any sensor dirt and any abnormality. (Wiring diagram: Main body (3/4): 17-I) 
  2. Check the developing section, and clean or replace it when there is any dirt or abnormality. 
  3. Check the connector connection and the wiring between PRCB and TCRS, and repair it when there is any abnormality. 
  4. Replace TCRS. 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.14  C-2412 

Code 
C-2412 
Classification 
Main body: Drum 
Cause 
TCR sensor (TCRS) output abnormality 2. Vout_max detects 0.5 V (25 step) or less during printing. 
Measures to take when an alert occurs 

                                                                     K- 102 
﻿bizhub PRO 1100                                                                                   K TROUBLESHOOTING > 2. MALFUNCTION CODE 

The main body and the option stop immediately. 
Estimated abnormal parts 
  •  TCR sensor (TCRS) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the TCRS, and clean or replace it when there is any sensor dirt and any abnormality. (Wiring diagram: Main body (3/4): 17-I) 
  2. Check the developing section, and clean or replace it when there is any dirt or abnormality. 
  3. Check the connector connection and the wiring between PRCB and TCRS, and repair it when there is any abnormality. 
  4. Replace TCRS. 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.15  C-2701 

Code 
C-2701 
Classification 
Main body: High voltage current abnormality 
Cause 
Electrification leak detection. While the charging is activated, the charging EM signal error is detected. Then, the activation and deactivation 
operation of the charging occurs 5 times in succession during 10 printings. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Charger unit 
  •  High voltage unit/1 (HV1) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Clean the power supply section to the charger unit. 
  2. Check the charger unit (the charging wire and the grid), and clean or replace it when there is any dirt or abnormality. 
  3. Check the connector connection and the wiring between HV1 and the charger unit, and repair it when there is any abnormality. (Wiring 
     diagram: Main body (2/4): 5-D) 
  4. Replace HV1. (Connector layout drawing in board: L.2.1.10 High voltage unit/1 (HV1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.16  C-2702 

Code 
C-2702 
Classification 
Main body: High voltage current abnormality 
Cause 
Transfer leak detection. While the transfer is activated, the transfer EM signal abnormality is detected. Then the activation and deactivation 
operation of the transfer occurs 5 times in succession during 10 printings. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Transfer roller 
  •  High voltage unit/2 (HV2) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the transfer roller section, and clean or replace it when there is any dirt or abnormality. 
  2. Clean the power supply section to the transfer roller. 
  3. Check the transfer roller pressure section, and repair or replace it when there is any abnormality in the operation. 
  4. Check the connector connection and the wiring between HV2 and the power supply section, and repair or replace it when there is any 
     abnormality. (Wiring diagram: Main body (2/4): 3-M) 
  5. Replace HV2. (Connector layout drawing in board: L.2.1.11 High voltage unit/2 (HV2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.17  C-2704 

Code 
C-2704 
Classification 
Main body: High voltage power source abnormality 
Cause 

                                                                          K- 103 
﻿bizhub PRO 1100                                                                                     K TROUBLESHOOTING > 2. MALFUNCTION CODE 

24 V power source abnormality for the high voltage unit/2 (HV2) in the ADU drive board/1 (ADUDB1). 
When the printing starts, the abnormality signal (blowout of ICP for HV2) of ADUDB1 is detected with the front door closed. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  High voltage unit/2 (HV2) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the high voltage contact of the process mount, and repair it when there is any abnormality. 
  2. Check the connector connection on ADUDB1 and HV2, and repair it when there is any abnormality. 
  3. Check the wiring between ADUDB1 and HV2. Then repair or replace it when there is any abnormality. 
  4. Replace HV2. (Connector layout drawing in board: L.2.1.11 High voltage unit/2 (HV2)) 
  5. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.18  C-2705 

Code 
C-2705 
Classification 
Main body: High voltage current abnormality 
Cause 
PCC leak detection. While the PCC is activated, the PCC EM signal abnormality is detected. Then, the activation and deactivation operation of 
the PCC occurs 5 times in succession during 10 printings. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Discharging unit 
  •  High voltage unit/3 (HV3) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the discharging wire of the discharging unit, and replace the discharging wire when there is any wire cut. 
  2. Check the installation condition of the discharging unit, and reinstall it when there is any abnormality. 
  3. Check the connector connection and the wiring between HV3 and the power supply section, and repair or replace it when there is any 
     abnormality. (Wiring diagram: Main body (2/4): 4-D) 
  4. Replace HV3. (Connector layout drawing in board: L.2.1.12 High voltage unit/3 (HV3)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.19  C-2801 

Code 
C-2801 
Classification 
Main body: Process abnormality 
Cause 
IDC sensor (TCB) light volume detection abnormality. In the IDC base line correction, the IDC sensor for low density is less than the specified 
step for all rough adjustments. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Toner control board (TCB) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the TCB, and clean it with a dry cloth when there is a IDC sensor dirt. (Wiring diagram: Main body (3/4): 19-I) 
     * If it is filthy, clean with alcohol. 
  2. Check the developing section, and clean or replace it when there is any dirt or abnormality. 
  3. Check the connector connection and the wiring between PRCB and TCB, and repair it when there is any abnormality. 
  4. Replace TCB. (Connector layout drawing in board: L.2.1.20 Toner control board (TCB)) 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.20  C-2802 

Code 
C-2802 
Classification 

                                                                           K- 104 
﻿bizhub PRO 1100                                                                                     K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Main body: Process abnormality 
Cause 
The maximum density correction (Dmax) is not completed. When the Dmax is conducted, the seventh retry judgment decision is made after the 
sixth. In the other case, the results of the calculation by the first order approximation is 0 or less, or the calculation is impossible. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Developing motor (M3) 
  •  Toner control board (TCB) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the TCB, and clean it with a dry cloth when there is a IDC sensor dirt. (Wiring diagram: Main body (3/4): 19-I) 
     * If it is filthy, clean with alcohol. 
  2. Check the connector connection and the wiring between PRCB and TCB, and repair it when there is any abnormality. 
  3. Check the IO Check (50-00) and others of M3 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: Main body (3/4): 15-P) 
  4. Replace TCB. (Connector layout drawing in board: L.2.1.20 Toner control board (TCB)) 
  5. Replace M3. 
  6. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.21  C-2803 

Code 
C-2803 
Classification 
Main body: Process abnormality 
Cause 
IDC sensor (TCB) output abnormality. During the maximum density correction (Dmax), the detected patch value between images exceeds the 
specified step 3 times continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Toner control board (TCB) 
  •  Printer control board (PRCB) 
  •  Image processing board (IPB) 
  •  Overall control board (OACB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the TCB, and clean it with a dry cloth when there is a IDC sensor dirt. (Wiring diagram: Main body (3/4): 19-I) 
     * If it is filthy, clean with alcohol. 
  2. Check the connector connection between TCB and PRCB, and the wiring. Then repair it when there is any abnormality. 
  3. Replace TCB. (Connector layout drawing in board: L.2.1.20 Toner control board (TCB)) 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.22  C-2805 

Code 
C-2805 
Classification 
Main body: Process abnormality 
Cause 
IDC sensor dirt 
In the IDC base line correction, the determined value of the LED impressed voltage after the rough adjustment is the specified step or less. 
Measures to take when alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Toner control board (TCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the panel. 
Solution 
  1. Check the TCB, and clean it with a dry cloth when there is a IDC sensor dirt. (Wiring diagram: Main body (3/4): 19-I) 
     *When it is filthy, clean with alcohol. 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                           K- 105 
﻿bizhub PRO 1100                                                                                    K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.10.23  C-2806 

Code 
C-2806 
Classification 
Main body: Process abnormality 
Cause 
Vi potential measurement abnormality. 
Vi potential measurement error occurs for a specified number of times. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Drum potential sensor (DPS) 
  •  Drum potential sensor board (DPSB) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the DPS, and clean or replace it when there is a sensor dirt or any abnormality. (Wiring diagram: Main body (3/4): 19-J) 
  2. Check the connector connection between PRCB and DPS, and the wiring. Then repair it when there is any abnormality. 
  3. Replace DPS. 
  4. Replace DPSB. (Connector layout drawing in board: L.2.1.19 Drum potential sensor board (DPSB)) 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.24  C-2807 

Code 
C-2807 
Classification 
Main body: Process abnormality 
Cause 
Dot diameter correction abnormality. The IDC sensor for low density of the patch which the machine outputs with maximum light density is the 
specified step or more. In this case, it is considered that the patch is not output. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Toner control board (TCB) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the TCB, and clean it with a dry cloth when there is a IDC sensor dirt. (Wiring diagram: Main body (3/4): 19-I) 
     * If it is filthy, clean with alcohol. 
  2. Check the connector connection between TCB and PRCB, and the wiring. Then repair it when there is any abnormality. 
  3. Replace TCB. (Connector layout drawing in board: L.2.1.20 Toner control board (TCB)) 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.25  C-2808 

Code 
C-2808 
Classification 
Main body: Process abnormality 
Cause 
Dot diameter correction abnormality. When the dot diameter correction is conducted, the correction is terminated with an abnormal value. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Toner control board (TCB) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the TCB, and clean it with a dry cloth when there is a IDC sensor dirt. (Wiring diagram: Main body (3/4): 19-I) 
     * If it is filthy, clean with alcohol. 
  2. Check the connector connection between TCB and PRCB, and the wiring. Then repair it when there is any abnormality. 
  3. Replace TCB. (Connector layout drawing in board: L.2.1.20 Toner control board (TCB)) 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 

                                                                           K- 106 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Control during the detachment 

2.10.26  C-2809 

Code 
C-2809 
Classification 
Main body: Process abnormality 
Cause 
Drum potential sensor (DPS) output abnormality. Before the initial operation, more than -200 V of the drum surface potential is detected 5 times 
or more. When this condition is detected 5 times in succession, the error code is displayed. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Drum potential sensor (DPS) 
  •  Drum potential sensor board (DPSB) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the DPS, and clean or replace it when there is a sensor dirt or any abnormality. (Wiring diagram: Main body (3/4): 18-I) 
  2. Check the connector connection between PRCB and DPS, and the wiring. Then repair it when there is any abnormality. 
  3. Replace DPS. 
  4. Replace DPSB. (Connector layout drawing in board: L.2.1.19 Drum potential sensor board (DPSB)) 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.27  C-2810 

Code 
C-2810 
Classification 
Main body: Process abnormality 
Cause 
Drum potential sensor (DPS) output abnormality. In a V0 correction, when the correction is not completed even after the eighth retry, the error 
code is displayed. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Drum potential sensor (DPS) 
  •  Drum potential sensor board (DPSB) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the DPS, and clean or replace it when there is a sensor dirt or any abnormality. (Wiring diagram: Main body (3/4): 18-I) 
  2. Check the connector connection between PRCB and DPS, and the wiring. Then repair it when there is any abnormality. 
  3. Replace DPS. 
  4. Replace DPSB. (Connector layout drawing in board: L.2.1.19 Drum potential sensor board (DPSB)) 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.28  C-2811 

Code 
C-2811 
Classification 
Main body: Process abnormality 
Cause 
Drum potential sensor (DPS) data abnormality. In a V0 correction, the charging grid voltage output and the surface electrometer (average value) 
differ 300 V or more twice discontinuously. In this condition, the error code is displayed. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Drum potential sensor (DPS) 
  •  Drum potential sensor board (DPSB) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the DPS, and clean or replace it when there is a sensor dirt or any abnormality. (Wiring diagram: Main body (3/4): 18-I) 

                                                                       K- 107 
﻿bizhub PRO 1100                                                                                   K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  2. Check the connector connection between PRCB and DPS, and the wiring. Then repair it when there is any abnormality. 
  3. Replace DPS. 
  4. Replace DPSB. (Connector layout drawing in board: L.2.1.19 Drum potential sensor board (DPSB)) 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.29  C-2812 

Code 
C-2812 
Classification 
Main body: Process abnormality 
Cause 
Transfer current auto adjustment abnormality. The auto adjustment of the transfer current does not complete. 
Measures to take when an alert occurs 
Error code is not displayed on the operation panel, but displayed only on the data collection, the list output and CSRC. 
Estimated abnormal parts 
  •  Transfer roller 
  •  High voltage unit/2 (HV2) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the transfer roller section, and clean or replace it when there is any dirt or abnormality. 
  2. Clean the power supply section to the transfer roller. 
  3. Check the connector connection and the wiring between HV2 and the power supply section, and repair or replace it when there is any 
     abnormality. (Wiring diagram: Main body (2/4): 3-M) 
  4. Replace HV2. (Connector layout drawing in board: L.2.1.11 High voltage unit/2 (HV2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.30  C-3201 

Code 
C-3201 
Classification 
Main body: Motor abnormality 
Cause 
Drum motor (M24) power abnormality + 24 V power abnormality. When M24 becomes active, error detection signals (blowout of ICP and the 24 
V cut off) are detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ACDB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.31  C-3202 

Code 
C-3202 
Classification 
Main body: Motor abnormality 
Cause 
Power supply for web motor (M24) abnormality. An error detection signal (blowout of ICP) is detected when the M24 becomes active. At this 
time, an error detection signal (24 V cut off) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Web motor (M24) 
  •  Charger cleaning motor (M23) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and M23, M24, and the wiring. Then repair it when there is any abnormality. 
  2. Check the IO Check (48-00) and others of M23, IO Check (45-20) of M24, and the coupling of the gear, and repair or replace it when there 
     is any abnormality. (Wiring diagram: Main body (2/4): 2-A, main body: (3/4): 22-I) 

                                                                          K- 108 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  3. Replace the M24, the M23 and the PRCB at the same time. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.32  C-3501 

Code 
C-3501 
Classification 
Main body: Fusing high temperature abnormality 
Cause 
Thermistor/1 (TH1) high temperature abnormality (software). At the fusing set condition and when the ADU handle release sensor (PS44) is 
active, TH1 detects a temperature of 235 degrees or more 10 times in succession in a period of 0.5 seconds. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Fusing temperature sensor/1 (TH1) 
  •  Fusing heater lamp/1 (L1) 
  •  Fusing heater lamp/2 (L2) 
  •  Printer control board (PRCB) 
  •  AC drive board (ACDB) 
Correction 
Be sure to change the software DIPSW3-1 in the service mode from 1 to 0 and deactivate and activate the sub power switch (SW2) of the main 
body after you fix the defective parts. 
Note  
  ▪  If DIPSW3-1 is changed to 0 before you repair the defective parts, it possibly cause a fire. 
Solution 
  1. Check the fusing heater lamp/1 and the fusing heater lamp/2 (L1 and L2), and repair them when there is any abnormality. (Wiring diagram: 
     Main body (1/4): 1-D, main body (1/4): 2-D) 
  2. Check the connector connection between PRCB and TH1, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between ACDB and L1, L2, and the wiring. Then repair it when there is any abnormality. 
  4. Check the installation condition of TH1 and the distance from the fusing roller/Up. Then adjust or replace it when there is any abnormality. 
     (Wiring diagram: Main body (1/4): 3-D) 
  5. Replace TH1. 
  6. Replace L1 and L2. 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  8. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.33  C-3502 

Code 
C-3502 
Classification 
Main body: Fusing high temperature abnormality 
Cause 
Thermistor/3 (TH3) high temperature abnormality (software). At the fusing set condition and when the ADU handle release sensor (PS44) is 
active, TH3 detects a temperature of 230 degrees or more 5 times in succession in a period of 1 second. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Fusing temperature sensor/3 (TH3) 
  •  Fusing heater lamp/3 (L3) 
  •  Printer control board (PRCB) 
  •  AC drive board (ACDB) 
Correction 
Be sure to change the software DIPSW3-1 in the service mode from 1 to 0 and deactivate and activate the sub power switch (SW2) of the main 
body after you fix the defective parts. 
Note  
  ▪  If DIPSW3-1 is changed to 0 before you repair the defective parts, it possibly cause a fire. 
Solution 
  1. Check the fusing heater lamp/3 (L3) and repair it when there is any abnormality. (Wiring diagram: Main body (1/4): 2-D) 
  2. Check the connector connection between PRCB and TH1, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between ACDB and L3, and the wiring. Then repair it when there is any abnormality. 
  4. Check the installation condition of TH3 and the distance from the fusing roller/Up. Then adjust or replace it when there is any abnormality. 
     (Wiring diagram: Main body (1/4): 4-D) 
  5. Replace TH3. 
  6. Replace L3. 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  8. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.34  C-3503 

Code 
C-3503 
Classification 

                                                                        K- 109 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Main body: Fusing high temperature abnormality 
Cause 
Thermistor/1 (TH1) high temperature abnormality (hardware). At the fusing set condition and when the ADU handle release sensor (PS44) is 
active, TH1 detects the fusing error detection 1. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Fusing temperature sensor/1 (TH1) 
  •  Fusing heater lamp/1 (L1) 
  •  Fusing heater lamp/2 (L2) 
  •  Printer control board (PRCB) 
  •  AC drive board (ACDB) 
Correction 
Be sure to change the software DIPSW3-1 in the service mode from 1 to 0 and deactivate and activate the sub power switch (SW2) of the main 
body after you fix the defective parts. 
Note  
  ▪  If DIPSW3-1 is changed to 0 before you repair the defective parts, it possibly cause a fire. 
Solution 
  1. Check the fusing heater lamp/1 and the fusing heater lamp/2 (L1 and L2), and repair them when there is any abnormality. (Wiring diagram: 
     Main body (1/4): 1-D, 2-D) 
  2. Check the connector connection between PRCB and TH1, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between ACDB and L1, L2, and the wiring. Then repair it when there is any abnormality. 
  4. Check the installation condition of TH1 and the distance from the fusing roller/Up. Then adjust or replace it when there is any abnormality. 
     (Wiring diagram: Main body (1/4): 3-D) 
  5. Replace TH1. 
  6. Replace L1 and L2. 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  8. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.35  C-3504 

Code 
C-3504 
Classification 
Main body: Fusing high temperature abnormality 
Cause 
Thermistor/3 (TH3) high temperature abnormality (hardware). At the fusing set condition and when the ADU handle release sensor (PS44) is 
active, TH3 detects the fusing error detection 4. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Fusing temperature sensor/3 (TH3) 
  •  Fusing heater lamp/3 (L3) 
  •  Printer control board (PRCB) 
  •  AC drive board (ACDB) 
Correction 
Be sure to change the software DIPSW3-1 in the service mode from 1 to 0 and deactivate and activate the sub power switch (SW2) of the main 
body after you fix the defective parts. 
Note  
  ▪  If DIPSW3-1 is changed to 0 before you repair the defective parts, it possibly cause a fire. 
Solution 
  1. Check the fusing heater lamp/3 (L3) and repair it when there is any abnormality. (Wiring diagram: Main body (1/4): 2-D) 
  2. Check the connector connection between PRCB and TH1, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between ACDB and L3, and the wiring. Then repair it when there is any abnormality. 
  4. Check the installation condition of TH3 and the distance from the fusing roller/Up. Then adjust or replace it when there is any abnormality. 
     (Wiring diagram: Main body (1/4): 4-D) 
  5. Replace TH3. 
  6. Replace L3. 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  8. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.36  C-3505 

Code 
C-3505 
Classification 
Main body: Fusing high temperature abnormality 
Cause 
Thermistor/2 (TH2) high temperature abnormality (software). It is at the fusing set condition or the ADU handle release sensor (PS44) is active. 
At this time, the TH2 detects a temperature of 235 degrees or more 10 times in succession in a period of 0.5 seconds. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Fusing temperature sensor/2 (TH2) 
  •  Fusing heater lamp/3 (L3) 

                                                                        K- 110 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  •  Printer control board (PRCB) 
  •  AC drive board (ACDB) 
Correction 
Be sure to change the software DIPSW3-1 in the service mode from 1 to 0 and deactivate and activate the sub power switch (SW2) of the main 
body after you fix the defective parts. 
Note  
  ▪  If DIPSW3-1 is changed to 0 before you repair the defective parts, it possibly cause a fire. 
Solution 
  1. Check the fusing heater lamp/3 (L3) and repair it when there is any abnormality. (Wiring diagram: Main body (1/4): 2-D) 
  2. Check the connector connection between PRCB and TH2, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between ACDB and L3, and the wiring. Then repair it when there is any abnormality. 
  4. Check the installation condition of TH2 and the distance from the fusing heating roller, and adjust or replace it when there is any 
     abnormality. (Wiring diagram: Main body (1/4): 4-D) 
  5. Replace TH1. 
  6. Replace L1 and L2. 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  8. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.37  C-3801 

Code 
C-3801 
Classification 
Main body: Fusing low temperature abnormality 
Cause 
Thermistor/1 (TH1) low temperature abnormality (software). TH1 does not get to 75 degrees when a specified period of time has elapsed after 
the fusing ON control after the main power switch (SW1) becomes active. Alternatively, even when it rotates for twice longer than the warm-up 
preparatory rotation, TH1 does not get to the control temperature. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Fusing temperature sensor/1 (TH1) 
  •  Fusing heater lamp/1 (L1) 
  •  Fusing heater lamp/2 (L2) 
  •  Printer control board (PRCB) 
  •  AC drive board (ACDB) 
Correction 
Be sure to change the software DIPSW3-1 in the service mode from 1 to 0 and deactivate and activate the sub power switch (SW2) of the main 
body after you fix the defective parts. 
Note  
  ▪  If DIPSW3-1 is changed to 0 before you repair the defective parts, it possibly cause a fire. 
Solution 
  1. Check the fusing heater lamp/1 and the fusing heater lamp/2 (L1 and L2), and repair them when there is any abnormality. (Wiring diagram: 
     Main body (1/4): 1-D, main body (1/4): 2-D) 
  2. Check the connector connection between PRCB and TH1, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between ACDB and L1, L2, and the wiring. Then repair it when there is any abnormality. 
  4. Check the installation condition of TH1 and the distance from the fusing roller/Up. Then adjust or replace it when there is any abnormality. 
     (Wiring diagram: Main body (1/4): 3-D) 
  5. Replace TH1. 
  6. Replace L1 and L2. 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  8. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.38  C-3802 

Code 
C-3802 
Classification 
Main body: Fusing low temperature abnormality 
Cause 
Thermistor/3 (TH3) low temperature abnormality (software). TH3 does not get to 50 degrees when a specified period of time has elapsed after 
the fusing ON control after the main power switch (SW1) becomes active. 
Alternatively, even when it rotates for twice longer than the warm-up preparatory rotation, TH3 does not get to the control temperature. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Fusing temperature sensor/3 (TH3) 
  •  Fusing heater lamp/3 (L3) 
  •  Printer control board (PRCB) 
  •  AC drive board (ACDB) 
Correction 
Be sure to change the software DIPSW3-1 in the service mode from 1 to 0 and deactivate and activate the sub power switch (SW2) of the main 
body after you fix the defective parts. 
Note  
  ▪  If DIPSW3-1 is changed to 0 before you repair the defective parts, it possibly cause a fire. 

                                                                        K- 111 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Solution 
  1. Check the fusing heater lamp/3 (L3) and repair it when there is any abnormality. (Wiring diagram: Main body (1/4): 2-D) 
  2. Check the connector connection between PRCB and TH1, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between ACDB and L3, and the wiring. Then repair it when there is any abnormality. 
  4. Check the installation condition of TH3 and the distance from the fusing roller/Up. Then adjust or replace it when there is any abnormality. 
     (Wiring diagram: Main body (1/4): 4-D) 
  5. Replace TH3. 
  6. Replace L3. 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  8. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.39  C-3803 

Code 
C-3803 
Classification 
Main body: Fusing low temperature abnormality 
Cause 
Thermistor/2 (TH2) low temperature abnormality (software). When a specified period of time has elapsed after the main power switch (SW1) 
becomes active, TH2 does not get to 55 degrees. 
Alternatively, even when it rotates for twice longer than the warm-up preparatory rotation, TH2 does not get to the control temperature. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Fusing temperature sensor/2 (TH2) 
  •  Fusing heater lamp/1 (L1) 
  •  Fusing heater lamp/2 (L2) 
  •  Printer control board (PRCB) 
  •  AC drive board (ACDB) 
Correction 
Be sure to change the software DIPSW3-1 in the service mode from 1 to 0 and deactivate and activate the sub power switch (SW2) of the main 
body after you fix the defective parts. 
Note  
  ▪  If DIPSW3-1 is changed to 0 before you repair the defective parts, it possibly cause a fire. 
Solution 
  1. Check the fusing heater lamp/1 and the fusing heater lamp/2 (L1 and L2), and repair them when there is any abnormality. (Wiring diagram: 
     Main body (1/4): 1-D, main body (1/4): 2-D) 
  2. Check the connector connection between PRCB and TH2, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between ACDB and L1, L2, and the wiring. Then repair it when there is any abnormality. 
  4. Check the installation condition of TH2 and the distance from the fusing roller/Up. Then adjust or replace it when there is any abnormality. 
     (Wiring diagram: Main body (1/4): 4-D) 
  5. Replace TH2. 
  6. Replace L1 and L2. 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  8. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.40  C-3901 

Code 
C-3901 
Classification 
Main body: Fusing sensor abnormality 
Cause 
Fusing temperature sensor/1 (TH1) high temperature abnormality (for a long time, software). At the fusing set condition and when the ADU 
handle release sensor (PS44) is active, TH1 detects a temperature of 230 degrees or more 60 times in succession in a period of 0.5 seconds. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Fusing temperature sensor/1 (TH1) 
  •  Fusing heater lamp/1 (L1) 
  •  Fusing heater lamp/2 (L2) 
  •  Printer control board (PRCB) 
  •  AC drive board (ACDB) 
Correction 
Be sure to change the software DIPSW3-1 in the service mode from 1 to 0 and deactivate and activate the sub power switch (SW2) of the main 
body after you fix the defective parts. 
Note  
  ▪  If DIPSW3-1 is changed to 0 before you repair the defective parts, it possibly cause a fire. 
Solution 
  1. Check the fusing heater lamp/1 and the fusing heater lamp/2 (L1 and L2), and repair them when there is any abnormality. (Wiring diagram: 
     Main body (1/4): 1-D, main body (1/4): 2-D) 
  2. Check the connector connection between PRCB and TH1, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between ACDB and L1, L2, and the wiring. Then repair it when there is any abnormality. 
  4. Check the installation condition of TH1 and the distance from the fusing roller/Up. Then adjust or replace it when there is any abnormality. 
     (Wiring diagram: Main body (1/4): 3-D) 

                                                                        K- 112 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  5. Replace TH1. 
  6. Replace L1 and L2. 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  8. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.41  C-3902 

Code 
C-3902 
Classification 
Main body: Fusing sensor abnormality 
Cause 
Fusing temperature sensor/3 (TH3) high temperature abnormality (for a long time, software). At the fusing set condition and when the ADU 
handle release sensor (PS44) is active, TH3 detects a temperature of 220 degrees or more 30 times in succession in a period of 1 second. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Fusing temperature sensor/3 (TH3) 
  •  Fusing heater lamp/3 (L3) 
  •  Printer control board (PRCB) 
  •  AC drive board (ACDB) 
Correction 
Be sure to change the software DIPSW3-1 in the service mode from 1 to 0 and deactivate and activate the sub power switch (SW2) of the main 
body after you fix the defective parts. 
Note  
  ▪  If DIPSW3-1 is changed to 0 before you repair the defective parts, it possibly cause a fire. 
Solution 
  1. Check the fusing heater lamp/3 (L3) and repair it when there is any abnormality. (Wiring diagram: Main body (1/4): 2-D) 
  2. Check the connector connection between PRCB and TH3, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between ACDB and L3, and the wiring. Then repair it when there is any abnormality. 
  4. Check the installation condition of TH3 and the distance from the fusing roller/Up. Then adjust or replace it when there is any abnormality. 
     (Wiring diagram: Main body (1/4): 4-D) 
  5. Replace TH3. 
  6. Replace L3. 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  8. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.42  C-3903 

Code 
C-3903 
Classification 
Main body: Fusing sensor abnormality 
Cause 
Fusing temperature sensor/1 (TH1): Low temperature abnormality 1 (Hardware). At the fusing set condition and when the ADU handle release 
sensor (PS44) is active, TH1 detects the fusing error detection signal 2. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Fusing temperature sensor/1 (TH1) 
  •  Fusing heater lamp/1 (L1) 
  •  Fusing heater lamp/2 (L2) 
  •  Printer control board (PRCB) 
  •  AC drive board (ACDB) 
Correction 
Be sure to change the software DIPSW3-1 in the service mode from 1 to 0 and deactivate and activate the sub power switch (SW2) of the main 
body after you fix the defective parts. 
Note  
  ▪  If DIPSW3-1 is changed to 0 before you repair the defective parts, it possibly cause a fire. 
Solution 
  1. Check the fusing heater lamp/1 and the fusing heater lamp/2 (L1 and L2), and repair them when there is any abnormality. (Wiring diagram: 
     Main body (1/4): 1-D, main body (1/4): 2-D) 
  2. Check the connector connection between PRCB and TH1, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between ACDB and L1, L2, and the wiring. Then repair it when there is any abnormality. 
  4. Check the installation condition of TH1 and the distance from the fusing roller/Up. Then adjust or replace it when there is any abnormality. 
     (Wiring diagram: Main body (1/4): 3-D) 
  5. Replace TH1. 
  6. Replace L1 and L2. 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  8. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                        K- 113 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.10.43  C-3904 

Code 
C-3904 
Classification 
Main body: Fusing sensor abnormality 
Cause 
Fusing temperature sensor/3 (TH3) low temperature abnormality (hardware). At the fusing set condition and when the ADU handle release 
sensor (PS44) is active, TH3 detects the fusing error detection 5. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Fusing temperature sensor/3 (TH3) 
  •  Fusing heater lamp/3 (L3) 
  •  Printer control board (PRCB) 
  •  AC drive board (ACDB) 
Correction 
Be sure to change the software DIPSW3-1 in the service mode from 1 to 0 and deactivate and activate the sub power switch (SW2) of the main 
body after you fix the defective parts. 
Note  
  ▪  If DIPSW3-1 is changed to 0 before you repair the defective parts, it possibly cause a fire. 
Solution 
  1. Check the fusing heater lamp/3 (L3) and repair it when there is any abnormality. (Wiring diagram: Main body (1/4): 2-D) 
  2. Check the connector connection between PRCB and TH3, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between ACDB and L3, and the wiring. Then repair it when there is any abnormality. 
  4. Check the installation condition of TH3 and the distance from the fusing roller/Up. Then adjust or replace it when there is any abnormality. 
     (Wiring diagram: Main body (1/4): 4-D) 
  5. Replace TH3. 
  6. Replace L3. 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  8. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.44  C-3905 

Code 
C-3905 
Classification 
Main body: Fusing sensor abnormality 
Cause 
Fusing temperature sensor/2 (TH2): Temperature abnormality (Hardware). At the fusing set condition and when the ADU handle release sensor 
(PS44) is active, TH2 detects the fusing error detection signal 3. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Fusing temperature sensor/2 (TH2) 
  •  Fusing heater lamp/1 (L1) 
  •  Fusing heater lamp/2 (L2) 
  •  Printer control board (PRCB) 
  •  AC drive board (ACDB) 
Correction 
Be sure to change the software DIPSW3-1 in the service mode from 1 to 0 and deactivate and activate the sub power switch (SW2) of the main 
body after you fix the defective parts. 
Note  
  ▪  If DIPSW3-1 is changed to 0 before you repair the defective parts, it possibly cause a fire. 
Solution 
  1. Check the fusing heater lamp/1 and the fusing heater lamp/2 (L1 and L2), and repair them when there is any abnormality. (Wiring diagram: 
     Main body (1/4): 1-D, main body (1/4): 2-D) 
  2. Check the connector connection between PRCB and TH2, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between ACDB and L1, L2, and the wiring. Then repair it when there is any abnormality. 
  4. Check the installation condition of TH2 and the distance from the fusing roller/Up. Then adjust or replace it when there is any abnormality. 
     (Wiring diagram: Main body (1/4): 4-D) 
  5. Replace TH2. 
  6. Replace L1 and L2. 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  8. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.10.45  C-3906 

Code 
C-3906 
Classification 
Main body: Fusing sensor abnormality 
Cause 
Fusing temperature sensor/4 (TH4): Temperature abnormality (Hardware). At the fusing set condition and when the ADU handle release sensor 
(PS44) is active, TH4 detects the fusing error detection 6. 

                                                                        K- 114 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Fusing temperature sensor/4 (TH4) 
  •  Fusing heater lamp/3 (L3) 
  •  Printer control board (PRCB) 
  •  AC drive board (ACDB) 
Correction 
Be sure to change the software DIPSW3-1 in the service mode from 1 to 0 and deactivate and activate the sub power switch (SW2) of the main 
body after you fix the defective parts. 
Note  
  ▪  If DIPSW3-1 is changed to 0 before you repair the defective parts, it possibly cause a fire. 
Solution 
  1. Check the fusing heater lamp/3 (L3) and repair it when there is any abnormality. (Wiring diagram: Main body (1/4): 2-D) 
  2. Check the connector connection between PRCB and TH4, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between ACDB and L3, and the wiring. Then repair it when there is any abnormality. 
  4. Check the installation condition of TH4 and the distance from the fusing roller/Up. Then adjust or replace it when there is any abnormality. 
     (Wiring diagram: Main body (1/4): 4-D) 
  5. Replace TH4. 
  6. Replace L3. 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
  8. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11  Solution 8 (C-4001_6000) 

2.11.1  C-4305 

Code 
C-4305 
Classification 
Main body: Fan abnormality 
Cause 
Charger suction fan (FM3) rotation abnormality + 24 V power abnormality. The abnormal status is detected twice in succession after FM3 
became active. At this time, an error detection signal (24 V cut off) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ACDB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.2  C-4307 

Code 
C-4307 
Classification 
Main body: Fan abnormality 
Cause 
Charger suction fan (FM3) rotation abnormality 1. 
Within a specified period of time after FM3 becomes active, FM3 EM error detection signal is detected twice in succession. However, the error 
detection signal (24 V cut off) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Charger suction fan (FM3) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and FM3, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM3 with the IO Check (42-92) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (2/4): 21-A) 
  3. Replace FM3. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                         K- 115 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.11.3  C-4314 

Code 
C-4314 
Classification 
Main body: Fan abnormality 
Cause 
Developing cooling fan (FM18) rotation abnormality + 24 V power abnormality. After FM18 becomes active or the speed changes, an 
abnormality status is detected twice in succession. At this time, an error detection signal (24 V cut off) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ACDB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.4  C-4316 

Code 
C-4316 
Classification 
Main body: Fan abnormality 
Cause 
Developing cooling fan (FM18) rotation abnormality. Within a specified period of time after FM18 becomes active or the speed changes, 
FM26EM error detection signal is detected twice in succession. However, the error detection signal (24 V cut off) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Developing cooling fan (FM18) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and FM18, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM18 with the IO Check (42-00) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (2/4): 18-A) 
  3. Replace FM18. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.5  C-4705 

Code 
C-4705 
Classification 
Main body: Printer time out 
Cause 
The expansion processing from the memory to the printer does not terminate within a specified period of time. Within a specified period of time, 
the output from the page memory to the printer does not terminate. Within a specified period of time, the PVV is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.6  C-4709 

Code 
C-4709 
Classification 
Main body: Data flow mode time out 
Cause 
The mode processing is not completed within a specified period of time. 

                                                                        K- 116 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.7  C-4713 

Code 
C-4713 
Classification 
Main body: Print page memory overflow 
Cause 
A page memory for printing cannot be secured. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.8  C-4725 

Code 
C-4725 
Classification 
Main body: Image processing abnormality 
Cause 
LPH board (LPHB) connection abnormality. Due to the disconnection of the LPHB connector, no connection is available with the overall control 
board. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  LPH board (LPHB) 
  •  Relay board/A (RBA) 
  •  Image processing board (IPB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection and the wiring between the LPHB and the RBA, and repair it when there is any abnormality. 
  2. Check the connector connection and the wiring between the IPB and the RBA, and repair it when there is any abnormality. 
  3. Check the LPHB, and repair or replace it when there is any abnormality. (Wiring diagram: Main body (3/4): 14-I) 
  4. Rewrite the firmware for image control. 
  5. Replace LPHB. (Connector layout drawing in board:  L.2.1.17 LPH board (LPHB)) 
  6. Replace RBA. (Connector layout drawing in board:  L.2.1.21 Relay board/A (RBA)) 
  7. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.9  C-4728 

Code 
C-4728 
Classification 
Main body: Image processing board 
Cause 
The image processing board (IPB) is not installed. 
The power supply is not supplied. The initialization abnormality. The device abnormality. The board is not installed. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
  •  DC power supply/1 (DCPS/1) 
Correction 

                                                                      K- 117 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Check the connector connection on the IPB, and repair it when there is any abnormality. 
  2. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
  3. Check the wiring between the IPB and the DCPS/1. Then repair or replace it when there is any abnormality. 
  4. Replace DCPS/1. (Connector layout drawing in board:  L.2.1.8 DC power supply/1 (DCPS/1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.10  C-4840 

Code 
C-4840 
Classification 
Main body: Abnormality of the continuous drive of the engine 
Cause 
The engine section has kept driving continuously for a specified period of time without producing the image or the process patch. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection and the wiring on PRCB, and repair it when there is any abnormality. 
  2. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.11  C-4850 

Code 
C-4850 
Classification 
Main body: Overall control abnormality 
Cause 
Segmentation abnormality. The overall control software accesses an illegal address. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Overall control board (OACB) 
  •  Image control firmware (I) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Check the connector connection and the wiring on OACB, and repair it when there is any abnormality. 
  2. Reinstall the image control firmware (I). 
  3. Replace OACB. (Refer to  G.3.2.28 Overall control board (OACB)) (Connector layout drawing in board:  L.2.1.1 Overall control board 
     (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.12  C-5010 

Code 
C-5010 
Classification 
Main body: Communication abnormality 
Cause 
During the communication check between the image processing board (IPB) and the printer control board (PRCB), either of followings is 
detected. ; Data header error. Data checksum error. Undefined command reception error. Error vector occurs in communication GA. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
Printer control board (PRCB) 
  •  Image processing board (IPB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection on IPB and PRCB, and repair it when there is any abnormality. 
  2. Check the wiring between the IPB and the PRCB. Then repair or replace it when there is any abnormality. 
  3. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 

                                                                       K- 118 
﻿bizhub PRO 1100                                                                               K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Faulty part isolation DIPSW 
Control during the detachment 

2.11.13  C-5101 

Code 
C-5101 
Classification 
Main body: Power abnormality 
Cause 
Fusing motor (M1) speed abnormality. Within a specified period of time after M1 becomes active or the speed changes, an error detection signal 
is detected twice in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Fusing motor (M1) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the fusing drive section, and repair it when there is any abnormality. 
  2. Check the connector connection between PRCB and M1, and the wiring. Then repair it when there is any abnormality. 
  3. Check the IO Check (41-01) and others of M1 and the coupling of the gear, and repair or replace it when there is any abnormality. (Wiring 
     diagram: Main body (3/4): 19-P) 
  4. Replace M1. 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.14  C-5102 

Code 
C-5102 
Classification 
Main body: Main relay operation abnormality 
Cause 
Operation abnormality of the main relay (RL1). 
The error detection signal (blowout of ICP for RL1) of the AC drive board (ACDB) is detected 5 times in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Main relay (RL1) 
  •  AC drive board (ACDB) 
  •  Printer control board (PRCB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection on the ACDB and the PRCB, and repair it when there is any abnormality. 
  2. Check the connector connection between the ACDB and the RL1, and repair it when there is any abnormality. 
  3. Check the wiring between the ACDB and the RL1. Then repair or replace it when there is any abnormality. 
  4. Check the wiring between the ACDB and the PRCB. Then repair or replace it when there is any abnormality. 
  5. Replace RL1. 
  6. Replace ACDB. (Connector layout drawing in board:  L.2.1.4 AC drive board (ACDB)) 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.15  C-5311 

Code 
C-5311 
Classification 
Main body: Fan abnormality 
Cause 
Suction cooling fan/2 (FM6) rotation abnormality + 24 V power abnormality. Within a specified period of time after FM6 becomes active, the 
FM6EM error detection signal is detected twice in succession. At this time, an error detection signal (24 V cut off) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ACDB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 

                                                                       K- 119 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.16  C-5313 

Code 
C-5313 
Classification 
Main body: Fan abnormality 
Cause 
Suction cooling fan/2 (FM6) rotation abnormality 1. Within a specified period of time after FM6 becomes active, the FM6EM error detection 
signal is detected twice in succession. At this time, an error detection signal (24 V cut off) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Suction cooling fan/2 (FM6) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and FM6, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM6 with the IO Check (42-88) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (2/4): 18-A) 
  3. Replace FM6. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.17  C-5317 

Code 
C-5317 
Classification 
Main body: Fan abnormality 
Cause 
Cooling fan/1 (FM1) rotation abnormality + 24 V power abnormality. Within a specified period of time after FM1 becomes active or the speed 
changes, the FM1EM error detection signal is detected twice in succession. At this time, an error detection signal (24 V cut off) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ACDB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.18  C-5318 

Code 
C-5318 
Classification 
Main body: Fan abnormality 
Cause 
Cooling fan/1 (FM1) rotation abnormality. When the printing starts, the EM signal of the FM1 becomes active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Cooling fan/1 (FM1) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between PRCB and FM1, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM1 with the IO Check (42-02) and others or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: 
     Main body (2/4): 13-A) 
  3. Replace FM1. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                        K- 120 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.11.19  C-5319 

Code 
C-5319 
Classification 
Main body: Fan abnormality 
Cause 
Cooling fan/1 (FM1) rotation abnormality 1. Within a specified period of time after FM1 becomes active or the speed changes, the FM1EM error 
detection signal is detected twice in succession. At this time, an error detection signal (24 V cut off) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Cooling fan/1 (FM1) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and FM1, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM1 with the IO Check (42-02) and others or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: 
     Main body (2/4): 13-A) 
  3. Replace FM1. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.20  C-5320 

Code 
C-5320 
Classification 
Main body: Fan abnormality 
Cause 
Cooling fan/2 (FM7) rotation abnormality + 24 V power abnormality. Within a specified period of time after FM7 becomes active, the FM7EM 
error detection signal is detected twice in succession. At this time, an error detection signal (24 V cut off) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ACDB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.21  C-5322 

Code 
C-5322 
Classification 
Main body: Fan abnormality 
Cause 
Cooling fan/2 (FM7) rotation abnormality 1. Within a specified period of time after FM7 becomes active, the FM7EM error detection signal is 
detected twice in succession. At this time, an error detection signal (24 V cut off) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Cooling fan/2 (FM7) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between PRCB and FM7, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM7 with the IO Check (42-90) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (2/4): 14-A) 
  3. Replace FM7. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.22  C-5329 

Code 

                                                                        K- 121 
﻿bizhub PRO 1100                                                                            K TROUBLESHOOTING > 2. MALFUNCTION CODE 

C-5329 
Classification 
Main body: Fan abnormality 
Cause 
ADU cooling fan/1 (FM14) abnormality. 
Within a specified period of time after FM14 becomes active, an EM error detection signal is detected twice in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  ADU cooling fan/1 (FM14) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between ADUDB1 and FM14, and the wiring. Then repair it when there is any abnormality. (Wiring 
     diagram: Main body (2/4): 8-I) 
  2. Rotate FM14 with the IO Check (42-30) or by hand, and repair or replace it when there is any abnormality. 
  3. Replace FM14. 
  4. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.23  C-5330 

Code 
C-5330 
Classification 
Main body: Fan abnormality 
Cause 
ADU cooling fan/3 (FM13) abnormality. Within a specified period of time after FM13 becomes active, an EM error detection signal is detected 
twice in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  ADU cooling fan/3 (FM13) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between ADUDB1 and FM13, and the wiring. Then repair it when there is any abnormality. (Wiring 
     diagram: Main body (2/4): 18-P) 
  2. Rotate FM13 with the IO Check (42-30) or by hand, and repair or replace it when there is any abnormality. 
  3. Replace FM13. 
  4. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.24  C-5331 

Code 
C-5331 
Classification 
Main body: Fan abnormality 
Cause 
Sensor cooling fan/1 (FM16) abnormality. Within a specified period of time after FM16 becomes active, an EM error detection signal is detected 
twice in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Sensor cooling fan/1 (FM16) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between ADUDB1 and FM16, and the wiring. Then repair it when there is any abnormality. (Wiring 
     diagram: Main body (2/4): 11-P) 
  2. Rotate FM16 with the IO Check (42-30) or by hand, and repair or replace it when there is any abnormality. 
  3. Replace FM16. 
  4. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                     K- 122 
﻿bizhub PRO 1100                                                                                  K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.11.25  C-5332 

Code 
C-5332 
Classification 
Main body: Fan abnormality 
Cause 
Sensor cooling fan/2 (FM40) abnormality. Within a specified period of time after FM40 becomes active, an EM error detection signal is detected 
twice in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Sensor cooling fan/2 (FM40) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between ADUDB1 and FM40, and the wiring. Then repair it when there is any abnormality. (Wiring 
     diagram: Main body (2/4): 10-P) 
  2. Rotate FM40 with the IO Check (42-30) or by hand, and repair or replace it when there is any abnormality. 
  3. Replace FM40. 
  4. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.26  C-5333 

Code 
C-5333 
Classification 
Main body: Fan abnormality 
Cause 
Registration cooling fan (FM17) abnormality. Within a specified period of time after FM17 becomes active, an EM error detection signal is 
detected twice in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Registration cooling fan (FM17) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between ADUDB1 and FM17, and the wiring. Then repair it when there is any abnormality. (Wiring 
     diagram: Main body (2/4): 18-I) 
  2. Rotate FM17 with the IO Check (42-30) or by hand, and repair or replace it when there is any abnormality. 
  3. Replace FM17. 
  4. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.27  C-5337 

Code 
C-5337 
Classification 
Main body: Fan abnormality 
Cause 
De-curler fan/1 (FM29) rotation abnormality. Within a specified period of time after the FM29 becomes active, the EM error detection signal of 
the FM29 is detected twice in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  De-curler fan/1 (FM29) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ADUDB1 and FM29, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM29 with the IO Check (42-30) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (2/4): 9-P) 
  3. Replace FM29. 
  4. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 

                                                                         K- 123 
﻿bizhub PRO 1100                                                                                  K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Control during the detachment 

2.11.28  C-5338 

Code 
C-5338 
Classification 
Main body: Fan abnormality 
Cause 
De-curler fan/2 (FM30) rotation abnormality. Within a specified period of time after FM30 becomes active, the EM error detection signal of FM30 
is detected twice in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  De-curler fan/2 (FM30) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ADUDB1 and FM30, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM30 with the IO Check (42-30) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (2/4): 9-P) 
  3. Replace FM30. 
  4. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.29  C-5339 

Code 
C-5339 
Classification 
Main body: Fan abnormality 
Cause 
Transfer belt cleaning fan (FM27) rotation abnormality. Within a specified period of time after FM27 becomes active or the speed changes, the 
EM error detection signal of FM27 is detected twice in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Transfer belt cleaning fan (FM27) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Check the connector connection between ADUDB1 and FM27, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM27 with the IO Check (42-10) and others or by hand, and repair or replace it when there is any abnormality. 
  3. Replace FM27. 
  4. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.30  C-5340 

Code 
C-5340 
Classification 
Main body: Fan abnormality 
Cause 
ADU cooling fan/2 (FM15) rotation abnormality. Within a specified period of time after FM15 becomes active, the EM error detection signal is 
detected twice in succession. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  ADU cooling fan/2 (FM15) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between ADUDB1 and FM15, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM15 with the IO Check (42-31) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (2/4): 11-P) 
  3. Replace FM15. 
  4. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 

                                                                         K- 124 
﻿bizhub PRO 1100                                                                                   K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Faulty part isolation DIPSW 
Control during the detachment 

2.11.31  C-5341 

Code 
C-5341 
Classification 
Main body: Fan abnormality 
Cause 
Belt cooling fan (FM37) rotation abnormality. Within a specified period of time after FM37 becomes active, the EM error detection signal is 
detected twice in succession. 
Measures to take when an alert occurs 
The main body stops immediately and deactivates the main relay (RY1). 
Estimated abnormal parts 
  •  Belt cooling fan (FM37) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between ADUDB1 and FM37, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM37 with the IO Check (42-31) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (2/4): 19-I) 
  3. Replace FM37. 
  4. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.32  C-5342 

Code 
C-5342 
Classification 
Main body: Fan abnormality 
Cause 
Reverse cooling fan (FM38) rotation abnormality. Within a specified period of time after FM38 becomes active, the EM error detection signal is 
detected twice in succession. 
Measures to take when an alert occurs 
The main body stops immediately and deactivates the main relay (RY1). 
Estimated abnormal parts 
  •  Reverse cooling fan (FM38) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between ADUDB1 and FM38, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM38 with the IO Check (42-31) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (2/4): 9-I) 
  3. Replace FM38. 
  4. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.33  C-5350 

Code 
C-5350 
Classification 
Main body: Fan abnormality 
Cause 
Rear exhaust fan/2 (FM5) rotation abnormality + 24 V power abnormality. Within a specified period of time after FM5 becomes active, the 
FM5EM error detection signal is detected twice in succession. At this time, an error detection signal (24 V cut off) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between ACDB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                          K- 125 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.11.34  C-5351 

Code 
C-5351 
Classification 
Main body: Fan abnormality 
Cause 
Rear exhaust fan/2 (FM5) rotation abnormality 1. Within a specified period of time after FM5 becomes active, the FM5EM error detection signal 
is detected twice in succession. At this time, an error detection signal (24 V cut off) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Rear exhaust fan/2 (FM5) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between PRCB and FM5, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM5 with the IO Check (42-89) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (2/4): 13-A) 
  3. Replace FM5. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.35  C-5352 

Code 
C-5352 
Classification 
Main body: Fan abnormality 
Cause 
Suction cooling fan/1 (FM2) rotation abnormality + 24 V power abnormality. Within a specified period of time after FM2 becomes active or the 
speed changes, the FM2EM error detection signal is detected twice in succession. At this time, an error detection signal (24 V cut off) is also 
detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between ACDB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.36  C-5353 

Code 
C-5353 
Classification 
Main body: Fan abnormality 
Cause 
Suction cooling fan/1 (FM2) rotation abnormality 1. Within a specified period of time after FM2 becomes active or the speed changes, the 
FM2EM error detection signal is detected twice in succession. At this time, an error detection signal (24 V cut off) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Suction cooling fan/1 (FM2) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between PRCB and FM2, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM2 with the IO Check (42-12) and others or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: 
     Main body (2/4): 20-A) 
  3. Replace FM2. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                        K- 126 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.11.37  C-5354 

Code 
C-5354 
Classification 
Main body: Fan abnormality 
Cause 
Suction cooling fan/1 (FM2) rotation abnormality. When the printing starts, the EM signal of the FM2 becomes active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Suction cooling fan/1 (FM2) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between PRCB and FM2, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM2 with the IO Check (42-12) and others or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: 
     Main body (2/4): 20-A) 
  3. Replace FM2. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.38  C-5355 

Code 
C-5355 
Classification 
Main body: Fan abnormality 
Cause 
Waste toner box fan (FM35) rotation abnormality + 24 V power abnormality. Within a specified period of time after FM5 becomes active, the 
FM35EM error detection signal is detected twice in succession. At this time, an error detection signal (24 V cut off) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Waste toner box fan (FM35) 
  •  DC power supply/2 (DCPS/2) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between ACDB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.39  C-5356 

Code 
C-5356 
Classification 
Main body: Fan abnormality 
Cause 
Waste toner box fan (FM35) rotation abnormality 1. Within a specified period of time after FM35 becomes active, the FM35EM error detection 
signal is detected twice in succession. At this time, an error detection signal (24 V cut off) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Waste toner box fan (FM35) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between PRCB and FM35, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM35 with the IO Check (42-96) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body 
     (3/4): 20-B) 
  3. Replace FM35. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.40  C-5357 

Code 

                                                                        K- 127 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

C-5357 
Classification 
Main body: Fan abnormality 
Cause 
Paper exit cooling fan/Up (FM11) rotation abnormality + 24 V power abnormality Within a specified period of time after FM11 becomes active, 
the FM11EM error detection signal is detected twice in succession. At this time, an error detection signal (24 V cut off) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between ACDB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.41  C-5358 

Code 
C-5358 
Classification 
Main body: Fan abnormality 
Cause 
Paper exit cooling fan/Up (FM11) rotation abnormality. Within a specified period of time after FM11 becomes active, the FM11EM error 
detection signal is detected twice in succession. At this time, an error detection signal (24 V cut off) is not detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper exit cooling fan/Up (FM11) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between PRCB and FM11, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM11 with the IO Check (42-14) and others or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: 
     Main body (2/4): 15-A) 
  3. Replace FM11. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.42  C-5359 

Code 
C-5359 
Classification 
Main body: Fan abnormality 
Cause 
Rear exhaust fan/1 (FM4) rotation abnormality + 24 V power abnormality. Within a specified period of time after FM4 becomes active, the 
FM4EM error detection signal is detected twice in succession. At this time, an error detection signal (24 V cut off) is also detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply/2 (DCPS/2) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between ACDB and DCPS/2, and the wiring. Then repair it when there is any abnormality. 
  2. Replace DCPS/2. (Connector layout drawing in board:  L.2.1.9 DC power supply/2 (DCPS/2)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.43  C-5360 

Code 
C-5360 
Classification 
Main body: Fan abnormality 
Cause 
Rear exhaust fan/1 (FM4) rotation abnormality 1. Within a specified period of time after FM4 becomes active, the FM4EM error detection signal 
is detected twice in succession. At this time, an error detection signal (24 V cut off) is not detected. 

                                                                        K- 128 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Rear exhaust fan/1 (FM4) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between PRCB and FM4, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM4 with the IO Check (42-93) or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: 14-A) 
  3. Replace FM4. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.44  C-5362 

Code 
C-5362 
Classification 
Main body: Fan abnormality 
Cause 
Paper exit cooling fan/Up (FM11) rotation abnormality. When the printing starts, the EM signal of the FM11 becomes active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper exit cooling fan/Up (FM11) 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between PRCB and FM11, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM11 with the IO Check (42-14) and others or by hand. Then repair or replace it when there is any abnormality. (Wiring diagram: 
     Main body (2/4): 15-A) 
  3. Replace FM11. 
  4. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.45  C-5401 

Code 
C-5401 
Classification 
Main body: Fan abnormality 
Cause 
Monitor the fan lock detection of the CPU cooling fan (FM39), and the abnormality is detected. After it is monitored again, the error is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  CPU cooling fan (FM39) 
  •  Overall control board (OACB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between OACB and FM39, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM39 by hand, and repair or replace it when there is any abnormality. (Wiring diagram: Main body (3/4): 4-K) 
  3. Replace FM39. 
  4. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.46  C-5403 

Code 
C-5403 
Classification 
Main body: Fan abnormality 
Cause 
While the system box exhaust fan (FM43) is active, the fan error detection signal is detected for a specified period of time in succession. Though 
the machine retries power feed several times, an error detection signal is detected continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 

                                                                      K- 129 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Estimated abnormal parts 
  •  System box exhaust fan (FM43) 
  •  Overall control board (OACB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between OACB and FM43, and the wiring. Then repair it when there is any abnormality. 
  2. Rotate FM43 by hand, and repair or replace it when there is any abnormality. (Wiring diagram: Main body (1/4): 20-P) 
  3. Replace FM43. 
  4. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.11.47  C-5404 

Code 
C-5404 
Classification 
Main body: Fan abnormality 
Cause 
While the DC power supply 1 cooling fan (FM41) and DC power supply 2 cooling fan (FM42) are active, the fan error detection signal is detected 
for a specified period of time in succession. Though the machine retries power feed several times, an error detection signal is detected 
continuously. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DC power supply 1 cooling fan (FM41) 
  •  DC power supply 2 cooling fan (FM42) 
  •  DC power supply/1 (DCPS/1) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Rotate the fan by the IO Check (42-16) and others of FM41, IO Check (42-18) and others of FM42 or manually, and repair or replace it 
     when there is any abnormality. (Wiring diagram: Main body (1/4): 18-L, Main body (1/4): 22-D) 
  2. Check the connector connection between DCPS/1 and FM41, FM42, and the wiring. Then repair it when there is any abnormality. 
  3. Replace FM41. 
  4. Replace FM42. 
  5. Replace DCPS/1. (Connector layout drawing in board:  L.2.1.8 DC power supply/1 (DCPS/1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.12  Solution 9 (C-6001_C-9404) 

2.12.1  C-6102 

Code 
C-6102 
Classification 
Main body: Scanner abnormality 
Cause 
Within a specified period of time after the scanner motor (M27) becomes active during the home position search operation, the scanner home 
sensor (PS51) does not become inactive. Alternatively, on home position search, within a specified period of time after M27 becomes active, 
PS51 does not become active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
Image processing board (IPB) 
  •  Scanner drive board (SCDB) 
  •  Scanner motor (M27) 
  •  Scanner home sensor (PS51) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the drive section of the scanner (the wire, the pulley, the gear and the belt), and repair or replace it when there is any abnormality. 
  2. Move to [01 Machine Adjustment] - [02 Scan Adjustment] - [06 Sensor Check], and check the condition of the sensor, then repair or replace 
     it when there is any abnormality. 
  3. Check M27 and PS51 operation. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body (1/4): 10-F, Main 
     body (1/4): 10-E) 
  4. Check the connector connection between SCDB and M27, PS51, and the wiring. Then repair it when there is any abnormality. 
  5. Check the connector connection between SCDB and IPB, and the wiring. Then repair it when there is any abnormality. 
  6. Replace PS51. 
  7. Replace M27. 
  8. Replace SCDB. (Connector layout drawing in board:  L.2.1.5 Scanner drive board (SCDB)) 
  9. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 

                                                                      K- 130 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.2  C-6103 

Code 
C-6103 
Classification 
Main body: Scanner abnormality 
Cause 
The scanner home sensor (PS51) becomes active during the period from the execution of the preparative scan command and the scan 
preparation command until the execution of the scan reference position move command. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
  •  Scanner drive board (SCDB) 
  •  Scanner motor (M27) 
  •  Scanner home sensor (PS51) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the drive section of the scanner (the wire, the pulley, the gear and the belt), and repair or replace it when there is any abnormality. 
  2. Move to [01 Machine Adjustment] - [02 Scan Adjustment] - [06 Sensor Check], and check the condition of the sensor, then repair or replace 
     it when there is any abnormality. 
  3. Check M27 and PS51 operation. Then repair or replace it when there is any abnormality. (Wiring diagram: Main body (1/4): 10-E, Main 
     body (1/4): 10-F) 
  4. Check the connector connection between SCDB and M27, PS51, and the wiring. Then repair it when there is any abnormality. 
  5. Check the connector connection between SCDB and IPB, and the wiring. Then repair it when there is any abnormality. 
  6. Replace PS51. 
  7. Replace M27. 
  8. Replace SCDB. (Connector layout drawing in board:  L.2.1.5 Scanner drive board (SCDB)) 
  9. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.3  C-6104 

Code 
C-6104 
Classification 
Main body: Communication abnormality 
Cause 
The scanner control signal of the image processing board (IPB) cannot be detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW 45-0 is configured to 1. 
Control during the detachment 
The scanner and DF are not available. 

2.12.4  C-6105 

Code 
C-6105 
Classification 
Main body: Communication abnormality 
Cause 
The initial communication with the scanner is not completed within a specified period of time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 

                                                                      K- 131 
﻿bizhub PRO 1100                                                                             K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  1. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.5  C-6114 

Code 
C-6114 
Classification 
Main body: Scanner abnormality 
Cause 
The paper passes from the DF and during the initial move operation from the home position. In addition, within a specified period of time after 
the back side cleaning motor (M7) becomes active, the back side cleaning home sensor (PS9) does not become inactive. In the other case, on 
home position search, within a specified period of time after M7 becomes active, PS9 does not become active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB), DF power supply board (DFPU), back side cleaning motor (M7), back side cleaning home sensor (PS9) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection of M5 and PS9, and the wiring. Then repair it when there is any abnormality. 
  2. Replace PS7. 
  3. Replace M7. 
  4. Replace DFPU. (Connector layout drawing in board:  L.2.2.1 (1) DF-702) 
  5. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.6  C-6115 

Code 
C-6115 
Classification 
Main body: Scanner abnormality 
Cause 
When the paper passes from the DF and except during the initial move operation from the home position, within a specified period of time after 
the back side cleaning motor (M7) becomes active, the back side cleaning home sensor (PS9) does not become inactive. In the other case, on 
home position search, within a specified period of time after the M7 becomes active, the PS9 does not become active. In the other case, on 
home position search, within a specified period of time after M7 becomes active, PS9 does not become active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB), DF power supply board (DFPU), back side cleaning motor (M7), back side cleaning home sensor (PS9) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection of M7 and PS9, and the wiring. Then repair it when there is any abnormality. 
  2. Replace PS7. 
  3. Replace M7. 
  4. Replace DFPU. (Connector layout drawing in board:  L.2.2.1 (1) DF-702) 
  5. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.7  C-6702 

Code 
C-6702 
Classification 
Scanner: Scanner FIFO abnormality 
Cause 
Scanner related FIFO abnormality of reading devices. On software bugs, this abnormality occurs when SVV occurs before the reading 
preparation is completed. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 

                                                                     K- 132 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.12.8  C-6703 

Code 
C-6703 
Classification 
Scanner: SVV long abnormality 
Cause 
Within a specified period of time after the negation of SVV, the compression of images that are read in and their development into the page 
memory are not terminated. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Check the connector connection on IPB, and repair it when there is any abnormality. 
  2. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.9  C-6704 

Code 
C-6704 
Classification 
Scanner: Scanner time out 
Cause 
During the image read, the compression processing from the scanner into the memory does not terminate within a specified period of time. The 
development from the scanner into the page memory does not terminate within a specified period of time. The SVV is not detected within a 
specified period of time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Check the connector connection on IPB, and repair it when there is any abnormality. 
  2. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.10  C-6706 

Code 
C-6706 
Classification 
Scanner: SVV off abnormality 
Cause 
During the image read, SVV does not become inactive within a specified period of time and the preparation for scanning the next page cannot 
be started. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Check the connector connection on IPB, and repair it when there is any abnormality. 
  2. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 

                                                                        K- 133 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.11  C-6720 

Code 
C-6720 
Classification 
Print: The centering adjustment is too late 
Cause 
The printing operation starts before the centering adjustment is terminated. 
When it occurs during the OHP sheet passage, refer to the troubleshooting guide 
R.1.40 Specific paper feeding conditions (Label, OHP). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Centering sensor (PS4) 
  •  Paper leading edge sensor (PS41) 
  •  ADU drive board/1 (ADUDB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between ADUDB1 and PS4, and the wiring. Then repair it when there is any abnormality. 
  2. Check the connector connection between ADUDB1 and PS41, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between ADUDB1 and PRCB, and the wiring. Then repair it when there is any abnormality. 
  4. Check the connector connection and the wiring between the IPB and the PRCB, and repair it when there is any abnormality. 
  5. Replace PS4. 
  6. Replace PS41. 
  7. Replace ADUDB1. (Connector layout drawing in board:  L.2.1.6 ADU drive board/1 (ADUDB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.12.12  C-6725 

Code 
C-6725 
Classification 
Scanner: Reading process sequence abnormality 
Cause 
The report from IRC is not notified within a specified period of time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.13  C-6751 

Code 
C-6751 
Classification 
Main Body: CCD clamp gain adjustment abnormality 
Cause 
When the CCD clamp is adjusted, the adjustment value becomes 0 or 255. Alternatively, when the CCD gain is adjusted, the peak value of the 
output data becomes 64 or less. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
  •  Estimated abnormal parts 
  •  Image processing board (IPB) 
  •  Scanner drive board (SCDB) 
CCD board (CCDB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between SCDB and  IPB, and the wiring. Then repair it when there is any abnormality. 
  2. Check the cause of the external light, and repair it when there is any abnormality. 
  3. Clean the lens, the mirror, the CCD surface and the shading plate when there is any dirt. 

                                                                        K- 134 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  4. Check the condition of the mirror installation on the scanner, and repair it or replace the scanner when there is any abnormality. 
  5. Replace CCDB. (Connector layout drawing in board:  L.2.1.16 CCD board (CCDB)) 
  6. Replace SCDB. (Connector layout drawing in board:  L.2.1.5 Scanner drive board (SCDB)) 
  7. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.14  C-6752 

Code 
C-6752 
Classification 
Main body: IR image processing ASIC clock input malfunction trouble (surface) 
Cause 
During the scanning of the surface, the image processing ASIC register is read and written, but the write value and the read value do not match. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.15  C-6753 

Code 
C-6753 
Classification 
Main body: IR image processing ASIC clock input malfunction trouble (back side) 
Cause 
During the scanning of the back side, the image processing ASIC register is read and written, but the write value and the read value do not 
match. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.16  C-6754 

Code 
C-6754 
Classification 
Main body: CIS clamp adjustment abnormality 
Cause 
After the gain adjustment at the startup is executed, the clamp adjustment value of one of each color and each channel of RGB is 0 or 255. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
  •  CIS module (CIS) 
  •  DF power supply board (DFPU) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection and the wiring between CIS and  IPB, and repair it when there is any abnormality. 
  2. Replace CIS. 
  3. Replace DFPU. (Connector layout drawing in board:  L.2.2.1 (1) DF-702) 
  4. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 

                                                                      K- 135 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

The scanner and DF are not available. 

2.12.17  C-6755 

Code 
C-6755 
Classification 
Min body: CIS gain adjustment abnormality 
Cause 
After the gain adjustment at the startup is executed, one of each color and each channel of RGB is included in the gain adjustment value. In this 
condition, the peak value of the output data is 64 or less. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
  •  CIS module (CIS) 
  •  DF power supply board (DFPU) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection and the wiring between CIS and  IPB, and repair it when there is any abnormality. 
  2. Replace CIS. 
  3. Replace DFPU. (Connector layout drawing in board:  L.2.2.1 (1) DF-702) 
  4. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.18  C-6756 

Code 
C-6756 
Classification 
Main body: CCD power pressure abnormality 
Cause 
Within a specified period of time at the startup, the CCD power ON is not checked. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
  •  CCD board (CCDB) 
  •  Scanner drive board (SCDB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection and the wiring between CCDB and  IPB, and repair it when there is any abnormality. 
  2. Replace CCDB. (Connector layout drawing in board:  L.2.1.16 CCD board (CCDB)) 
  3. Replace SCDB. (Connector layout drawing in board:  L.2.1.5 Scanner drive board (SCDB)) 
  4. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.19  C-6801 

Code 
C-6801 
Classification 
Operation section: Initial communication unreached error 
Cause 
After the communication from the overall control board (OACB) to the operation board/1 (OB1), there is no response within a specified period of 
time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Operation board/1 (OB1) 
  •  Overall control board (OACB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Check the connector connection and the wiring between the operation panel and the main body, and repair it when there is any 
     abnormality. 
  2. Check the connector connection and the wiring between OACB and OB1, and repair it when there is any abnormality. 

                                                                       K- 136 
﻿bizhub PRO 1100                                                                            K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  3. Replace OB1. (Connector layout drawing in board:  L.2.1.13 Operation board/1 (OB1)) 
  4. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.12.20  C-6F01 

Code 
C-6F01 
Classification 
Main body: IR sequence abnormality 1 
Cause 
When DF reads the original, an error occurs with the original conveyance control and the interval between the original conveyance becomes 
shorter than the prescribed value. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
  •  Scanner drive board (SCDB) 
  •  DF control board (DFCB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between DFCB and SCDB, and the wiring. Then repair it when there is any abnormality. 
  2. Check the connector connection between SCDB and IPB, and the wiring. Then repair it when there is any abnormality. 
  3. Replace DFCB. (Connector layout drawing in board:  L.2.2.1 (1) DF-702) 
  4. Replace SCDB. (Connector layout drawing in board:  L.2.1.5 Scanner drive board (SCDB)) 
  5. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.21  C-7001 

Code 
C-7001 
Classification 
Main body: Communication abnormality 
Cause 
Communication error. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check the connector connection and the wiring between the main body and the post processing machine, and repair it when there is any 
     abnormality. 
  2. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.12.22  C-8001 

Code 
C-8001 
Classification 
DF: DF communication error 
Cause 
When the receive from the DF control is completed, the communication GA detects an error vector (parity, framing, overrun, or brake detection). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
  •  DF control board (DFCB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection between DFCB and  IPB, and the wiring. Then repair it when there is any abnormality. 
  2. Replace DFCB. (Connector layout drawing in board:  L.2.2.1 (1) DF-702) 
  3. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 

                                                                     K- 137 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.23  C-8002 

Code 
C-8002 
Classification 
Main body: Communication abnormality 
Cause 
When the receive from the scanner control is completed, the communication GA detects an error vector (parity, framing, overrun, or brake 
detection). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.24  C-8101 

Code 
C-8101 
Classification 
DF: Reading roller pressure release motor abnormality 
Cause 
During the fusing operation, the read roller home sensor (PS8) does not become inactive from active. Alternatively, during the release operation, 
PS8 does not become active from inactive. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Read roller home sensor (PS8) 
  •  Reading roller pressure release motor (M6) 
  •  DF control board (DFCB) 
  •  DF power supply board (DFPU) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the conveyance section, and repair it when there is any abnormality. 
  2. Check the connector connection between M6, PS8, and DFCB, and the wiring. Then repair it when there is any abnormality. 
  3. Check the coupling of the gear of M6, and repair it when there is any abnormality. (Wiring diagram: DF: 10-C) 
  4. Check the operation of PS8, and repair it when there is any abnormality. (Wiring diagram: DF: 10-C) 
  5. Replace PS8. 
  6. Replace M6. 
  7. Replace DFCB. (Connector layout drawing in board:  L.2.2.1 (1) DF-702) 
  8. Replace DFPU. 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.25  C-8103 

Code 
C-8103 
Classification 
DF: Lift-up motor abnormality (Up) 
Cause 
Within a specified period of time after the lift-up motor (M5) rotates forward, the lift-up upper limit sensor (PS2) does not become active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Lift-up upper limit sensor (PS2) 
  •  Lift-up motor (M5) 
  •  DF control board (DFCB) 
  •  DF power supply board (DFPU) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  

                                                                       K- 138 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Solution 
  1. Check the original feed section, and repair it when there is any abnormality. 
  2. Check the connector connection between M5, PS2, and DFCB, and the wiring. Then repair it when there is any abnormality. 
  3. Check the coupling of the gear of M5, and repair it when there is any abnormality. (Wiring diagram: DF: 13-C) 
  4. Check the operation of PS2, and repair it when there is any abnormality. (Wiring diagram: DF: 10-C) 
  5. Replace PS2. 
  6. Replace M5. 
  7. Replace DFCB. (Connector layout drawing in board:  L.2.2.1 (1) DF-702) 
  8. Replace DFPU. 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.26  C-8106 

Code 
C-8106 
Classification 
DF: Lift-up motor abnormality (Down) 
Cause 
Within a specified period of time after the lift-up motor (M5) rotates reversely, the lift-up lower limit sensor (PS3) does not become active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Lift-up lower limit sensor (PS3) 
  •  Lift-up motor (M5) 
  •  DF control board (DFCB) 
  •  DF power supply board (DFPU) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the original feed section, and repair it when there is any abnormality. 
  2. Check the connector connection between M5, PS3, and DFCB, and the wiring. Then repair it when there is any abnormality. 
  3. Check the coupling of the gear of M5, and repair it when there is any abnormality. (Wiring diagram: DF: 13-C) 
  4. Check the operation of PS3, and repair it when there is any abnormality. (Wiring diagram: DF: 12-C) 
  5. Replace PS3. 
  6. Replace M5. 
  7. Replace DFCB. (Connector layout drawing in board:  L.2.2.1 (1) DF-702) 
  8. Replace DFPU. 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.27  C-8107 

Code 
C-8107 
Classification 
DF: Front side cleaning motor abnormality 
Cause 
Within a specified period of time after the front side cleaning motor (M8) becomes active, the front side cleaning home sensor (PS18) does not 
become active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Front side cleaning home sensor (PS18) 
  •  Front side cleaning motor (M8) 
  •  DF control board (DFCB) 
  •  DF power supply board (DFPU) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the conveyance section, and repair it when there is any abnormality. 
  2. Check the connector connection between M8, PS18, and DFCB, and the wiring. Then repair it when there is any abnormality. 
  3. Check the coupling of the gear of M8, and repair it when there is any abnormality. (Wiring diagram: DF: 7-C) 
  4. Check the operation of PS18, and repair it when there is any abnormality. (Wiring diagram: DF: 5-C) 
  5. Replace PS18. 
  6. Replace M8. 
  7. Replace DFCB. (Connector layout drawing in board:  L.2.2.1 (1) DF-702) 
  8. Replace DFPU. 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

                                                                       K- 139 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.12.28  C-8302 

Code 
C-8302 
Classification 
DF: Cooling fan abnormality 
Cause 
When the paper feed motor cooling fan (FM1) is rotating, the lock signal detects the activation continuously for a specified period of time. 
Alternatively, while the operation of the FM1 stops, the lock signal detects the FM1 deactivation continuously for a specified period of time. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Paper feed motor cooling fan (FM1) 
  •  DF control board (DFCB) 
  •  DF power supply board (DFPU) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Rotate FM1 by hand, and repair it when there is any abnormality. (Wiring diagram: DF: 4-C) 
  2. Check the connector connection between FM1 and DFCB, SCDB, and the wiring. Then repair it when there is any abnormality. 
  3. Replace FM1. 
  4. Replace DFCB. (Connector layout drawing in board:  L.2.2.1 (1) DF-702) 
  5. Replace DFPU. 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.29  C-8401 

Code 
C-8401 
Classification 
DF: EEPROM malfunction 
Cause 
EEPROM cannot be accessed normally. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  DF control board (DFCB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection and the wiring of DFCB, and repair it when there is any abnormality. 
  2. Reinstalling the DFCB firmware. 
  3. Replace DFCB. (Connector layout drawing in board:  L.2.2.1 (1) DF-702) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.30  C-9401 

Code 
C-9401 
Classification 
Main body: Exposure lamp lighting abnormality or scanner connector disconnected 
Cause 
When the gain of the CCD sensor is adjusted, it is detected that the output of the CCD sensor is less than standard value. Alternatively, the 
scanner connector is disconnected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
  •  CCD board (CCDB) 
  •  Exposure unit 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection and the wiring between CCDB and  IPB, and repair it when there is any abnormality. 
  2. Replace the exposure unit. 
  3. Replace CCDB. (Connector layout drawing in board:  L.2.1.16 CCD board (CCDB)) 
  4. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 

                                                                      K- 140 
﻿bizhub PRO 1100                                                                             K TROUBLESHOOTING > 2. MALFUNCTION CODE 

The scanner and DF are not available. 

2.12.31  C-9402 

Code 
C-9402 
Classification 
Main body: Exposure lamp abnormal lighting 
Cause 
After the scanning job completes: When the scanner is at the standby position, it is detected that the average of the output value from the CCD 
sensor exceeds the standard value. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
  •  CCD board (CCDB) 
  •  Exposure unit 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection and the wiring between CCDB and  IPB, and repair it when there is any abnormality. 
  2. Replace the exposure unit. 
  3. Replace CCDB. (Connector layout drawing in board:  L.2.1.16 CCD board (CCDB)) 
  4. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.32  C-9403 

Code 
C-9403 
Classification 
Main body: Exposure lamp lighting abnormality or scanner connector disconnected 
Cause 
When paper is passed from DF: It is detected that the CIS output is the standard value or less in the CIS gain adjustment. Alternatively, the 
scanner connector is disconnected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
  •  CIS module (CIS) 
  •  DF power supply board (DFPU) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection and the wiring between CIS and  IPB, and repair it when there is any abnormality. 
  2. Replace CIS. 
  3. Replace DFPU. 
  4. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.12.33  C-9404 

Code 
C-9404 
Classification 
Main body: Exposure lamp abnormal lighting 
Cause 
When paper is passed from the DF: When the scan job is completed, it is detected that the average of the output value from the CIS sensor 
exceeds the standard value at the scanner standby position. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image processing board (IPB) 
  •  CIS module (CIS) 
  •  DF power supply board (DFPU) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connector connection and the wiring between CIS and  IPB, and repair it when there is any abnormality. 
  2. Replace CIS. 

                                                                     K- 141 
﻿bizhub PRO 1100                                                                               K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  3. Replace DFPU. 
  4. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
Faulty part isolation DIPSW 
DIPSW45-0 
Control during the detachment 
The scanner and DF are not available. 

2.13  Solution 10 (C-C101_C-C124) 

2.13.1  C-C101 

Code 
C-C101 
Classification 
Main body: Communication abnormality 
Cause 
Within a specified period of time after the main body becomes active, the printer control board (PRCB) does not respond. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB) 
  •  Image processing board (IPB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connection on PRCB and  IPB, and repair it when there is any abnormality. 
  3. Check the wiring between PRCB and IPB. Then repair or replace it when there is any abnormality. 
  4. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.13.2  C-C102 

Code 
C-C102 
Classification 
Main body: Communication abnormality 
Cause 
When the receiving from the printer control board (PRCB) is completed, either of followings is detected. ; Data checksum error. Error vector 
occurs in communication GA. 
In the other case: Within a specified period of time after the sending starts, the sending is not completed. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer control board (PRCB) 
  •  Image processing board (IPB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel.  
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the connector connection on PRCB and  IPB, and repair it when there is any abnormality. 
  3. Check the connector connection on PRCB and IPB, and repair it when there is any abnormality. 
  4. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
  5. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.13.3  C-C104 

Code 
C-C104 
Classification 
Main body: Printer system firmware (C) unwritten 
Cause 
When the sub power switch (SW2) becomes active, an unwritten area is detected in the printer system firmware (C). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer system firmware (C) 
  •  Printer control board (PRCB) 
  •  Image processing board (IPB) 

                                                                       K- 142 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Reinstall the printer system firmware (C). 
  2. Check the connector connection on PRCB and  IPB, and repair it when there is any abnormality. 
  3. Check the wiring between PRCB and IPB. Then repair or replace it when there is any abnormality. 
  4. Check the I/F connector connection for the ISW on the OACB, and repair it when there is any abnormality. 
  5. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
  6. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.13.4  C-C109 

Code 
C-C109 
Classification 
FS or OT: FS-532 or OT-510 ISW unwritten 
Cause 
When the sub power switch (SW2) becomes active, the unwritten area is detected in the stapler firmware (N). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  FS-532: Stapler firmware (N) 
  •  OT-510: Stacker firmware (O) 
  •  FNS control board (FNSCB) 
  •  Printer control board (PRCB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. FS-532: Reinstall the stapler firmware (N). 
  2. OT-510: Reinstall the stacker firmware (O). 
  3. Check the connector connection between the main body and each option, and the wiring. Then repair it when there is any abnormality. 
  4. FS-532: Check the connector connection between FNSCB and PRCB, and the wiring. Then repair it when there is any abnormality. 
     OT-510: Check the connector connection between FNSCB and PRCB, and the wiring. Then repair it when there is any abnormality. 
  5. Check the I/F connector connection and the wiring for ISW on OACB, and repair it when there is any abnormality. 
  6. FS-532: Replace FNSCB. (Connector layout drawing in board:  L.2.10.1 FNS control board) 
     OT-510: Replace FNSCB. (Connector layout drawing in board:  L.2.6.1 FNS control board) 
  7. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.13.5  C-C117 

Code 
C-C117 
Classification 
GP: GP-501 ISW unwritten 
Causes 
When the sub power switch (SW2) becomes active, ISW unwritten area is detected in the Multi Puncher firmware (G). 
Resulting operation 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Multi Puncher firmware (G) 
  •  Punch Controller PCB 
  •  Printer control board (PRCB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the panel. 
Procedure 
  1. Reinstall the Multi Puncher firmware (G). 
  2. Check the connector connection and the wiring between the main body and each option, and repair it when there is any abnormality. 
  3. Check the connector connection and the wiring between punch controller PCB and PRCB, and repair it when there is any abnormality. 
  4. Check the I/F connector connection and the wiring for ISW on OACB, and repair it when there is any abnormality. 
  5. Replace the punch controller PCB. (Connector layout drawing in board:  L.2.16.1 Punch Controller PCB) 
  6. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
DipSW 
Control during separation 

2.13.6  C-C120 

Code 
C-C120 
Classification 
Main body: Printer control firmware abnormality 
Cause 
Printer system firmware (C) abnormality. 

                                                                      K- 143 
﻿bizhub PRO 1100                                                                                K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Printer system firmware (C) 
  •  Image processing board (IPB) 
  •  Printer control board (PRCB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Reinstall the printer system firmware (C). 
  2. Check the connector connection and the wiring between the IPB and the PRCB, and repair it when there is any abnormality. 
  3. Check the wiring between the IPB and the PRCB. Then repair or replace it when there is any abnormality. 
  4. Check the I/F connector connection and the wiring for ISW on OACB, and repair it when there is any abnormality. 
  5. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
  6. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.13.7  C-C121 

Code 
C-C121 
Classification 
Main body: Image control firmware (I) unwritten 
Cause 
When the sub power switch (SW2) becomes active, the unwritten area is detected in the image control firmware (I). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Image control firmware (I) 
  •  SSD (SSD) 
  •  Overall control board (OACB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Reinstall the image control firmware (I). 
  2. Check the I/F connector connection and the wiring for ISW on OACB, and repair it when there is any abnormality. 
  3. Replace SSD. 
     Note  
       ▪  To obtain or to replace SSD, be sure to contact the support section of KM.  
  4. Replace OACB. (Refer to  G.3.2.28 Overall control board (OACB)) (Connector layout drawing in board:  L.2.1.1 Overall control board 
     (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.13.8  C-C123 

Code 
C-C123 
Classification 
GP: GP-502 ISW unwritten 
Cause 
When the sub power switch (SW2) becomes active, ISW unwritten area is detected in the Ring Binder firmware (M1, M2, M3). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Ring Binder firmware (M1, M2, M3) 
  •  Interface control PCB 
  •  Main control PCB 
  •  LCD control PCB 
  •  Printer control board (PRCB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the panel. 
Solution 
  1. Reinstall the Ring Binder firmware (M1, M2, M3). 
  2. Check the connector connection and the wiring between the main body and each option, and repair it when there is any abnormality. 
  3. Check the connector connection and the wiring among Interface control PCB, main control PCB, LCD control PCB, and PRCB. Then repair 
     it when there is any abnormality. 
  4. Check the I/F connector connection and the wiring for ISW on OACB, and repair it when there is any abnormality. 
  5. Replace the interface control PCB, the main control PCB, and the LCD control PCB. 
  6. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control while detached 

                                                                       K- 144 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.13.9  C-C124 

Code 
C-C124 
Classification 
FS: SD-510 ISW unwritten 
Cause 
When the sub power switch (SW2) becomes active, the unwritten area is detected in the saddle firmware (K). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Saddle firmware (K) 
  •  SD control board (SDCB) 
  •  Printer control board (PRCB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Reinstall the saddle firmware (K). 
  2. Check the connector connection between the main body and each option, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection and the wiring between SDCB and PRCB, and repair it when there is any abnormality. 
  4. Check the I/F connector connection and the wiring for ISW on OACB, and repair it when there is any abnormality. 
  5. Replace SDCB. (Connector layout drawing in board:  L.2.11.1 SD control board) 
  6. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14  Solution 11 (C-C125_E020) 

2.14.1  C-C126 

Code 
C-C126 
Classification 
MK (1st tandem): MK ISW unwritten 
Cause 
MK-737 is unwritten or write the abnormality. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  MKRB firmware 
  •  MK relay board (MKRB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Reinstalling the MKRB firmware 
  2. Check the I/F connector connections for ISW on MKRB, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     MK-737: 5-D) 
  3. Replace MKRB. (Connector layout drawing in board:  L.2.15.1 MK relay board (MKRB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.2  C-C129 

Code 
C-C129 
Classification 
MK (2nd tandem): MK ISW unwritten 
Cause 
MK-737 is unwritten or write the abnormality. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  MKRB firmware 
  •  MK relay board (MKRB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Reinstalling the MKRB firmware 
  2. Check the I/F connector connections for ISW on MKRB, and the wiring. Then repair it when there is any abnormality. (Wiring diagram: 
     MK-737: 5-D) 
  3. Replace MKRB. (Connector layout drawing in board:  L.2.15.1 MK relay board (MKRB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.3  C-C133 

Code 

                                                                      K- 145 
﻿bizhub PRO 1100                                                                             K TROUBLESHOOTING > 2. MALFUNCTION CODE 

C-C133 
Classification 
RU-518: RU-518 ISW unwritten (1st device) 
Cause 
ISW unwritten area is detected in the RU-518 firmware. Alternatively, a checksum error is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  RU control board (PCB1) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Reinstall RU-518 firmware. 
  2. Check the connector connection between the main body and each option, and the wiring. Then repair it when there is any abnormality. 
  3. Check the I/F connector connection and the wiring for ISW on OACB, and repair it when there is any abnormality. 
  4. Replace PCB1. (Connector layout drawing in board:  L.2.7.1 RU control board (PCB1)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.4  C-C152 

Code 
C-C152 
Classification 
Scanner: Scanner firmware abnormality 
Cause 
When the sub power switch (SW2) is activated, an abnormality on the scanner firmware (L) is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Scanner firmware (L) 
  •  Image processing board (IPB) 
  •  Overall control board (OACB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Reinstall the scanner firmware (L). 
  2. Check the connector connection between the main body and the scanner, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection and the wiring between IPB and OACB, and repair it when there is any abnormality. 
  4. Check the I/F connector connection and the wiring for ISW on OACB, and repair it when there is any abnormality. 
  5. Replace IPB. (Connector layout drawing in board:  L.2.1.3 Image processing board (IPB)) 
  6. Replace OACB. (Refer to  G.3.2.28 Overall control board (OACB)) (Connector layout drawing in board:  L.2.1.1 Overall control board 
     (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.5  C-C156 

Code 
C-C156 
Classification 
DF: DF firmware abnormality 
Cause 
When the sub power switch (SW2) becomes active, an abnormality on the ADF firmware (F) is detected. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  ADF firmware (F) 
  •  DF control board (DFCB) 
  •  Overall control board (OACB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Reinstall the ADF firmware (F). 
  2. Check the connector connection between the main body and DF, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection between DFCB and  IPB, and the wiring. Then repair it when there is any abnormality. 
  4. Check the connector connection and the wiring between IPB and OACB, and repair it when there is any abnormality. 
  5. Check the I/F connector connection and the wiring for ISW on OACB, and repair it when there is any abnormality. 
  6. Replace DFCB. (Connector layout drawing in board:  L.2.2.1 (1) DF-702) 
  7. Replace OACB. (Refer to  G.3.2.28 Overall control board (OACB)) (Connector layout drawing in board:  L.2.1.1 Overall control board 
     (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                     K- 146 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.14.6  C-C199 

Code 
C-C199 
Classification 
ZU: ZU-608 ISW unwritten 
Cause 
When the sub power switch (SW2) becomes active, the unwritten area is detected in the Z-Fold unit firmware (Z). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Z-Fold unit firmware (Z) 
  •  ZU control board (ZUCB) 
  •  Printer control board (PRCB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Reinstall the Z-Fold unit firmware (Z). 
  2. Check the connector connection between the main body and each option, and the wiring. Then repair it when there is any abnormality. 
  3. Check the connector connection and the wiring between ZUCB and PRCB, and repair it when there is any abnormality. 
  4. Check the I/F connector connection and the wiring for ISW on OACB, and repair it when there is any abnormality. 
  5. Replace ZUCB. (Connector layout drawing in board:  L.2.8.1 ZU control board (ZUCB)) 
  6. Replace PRCB. (Connector layout drawing in board:  L.2.1.2 Printer control board (PRCB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.7  C-D010 

Code 
C-D010 
Classification 
Main body: During or after the HDD deletion 
Cause 
HDD overwriting and deleting is being executed or it has been executed. 
Measures to take when alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Hard disk (HDD) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the panel. 
Solution 
  1. Report it to KM. 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.8  C-D060 

Code 
C-D060 
Classification 
Main body: Controller area abnormality (SSD) 
Cause 
An error occurs with the SSD controller area (Controller error). 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Controller firmware (P) 
  •  Overall control board (OACB) 
  •  SSD (SSD) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the connection between SSD and OACB, and repair it when there is any abnormality. 
  2. Reinstall the controller firmware (P). 
  3. Replace SSD. 
     Note 
       ▪  To obtain or to replace SSD, be sure to contact the support section of KM. 
  4. Replace OACB. (Refer to  G.3.2.28 Overall control board (OACB)) (Connector layout drawing in board:  L.2.1.1 Overall control board 
     (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.9  C-D070 

Code 
C-D070 
Classification 

                                                                        K- 147 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Main body: Controller HDD abnormality 
Cause 
An error occurs in the controller HDD data area. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  HDD (HDD) 
  •  Overall control board (OACB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check the firmware of the overall control (I) and of the controller (P), and reinstall the firmware when the version is different. 
  2. Execute bad sectors check and recovery with the output check of the IO Check (99-03). 
  3. Check the connection between each HDD, and repair it when there is any abnormality. 
  4. Format the HDD. (Refer to  I.4.17.2 Format Controller HDD Data) 
  5. Replace HDD. 
  6. Check the connector connection between DCPS/1, HDD, and OACB, and the wiring. Then repair it when there is any abnormality. 
  7. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.10  C-D080 

Code 
C-D080 
Classification 
Main body: Common API related HDD file crushed 
Cause 
Common API related file on the hard disk (HDD) is crushed. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Hard disk (HDD) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel. 
Solution 
  1. Execute the output check of the IO Check (99-03). 
  2. Replace HDD. 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.11  C-D0C0 

Code 
C-D0C0 
Classification 
Main body: HDD parameter abnormality 
Cause 
An error occurs with the HDD parameter. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Hard disk (HDD) 
  •  Overall control board (OACB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Execute the output check of the IO Check (99-92). 
  2. Format the HDD. (Refer to  I.4.17.1 Format HDD All Data) 
  3. Replace HDD. 
  4. Check the connector connection between DCPS/1, HDD, and OACB, and the wiring. Then repair it when there is any abnormality. 
  5. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.12  C-D0E1 

Code 
C-D0E1 
Classification 
Main body: HDD abnormality 
Cause 
HDD (HDD) is not connected or out of order. In the other case, a HDD that KM does not specify is installed. 
Measures to take when an alert occurs 

                                                                        K- 148 
﻿bizhub PRO 1100                                                                               K TROUBLESHOOTING > 2. MALFUNCTION CODE 

The main body and the option stop immediately. 
Estimated abnormal parts 
  •  HDD (HDD) 
  •  Overall control board (OACB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Execute bad sectors check and recovery with the output check of the IO Check (99-03). 
  2. Check the connection between each HDD, and repair it when there is any abnormality. 
  3. Format the HDD. (Refer to  I.4.17.1 Format HDD All Data) 
  4. Replace HDD. 
  5. Check the connector connection between DCPS/1, HDD, and OACB, and the wiring. Then repair it when there is any abnormality. 
  6. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.13  C-D0E3 

Code 
C-D0E3 
Classification 
Main body: HDD read or write abnormality 
Cause 
The reading and writing operation to the HDD is failed. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  HDD (HDD) 
  •  Overall control board (OACB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Execute bad sectors check and recovery with the output check of the IO Check (99-03). 
  2. Check the connection between each HDD, and repair it when there is any abnormality. 
  3. Format the HDD. (Refer to  I.4.17.1 Format HDD All Data) 
  4. Replace HDD. 
  5. Check the connector connection between DCPS/1, HDD, and OACB, and the wiring. Then repair it when there is any abnormality. 
  6. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.14  C-D0E8 

Code 
C-D0E8 
Classification 
Main body: HDD read or write abnormality 
Cause 
The reading and writing operation to the HDD is failed. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Hard disk (HDD) 
Correction 
Press the help key to activate and deactivate the sub power switch (SW2) of the main body. 
Note  
  ▪  When you isolate the faulty part, the limited use is available. 
  ▪  The message "Please call service" and "Press [Help] to disengage" are displayed alternately on the touch panel. 
  ▪  When you press the help key, the message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Initialize the file system by the output check of the IO Check (99-92). 
  2. Check the connection between each HDD, and repair it when there is any abnormality. 
  3. Format the HDD. (Refer to  I.4.17.1 Format HDD All Data) 
  4. Replace HDD. (Refer to  G.3.2.29 Hard disk (HDD)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.15  C-D0EF 

Code 
C-D0EF 
Classification 
Main body: HDD verify abnormality 
Cause 
The HDD verify check detects an error. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 

                                                                       K- 149 
﻿bizhub PRO 1100                                                                              K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Estimated abnormal parts 
  •  HDD (HDD) 
  •  Overall control board (OACB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Execute bad sectors check and recovery with the output check of the IO Check (99-03). 
  2. Check the connection between each HDD, and repair it when there is any abnormality. 
  3. Format the HDD. (Refer to  I.4.17.1 Format HDD All Data) 
  4. Replace HDD. 
  5. Check the connector connection between DCPS/1, HDD, and OACB, and the wiring. Then repair it when there is any abnormality. 
  6. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.16  C-D0F0 

Code 
C-D0F0 
Classification 
Main body: HDD Lock abnormality 
Cause 
HDD Lock abnormality on enhanced security. The HDD is locked because the HDD lock password is incorrect or not registered, or because the 
enhanced security mode is not active. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Hard disk (HDD) 
  •  Overall control board (OACB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Check that EEPROM is installed on OACB, and repair it when there is any abnormality. 
  2. Check that the "notch" of the installed EEPROM matches and repair it when there is any abnormality. 
  3. Replace HDD. 
  4. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
  5. Replace SSD. 
     Note  
       ▪  To obtain or to replace SSD, be sure to contact the support section of KM. 
  6. Report it to KM. 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.17  C-D0F1 

Code 
C-D0F1 
Classification 
Main body: Overall control EEPROM abnormality 
Cause 
EEPROM cannot be accessed normally. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Overall control board (OACB) 
  •  SSD (SSD) 
  •  Hard disk (HDD) 
  •  NVRAM board (NRB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
Perform the following procedures in the order. 
  1. <When the enhanced security mode is active> 
       •  Check that EEPROM is installed on OACB, and repair it when there is any abnormality. 
       •  Check that the "notch" of the installed EEPROM matches and repair it when there is any abnormality. 
       •  Replace the NRB. 
          Note 
          • To obtain or to replace NRB, be sure to contact the support section of KM. 
       •  Replace SSD. 
          Note 
          • To obtain or to replace SSD, be sure to contact the support section of KM. 
       •  Replace OACB. (Refer to  G.3.2.28 Overall control board (OACB)) (Connector layout drawing in board:  L.2.1.1 Overall control board 
          (OACB)) 
       •  Replace HDD. (Refer to  G.3.2.29 Hard disk (HDD)) 
       •  Report it to KM. 
  2. <When the enhanced security mode is inactive> 

                                                                      K- 150 
﻿bizhub PRO 1100                                                                             K TROUBLESHOOTING > 2. MALFUNCTION CODE 

       •  Check that EEPROM is installed on OACB, and repair it when there is any abnormality. 
       •  Check that the "notch" of the installed EEPROM matches and repair it when there is any abnormality. 
       •  Replace OACB. (Refer to  G.3.2.28 Overall control board (OACB)) (Connector layout drawing in board:  L.2.1.1 Overall control board 
          (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.18  C-D0F2 

Code 
C-D0F2 
Classification 
Main body: Temporary storage job abnormality 
Cause 
JobID duplication in the temporary storage 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  HDD (HDD) 
  •  Overall control board (OACB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Execute bad sectors check and recovery with the output check of the IO Check (99-92). 
  2. Check the connection between each HDD, and repair it when there is any abnormality. 
  3. Format the HDD. (Refer to  I.4.17.1 Format HDD All Data) 
  4. Replace HDD. 
  5. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.19  C-D0F5 

Code 
C-D0F5 
Classification 
Main body: File open error 
Cause 
Files on the HDD cannot be opened. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  HDD (HDD) 
  •  Overall control board (OACB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Execute bad sectors check and recovery with the output check of the IO Check (99-92). 
  2. Check the connection between each HDD, and repair it when there is any abnormality. 
  3. Format the HDD. (Refer to  I.4.17.1 Format HDD All Data) 
  4. Replace HDD. 
  5. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.20  C-D0F6 

Code 
C-D0F6 
Classification 
Main body: File close error 
Cause 
The file of the hard disk (HDD) cannot be closed. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Hard disk (HDD) 
  •  Overall control board (OACB) 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the touch panel.  
Solution 
  1. Execute the IO Check (99-92). (Delete the job data of the HDD.) 
  2. Format the HDD. (Refer to  I.4.17.1 Format HDD All Data) 
  3. Replace HDD. (Refer to  G.3.2.29 Hard disk (HDD)) 
  4. Check the wiring between HDD and OACB. Then repair or replace it when there is any abnormality. 
  5. Check the connector connection and the wiring between HDD and DCPS/1, and repair or replace it when there is any abnormality. 

                                                                     K- 151 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

  6. Replace OACB. (Refer to  G.3.2.28 Overall control board (OACB)) (Connector layout drawing in board:  L.2.1.1 Overall control board 
     (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.21  C-D0FD 

Code 
C-D0FD 
Classification 
Main body: NVRAM board setting abnormality 
Cause 
NVRAM board (NRB) setting is not completed. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  - 
Correction 
Note  
  ▪  The message "Please call service" is displayed on the panel.  
Solution 
  1. Report it to KM with the log data. 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.22  C-D0FE 

Code 
C-D0FE 
Classification 
Main body: SSD read or write abnormality 
Cause 
The reading and writing operation to the SSD is failed. 
Access error to SSD. 
Measures to take when alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  SSD (SSD) 
  •  Overall control board (OACB) 
  •  NVRAM board (NRB) 
Correction 
Note 
  ▪  The message "Please call service" is displayed on the panel. 
Solution 
  1. Execute the IO Check (99-99) of the broken device confirmation. 
  2. Perform the following procedure that is based on the result of the IO check. 
       •  When "SSD" is displayed: Execute the IO Check (99-97) of the SSD replacement processing, and then replace the SSD. 
          Note 
          · When IO Check (99-97) is conducted, SSD data is initialized. 
       •  When "CPU" is displayed: Replace OACB. 
       •  When "NOV" is displayed: Replace NRB. 
     Note 
       ▪  To obtain or replace NRB and SSD, contact the support section of Konica Minolta. 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.23  C-D101 

Code 
C-D101 
Classification 
Tandem communication abnormality 
Cause 
A communication error is detected during the tandem print. 
Measures to take when alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Overall control board (OACB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the panel. 
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the condition of the network cable and repair it if there is any abnormality. 
  3. Reinstall the firmware that is related to the overall control. 
Faulty part isolation DIPSW 
Control during the detachment 

                                                                         K- 152 
﻿bizhub PRO 1100                                                                                 K TROUBLESHOOTING > 2. MALFUNCTION CODE 

2.14.24  C-D102 

Code 
C-D102 
Classification 
Tandem image communication error 
Cause 
An abnormality is detected at the tandem image transfer. 
Measures to take when alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Overall control board (OACB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the panel. 
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Check the condition of the network cable and repair it if there is any abnormality. 
  3. Reinstall the firmware that is related to the overall control. 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.25  C-E001 

Code 
C-E001 
Classification 
HDD: Communication error 
Cause 
Message queue error. The message queue is insufficient or destroyed. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Overall control board (OACB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Reinstall the firmware that is related to the overall control. 
  3. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.26  C-E002 

Code 
C-E002 
Classification 
HDD: Communication error 
Cause 
Message parameter value error. The parameter value is in excess of the permissible limits. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Overall control board (OACB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Reinstall the firmware that is related to the overall control. 
  3. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.27  C-E003 

Code 
C-E003 
Classification 
HDD: Communication error 
Cause 
Source task error. The ID of the task that sends the message queue is undefined. 

                                                                         K- 153 
﻿bizhub PRO 1100                                                                                  K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Overall control board (OACB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Reinstall the firmware that is related to the overall control. 
  3. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.28  C-E004 

Code 
C-E004 
Classification 
HDD: Communication error 
Cause 
Receiving event error. The receiving event of the message is undefined. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Overall control board (OACB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Reinstall the firmware that is related to the overall control. 
  3. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.29  C-E005 

Code 
C-E005 
Classification 
HDD: Communication error 
Cause 
Memory access abnormality. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Overall control board (OACB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Reinstall the firmware that is related to the overall control. 
  3. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.30  C-E006 

Code 
C-E006 
Classification 
HDD: Communication error 
Cause 
Header readout address abnormality. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Overall control board (OACB) 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 

                                                                         K- 154 
﻿bizhub PRO 1100                                                                                  K TROUBLESHOOTING > 2. MALFUNCTION CODE 

Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
  2. Reinstall the firmware that is related to the overall control. 
  3. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.31  C-E007 

Code 
C-E007 
Classification 
Main body: Initialization abnormality of the memory board 
Cause 
Initialization abnormality of the memory board/1 (MEMB/1) and the memory board/2 (MEMB/2) at the power activation. 
MEMB/1 and MEMB/2 are not possibly installed correctly. 
Measures to take when an alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Overall control board (OACB) 
  •  Memory board/1 (MEMB/1) 
  •  Memory board/2 (MEMB/2) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Check the connector connection of MEMB/1 and MEMB/2 on OACB, and repair it when there is any abnormality. (Wiring diagram: Main 
     body (3/4): 2-L, 3-L) 
  2. Check the connector connection and the wiring on OACB, and repair it when there is any abnormality. 
  3. Replace OACB. (Connector layout drawing in board:  L.2.1.1 Overall control board (OACB)) 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.32  C-E018 

Code 
C-E018 
Classification 
Main body: Erratic pagination 
Cause 
An erratic pagination is detected on the job during printing. 
Measures to take when alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
  •  Overall control board (OACB) 
Correction 
Deactivate and activate the sub power switch (SW2) of the main body. 
Note  
  ▪  The message "Please turn on power again" is displayed on the touch panel. 
Solution 
  1. Operate according to the procedures displayed on the touch panel. 
  2. Deactivate the main power after you deactivate the sub power. 
Faulty part isolation DIPSW 
Control during the detachment 

2.14.33  C-E020 

Code 
C-E020 
Classification 
Browser abnormality detection 
Cause 
The browser is detected to be unable to recover because of an abnormal shutdown of the browser process and others. 
Measures to take when alert occurs 
The main body and the option stop immediately. 
Estimated abnormal parts 
Correction 
Deactivate and activate the power switch (SW2) of the main body when you release an abnormal condition. 
Note  
  ▪  The message "Please call service" is displayed on the panel. 
Solution 
  1. Deactivate the sub power switch, and then deactivate the main power switch. Then restart the main body 10 seconds after you unplug the 
     power plug of the main body. 
Faulty part isolation DIPSW 
Control during the detachment 

                                     
`