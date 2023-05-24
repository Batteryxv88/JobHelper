export const C6000S = `

Code 
      C-0001 
Classification 
      Main body: Communication error 
Cause 
      Communication error between the printer control board (PRCB) and the PF drive board (PFDB) or LU drive board (LUDB). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  PF drive board (PFDB) 
        •  LU drive board (LUDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        • The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Turn OFF the sub power switch and unplug the power plug. Restart the main body after 10 seconds. 
       2.  Check the connection status of PRCB connector, and repair it if any abnormality. 
       3.  Check the connector connection status of PFDB or LUDB, and repair it if any abnormality. 
       4.  Replace PRCB 
       5.  Replace PFDB or LUDB 
Faulty part isolation DIPSW 
Control while detached 
  

2.5.2   C-0002 

Code 
      C-0002 
Classification 
      Main body: Communication error 
Cause 
      Communication error between the printer control board (PRCB) and the conveyance drive board (CDB). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Conveyance drive board (CDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        • The message "Please turn on power again" is displayed on the touch panel. 
        

                                                                           K -83 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Solution 
       1.  Turn OFF the sub power switch and unplug the power plug. Restart the main body after 10 seconds. 
       2.  Check the connection status of PRCB connector, and repair it if any abnormality. 
       3.  Check the connection status of CDB connector, and repair it if any abnormality. 
       4.  Replace PRCB. 
       5.  Replace CDB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.5.3   C-0003 

Code 
      C-0003 
Classification 
      Main body: Communication error 
Cause 
      Communication error between the printer control board (PRCB) and the conveyance drive board (CDB). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Conveyance drive board (CDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Turn OFF the sub power switch and unplug the power plug. Restart the main body after 10 seconds. 
       2.  Check the connection status of PRCB connector, and repair it if any abnormality. 
       3.  Check the connection status of CDB connector, and repair it if any abnormality. 
       4.  Replace PRCB. 
       5.  Replace CDB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.5.4   C-0101 

Code 
      C-0101 
Classification 
      Main body: Paper feed motor abnormality 
Cause 
      An error detection signal of M41 is detected continuously for a specified period of time while the paper feed motor (M41) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Paper feed motor (M41) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  "Please call service" is displayed. 
        
Solution 
       1.  Check the connector connection and the wiring between PRCB and the motor, and repair it if any abnormality. 
       2.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3):16-E) 
       3.  Replace M41. 
       4.  Replace PRCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.5.5   C-0102 

Code 
      C-0102 
Classification 
      LU: LU paper feed motor abnormality 
Cause 
      An error detection signal of M1 is detected continuously for a specified period of time while the paper feed motor (M1) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  LU drive board (LUDB) 
        •  Paper feed motor (M1) 
        •  Interlock switch /1 (MS1), /2 (MS2) 
        •  Upper door sensor (PS100), front door sensor (PS115) 
Correction 

                                                                             K -84 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the connector connection and the wiring between LUDB and the motor, and repair it if any abnormality. 
       2.  Check the I/O of the interlock switch and sensor, and repair/replace it if any abnormality (Wiring diagram: LU: 6-C, 8-B) 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: LU: 5-B) 
       4.  Replace M1. 
       5.  Replace LUDB. 
Faulty part isolation DIPSW 
      DIPSW18-3 
Control while detached 
      LU paper feed is not available 
  

2.5.6    C-0103 

Code 
      C-0103 
Classification 
      PF: PF paper feed motor abnormality 
Cause 
      An error detection signal of M1 is detected continuously for a specified period of time while the paper feed motor (M1) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  Paper feed motor (M1) 
        •  Front door open/close switch (SW1) 
        •  Front door open/close sensor (PS23) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between PFDB and the motor, and repair it if any abnormality. 
       2.  Check the I/O of the interlock switch and sensor, and repair/replace it if any abnormality (Wiring diagram: PF: 9-U, 10-U) 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PF: 19-U) 
       4.  Replace M1. 
       5.  Replace PFDB 
Faulty part isolation DIPSW 
      DIPSW35-0 
      DIPSW35-1 
      DIPSW35-2 
      DIPSW35-3 
      DIPSW35-4 
      DIPSW35-5 
Control while detached 
      PF paper feed is not available 
  

2.5.7   C-0201 

Code 
      C-0201 
Classification 
      Main body: Paper feed tray abnormality 
Cause 
      The upper limit sensor /1 (PS30) does not turn ON within a specified period of time after the paper lift motor /1 (M38) turns ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Paper lift motor /1 (M38) 
        •  Upper limit sensor /1 (PS30) 
        •  Pick-up solenoid /1 (SD7) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the paper loaded condition and the rear end restriction plate condition of the tray 1, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the solenoid and the coupling of the gear, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3):14-E, 15-M) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: Main body (1/3): 14-M) 
       5.  Replace PS30. 
       6.  Replace SD7. 

                                                                             K -85 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        7.  Replace M38 and PRCB at a time. 
Faulty part isolation DIPSW 
       DIPSW18-0 
Control while detached 
       Paper feed in tray 1 is unavailable 
  

2.5.8   C-0202 

Code 
      C-0202 
Classification 
       Main body: Paper feed tray abnormality 
Cause 
      The upper limit sensor /2 (PS36) does not turn ON within a specified period of time after the paper lift motor /2 (M39) turns ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Paper lift motor /2 (M39) 
        •  Upper limit sensor /2 (PS36) 
        •  Pick-up solenoid /2 (SD8) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the paper loaded condition and the rear end restriction plate condition of the tray 2, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the solenoid and the coupling of the gear, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 13-E, 18-M) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: Main body (1/3): 17-M) 
       5.  Replace PS36. 
       6.  Replace SD8. 
        7.  Replace M39, SD8 and PRCB at a time. 
Faulty part isolation DIPSW 
       DIPSW18-1 
Control while detached 
       Paper feed in tray 2 is unavailable 
  

2.5.9   C-0203 

Code 
      C-0203 
Classification 
       Main body: Paper feed tray abnormality 
Cause 
      The upper limit sensor /3 (PS42) does not turn ON within a specified period of time after the paper lift motor /3 (M40) turns ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Paper lift motor /3 (M40) 
        •  Upper limit sensor /3 (PS42) 
        •  Pick-up solenoid /3 (SD9) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the paper loaded condition and the rear end restriction plate condition of the tray 3, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the solenoid and the coupling of the gear, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 13-E, 21-M) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: Main body (1/3): 20-M) 
       5.  Replace PS42. 
       6.  Replace SD9. 
        7.  Replace M40 and PRCB at a time. 
Faulty part isolation DIPSW 
       DIPSW18-2 
Control while detached 
       Paper feed in tray 3 is unavailable 
  

2.5.10   C-0204 

Code 
      C-0204 
Classification 

                                                                              K -86 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       LU: LU lift motor abnormality 
Cause 
      A lock signal of M100 is detected while the paper lift motor (M100) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  LU drive board (LUDB) 
        •  Upper limit sensor (PS109) 
        •  Paper lift motor (M100) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the connector connection and the wiring between LUDB and motor/sensor, and repair it if any abnormality. 
       2.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: LU: 5-H) 
       3.  Replace PS109. 
       4.  Replace M100. 
       5.  Replace LUDB. 
Faulty part isolation DIPSW 
       DIPSW18-3 
Control while detached 
       LU paper feed is not available 
  

2.5.11   C-0205 

Code 
      C-0205 
Classification 
       LU: LU lift motor abnormality 
Cause 
      A lock signal of M100 is detected while the paper lift motor (M100) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  LU drive board (LUDB) 
        •  Paper lift motor (M100) 
        •  Upper limit sensor (PS109) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the paper loaded condition and the rear end restriction plate condition of the LU tray, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between LUDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: LU: 5-H) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: LU: 7-B) 
       5.  Replace PS109. 
       6.  Replace M100. 
        7.  Replace LUDB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.5.12   C-0208 

Code 
      C-0208 
Classification 
       PF: Paper lift motor abnormality 
Cause 
      The upper limit sensor /1 (PS1) does not turn ON within a specified period of time after the paper lift motor /1 (M2) turns ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  Paper lift motor /1 (M2) 
        •  Upper limit sensor /1 (PS1) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the paper loaded condition and the rear end restriction plate condition of the PF tray, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PFDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PF: 11-U) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: PF: 6-K) 

                                                                              K -87 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       5.  Replace PS1. 
       6.  Replace M2. 
       7.  Replace PFDB. 
Faulty part isolation DIPSW 
       DIPSW21-4 
Control while detached 
       Paper feed in PF upper tray is unavailable 
  

2.5.13   C-0209 

Code 
      C-0209 
Classification 
       PF: Paper lift motor abnormality 
Cause 
       Power supply line fuse for the paper lift motor /1 (M2) blows out. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  Paper lift motor /1 (M2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PFDB and the motor, and repair it if any abnormality. 
       2.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PF: 11-U) 
       3.  Replace M2 and PFDB at a time 
Faulty part isolation DIPSW 
       DIPSW21-4 
Control while detached 
       Paper feed in PF upper tray is unavailable 
  

2.5.14   C-0211 

Code 
      C-0211 
Classification 
       PF: Paper lift motor abnormality 
Cause 
      The upper limit sensor /2 (PS9) does not turn ON within a specified period of time after the paper lift motor /2 (M3) turns ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  Paper lift motor /2 (M3) 
        •  Upper limit sensor /2 (PS9) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the paper loaded condition and the rear end restriction plate condition of the PF tray, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PFDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PF: 12-U) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: PF: 14-K) 
       5.  Replace PS9. 
       6.  Replace M3. 
       7.  Replace PFDB. 
Faulty part isolation DIPSW 
       DIPSW21-5 
Control while detached 
       Paper feed in PF lower tray is unavailable 
  

2.5.15   C-0212 

Code 
      C-0212 
Classification 
       PF: Paper lift motor abnormality 
Cause 
       Power supply line fuse for the paper lift motor /2 (M3) blows out. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 

                                                                              K -88 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  Paper lift motor /2 (M3) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PFDB and the motor, and repair it if any abnormality. 
       2.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PF: 12-U) 
       3.  Replace M3 and PFDB at a time 
Faulty part isolation DIPSW 
       DIPSW21-5 
Control while detached 
       Paper feed in PF lower tray is unavailable 
  

2.5.16   C-0213 

Code 
       C-0213 
Classification 
       Main body: Paper exit abnormality 
Cause 
      The paper exit pressure home sensor (PS10) does not turn ON within a specified period of time after it turns OFF. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Printer control board (PRCB) 
        •  Paper exit motor (M54) 
        •  Paper exit pressure sensor (PS10) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the de-curler unit, and clean/repair it if any abnormality. 
       2.  Check the paper exit drive gear system, and clean/repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PRCB and the sensor, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between ACDB and the motor, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between ACDB and PRCB, and repair it if any abnormality. 
       6.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: Main body (3/3): 22-E) 
        7.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 11-B) 
       8.  Replace PS10. 
       9.  Replace M54. 
       10. Replace ACDB. 
       11. Replace PRCB 
       12. Replace M54 and ACDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.6   Solution 2 (C-0301_0400) 

2.6.1   C-0301* 

Code 
       C-0301* 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of FM47 is detected continuously for a specified period of time while the main body fan (FM47) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Main body fan (FM47) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and the fun, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 13-D) 
       3.  Replace FM47 and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

                                                                               K -89 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

2.6.2   C-0302* 

Code 
      C-0302* 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of any of FM26 or FM28 is detected continuously for a specified period of time while the tucking fan /1 (FM26) 
      and /3 (FM28) are ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Tucking fan /1 (FM26) 
        •  Tucking fan /3 (FM28) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and the fun, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 22-E) 
       3.  Replace FM26 or FM28 and PRCB at a time 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.3    C-0303 

Code 
      C-0303 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of FM66 is detected continuously for a specified period of time while ADU cooling fan /1 (FM66) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Conveyance drive board (CDB) 
        •  ADU cooling fan /1 (FM66) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between CDB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 2-P) 
       3.  Replace FM66 and CDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.4    C-0304* 

Code 
      C-0304* 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of any of FM61, FM62 or FM63 is detected continuously for a specified period of time while the paper exit cooling 
      fans /1 (FM61), /2 (FM62) and /3 (FM63) are ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Paper exit fan /1 (FM61) 
        •  Paper exit fan /2 (FM62) 
        •  Paper exit fan /3 (FM63) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and the fun, and repair it if any abnormality. 
       2.  Rotate the fan by I/O or by hand, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 8-D) 
       3.  Replace FM61, FM62 or FM63 and PRCB at a time 
Faulty part isolation DIPSW 
Control while detached 

                                                                              K -90 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

  

2.6.5   C-0305* 

Code 
       C-0305* 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of FM36 is detected continuously for a specified period of time while the deodorization fan (FM36) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Deodorization fan (FM36) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and the fun, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 15-D) 
       3.  Replace FM36 and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.6   C-0306 

Code 
       C-0306 
Classification 
       LU: LU fan abnormality 
Cause 
      An error detection signal of FM1 is detected continuously for a specified period of time while the paper feed assist fan /Fr (FM1) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  LU drive board (LUDB) 
        •  Paper feed assist fan /Fr (FM1) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between LUDB and the fun, and repair it if any abnormality. 
       2.  Rotate the fan by I/O or by hand, and repair it if any abnormality. (Wiring diagram: LU: 6-H) 
       3.  Replace FM1and LUDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.7   C-0307 

Code 
       C-0307 
Classification 
       LU: LU fan abnormality 
Cause 
      An error detection signal of FM2 is detected continuously for a specified period of time while the paper feed assist fan /Rr (FM2) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  LU drive board (LUDB) 
        •  Paper feed assist fan /Rr (FM2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between LUDB and the fun, and repair it if any abnormality. 
       2.  Rotate the fan by I/O or by hand, and repair it if any abnormality. (Wiring diagram: LU: 7-H) 
       3.  Replace FM2 and LUDB at a time 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.8   C-0308 

Code 

                                                                               K -91 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      C-0308 
Classification 
       PF: PF fan abnormality 
Cause 
      An error detection signal of FM1 is detected continuously for a specified period of time while the paper feed assist fan /Fr11 (FM1) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  Paper feed assist fan /Fr11 (FM1) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PFDB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: PF: 11-K) 
       3.  Replace FM1 and PFDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.9    C-0309 

Code 
      C-0309 
Classification 
       PF: PF fan abnormality 
Cause 
      An error detection signal of FM3 is detected continuously for a specified period of time while the paper feed assist fan /Fr12 (FM3) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  Paper feed assist fan /Fr12 (FM3) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PFDB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: PF: 12-K) 
       3.  Replace FM3 and PFDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.10   C-0310 

Code 
      C-0310 
Classification 
       PF: PF fan abnormality 
Cause 
      An error detection signal of FM2 is detected continuously for a specified period of time while the paper feed assist fan /Rr11 (FM2) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  Paper feed assist fan /Rr11 (FM2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PFDB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: PF: 12-K) 
       3.  Replace FM2 and PFDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.11   C-0311 

Code 
      C-0311 
Classification 
       PF: PF fan abnormality 
Cause 

                                                                              K -92 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      An error detection signal of FM4 is detected continuously for a specified period of time while the paper feed assist fan /Rr12 (FM4) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  Paper feed assist fan /Rr12 (FM4) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PFDB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: PF: 12-K) 
       3.  Replace FM4 and PFDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.12   C-0312 

Code 
      C-0312 
Classification 
       PF: PF fan abnormality 
Cause 
      An error detection signal of FM5 is detected continuously for a specified period of time while the paper feed assist fan /Fr21 (FM5) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  Paper feed assist fan /Fr21 (FM5) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PFDB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: PF: 19-K) 
       3.  Replace FM5 and PFDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.13   C-0313 

Code 
      C-0313 
Classification 
       PF: PF fan abnormality 
Cause 
      An error detection signal of FM7 is detected continuously for a specified period of time while the paper feed assist fan /Fr22 (FM7) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  Paper feed assist fan /Fr22 (FM7) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PFDB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: PF: 20-K) 
       3.  Replace FM7 and PFDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.14   C-0314 

Code 
      C-0314 
Classification 
       PF: PF fan abnormality 
Cause 
      An error detection signal of FM6 is detected continuously for a specified period of time while the paper feed assist fan /Rr21 (FM6) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 

                                                                              K -93 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  PF drive board (PFDB) 
        •  Paper feed assist fan /Rr21 (FM6) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PFDB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: PF: 19-K) 
       3.  Replace FM6 and PFDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.15   C-0315 

Code 
      C-0315 
Classification 
       PF: PF fan abnormality 
Cause 
      An error detection signal of FM8 is detected continuously for a specified period of time while the paper feed assist fan /Rr22 (FM8) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  Paper feed assist fan /Rr22 (FM8) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PFDB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: PF : 7-H) 
       3.  Replace FM8 and PFDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.16   C-0316 

Code 
      C-0316 
Classification 
       PF: PF fan abnormality 
Cause 
      An error detection signal of any of FM11 or FM12 is detected continuously for a specified period of time while the dehumidifier fans /1 
       (FM11) and /2 (FM12) are ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  Dehumidifier fan /1 (FM11) 
        •  Dehumidifier fan /2 (FM12) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PFDB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: PF: 24-D, 25-D) 
       3.  Replace FM11 or FM12 and PFDB at a time 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.17   C-0317 

Code 
      C-0317 
Classification 
       PF: PF fan abnormality 
Cause 
      An error detection signal of any of FM13 or FM14 is detected continuously for a specified period of time while the dehumidifier fans /3 
       (FM13) and /4 (FM14) are ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 

                                                                              K -94 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  Dehumidifier fan /3 (FM13) 
        •  Dehumidifier fan /4 (FM14) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PFDB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: PF: 23-F) 
       3.  Replace FM13 or FM14 and PFDB at a time 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.18   C-0318 

Code 
      C-0318 
Classification 
       PF: PF fan abnormality 
Cause 
      An error detection signal of any of FM10 or FM9 is detected continuously for a specified period of time while the ventilation fan /1 (FM10) 
      and /2 (FM9) are ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  Ventilation fan /1 (FM10) 
        •  Ventilation fan /2 (FM9) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PFDB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: PF: 26-U) 
       3.  Replace FM10 or FM9 and PFDB at a time 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.19   C-0320 

Code 
      C-0320 
Classification 
       LU: LU fan abnormality 
Cause 
      An error detection signal of FM3 is detected continuously for a specified period of time while the dehumidifier fan /1 (FM3) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  LU drive board (LUDB) 
        •  Dehumidifier fan /1 (FM3) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between LUDB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: LU: 4-C) 
       3.  Replace FM3 and LUDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.20   C-0321 

Code 
      C-0321 
Classification 
       LU: LU fan abnormality 
Cause 
      An error detection signal of FM4 is detected continuously for a specified period of time while the dehumidifier fan /2 (FM4) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  LU drive board (LUDB) 
        •  Dehumidifier fan /2 (FM4) 

                                                                              K -95 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                      K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between LUDB and the fun, and repair it if any abnormality. 
       2.  Rotate the fan by I/O or by hand, and repair it if any abnormality. (Wiring diagram: LU: 4-C) 
       3.  Replace FM4and LUDB at a time 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.21   C-0322 

Code 
       C-0322 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of FM67 is detected continuously for a specified period of time while ADU cooling fan /2 (FM67) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Conveyance drive board (CDB) 
        •  ADU cooling fan /2 (FM67) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between CDB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 2-I) 
       3.  Replace FM67 and CDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.22   C-0323* 

Code 
       C-0323* 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of FM62 is detected continuously for a specified period of time while the paper exit fan /2 (FM62) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Paper exit fan /2 (FM62) 
        •  Printer control board (PRCB) 
Correction 
       Note 
        • 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and the fun, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 8-D) 
       3.  Replace FM62. 
       4.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.6.23   C-0324* 

Code 
       C-0324* 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of FM63 is detected continuously for a specified period of time while the paper exit fan /3 (FM63) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Paper exit fan /3 (FM63) 
        •  Printer control board (PRCB) 
Correction 
       Note 
        • 
        

                                                                               K -96 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                 K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Solution 
       1.  Check the connector connection and the wiring between PRCB and the fun, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 8-D) 
       3.  Replace FM63. 
       4.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.7   Solution 3 (C-0401_0500) 

2.7.1   C-0401 

Code 
      C-0401 
Classification 
      LU: LU power source abnormality 
Cause 
      24VDC is not supplied to LU. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  LU drive board (LUDB) 
        •  DC power supply /2 (DCPS/2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between LUDB and DCPS /2, and repair it if any abnormality. 
       2.  Replace LUDB. 
       3.  Replace DCPS /2. 
       4.  Replace LUDB and DCPS/2 at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.7.2   C-0402 

Code 
      C-0402 
Classification 
      LU: LU power source abnormality 
Cause 
      12VDC is not supplied to LU. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  LU drive board (LUDB) 
        •  DC power supply /1 (DCPS1) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between LUDB and DCPS1, and repair it if any abnormality. 
       2.  Replace LUDB. 
       3.  Replace DCPS1. 
       4.  Replace LUDB and DCPS1 at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.7.3   C-0403 

Code 
      C-0403 
Classification 
      PF: PF power source abnormality 
Cause 
      24VDC is not supplied to PF. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  DC power supply /2 (DCPS2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 

                                                                            K -97 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        
Solution 
       1.  Check the connector connection and the wiring between PFDB and DCPS2, and repair it if any abnormality. 
       2.  Replace PFDB 
       3.  Replace DCPS2. 
       4.  Replace PFDB and DCPS2 at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.7.4   C-0404 

Code 
      C-0404 
Classification 
      PF: PF power source abnormality 
Cause 
      24VDC is not supplied to PF. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  DC power supply /2 (DCPS2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between PFDB and DCPS2, and repair it if any abnormality. 
       2.  Replace PFDB. 
       3.  Replace DCPS2. 
       4.  Replace PFDB and DCPS2 at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.7.5   C-0405 

Code 
      C-0405 
Classification 
      PF: PF power source abnormality 
Cause 
       12VDC is not supplied to PF. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  DC power supply /1 (DCPS1) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between PBDB and the fan, and repair it if any abnormality. 
       2.  Replace PFDB 
       3.  Replace DCPS1. 
       4.  Replace PFDB and DCPS1 at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.7.6   C-0406 

Code 
      C-0406 
Classification 
      PF: PF power source abnormality 
Cause 
      24VDC is not supplied to PF. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  DC power supply /2 (DCPS2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        

                                                                             K -98 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Solution 
       1.  Check the connector connection and the wiring between PFDB and DCPS2, and repair it if any abnormality. 
       2.  Replace PFDB. 
       3.  Replace DCPS2. 
       4.  Replace PFDB and DCPS2 at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.7.7   C-0407 

Code 
      C-0407 
Classification 
      PF: PF Tray 1 Heater high temperature hardware detection abnormality 
Cause 
      24V power source abnormal signal is detected. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  Temperature sensor /3 (TEMS/3) 
        •  AC drive board (ACDB) in PF 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between PFDB and TEMS/3, and repair it if any abnormality. 
       2.  Check the installation condition of TEMS/3, and adjust/replace it if any abnormality. (Wiring diagram: PF: 25-D) 
       3.  Replace TEMS/3. 
       4.  Replace PFDB. 
       5.  Replace ACDB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.7.8   C-0408 

Code 
      C-0408 
Classification 
      PF: PF Tray 2 Heater high temperature hardware detection abnormality 
Cause 
      24V power source abnormal signal is detected. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  Temperature sensor /4 (TEMS/4) 
        •  AC drive board (ACDB) in PF 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between PFDB and TEMS/4, and repair it if any abnormality. 
       2.  Check the installation condition of TEMS/4, and repair/replace it if any abnormality. (Wiring diagram: PF: 24-F) 
       3.  Replace TEMS/4. 
       4.  Replace PFDB 
       5.  Replace ACDB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.7.9   C-0409 

Code 
      C-0409 
Classification 
      PF: PF fan heater abnormality 
Cause 
      Fan heater /Up (DH3) high temperature abnormality 
      The temperature sensor /3 (TEMS/3) detects the prescribed or higher value continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  AC drive board in PF (ACDB) 
        •  Fan heater /Up (DH3) 

                                                                            K -99 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  Temperature sensor /3 (TEMS/3) 
        •  Dehumidifier fans /1 (FM11) and /2 (FM12) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connection between ACDB and the noise filter of PF. 
       2.  Check the connector connection and the wiring between PFDB, the temperature sensor, and the fan and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between PFDB and ACDB, and repair it if any abnormality. 
       5.  Rotate the fan by I/O or hand, and repair/replace it if any abnormality. (Wiring diagram: PF: 24-D, 25-D) 
       6.  Check the temperature and the installation condition of the fan heater and the installation condition of the temperature sensor, and 
           repair/replace it if any abnormality. (Wiring diagram: PF: 22-D, 25-D) 
       7.  Replace TEMS/3. 
       8.  Replace DH3. 
       9.  Replace FM11 and FM12. 
       10. Replace ACDB. 
       11. Replace PFDB 
Faulty part isolation DIPSW 
Control while detached 
  

2.7.10   C-0410 

Code 
      C-0410 
Classification 
      PF: PF fan heater abnormality 
Cause 
      Fan heater /Lw (DH4) high temperature abnormality 
      The temperature sensor /4 (TEMS/4) detects the prescribed or higher value continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  AC drive board in PF (ACDB) 
        •  Fan heater /Lw (DH4) 
        •  Temperature sensor /4 (TEMS/4) 
        •  Dehumidifier fans /3 (FM13) and /4 (FM14) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connection between ACDB and the noise filter of PF. 
       2.  Check the connector connection and the wiring between PFDB, the temperature sensor, and the fan and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between PFDB and ACDB, and repair it if any abnormality. 
       5.  Rotate the fan by I/O or hand, and repair/replace it if any abnormality. (Wiring diagram: PF: 23-F) 
       6.  Check the temperature and the installation condition of the fan heater and the installation condition of the temperature sensor, and 
           repair/replace it if any abnormality. (Wiring diagram: PF: 21-F, 24-F) 
       7.  Replace TEMS/4. 
       8.  Replace DH4. 
       9.  Replace FM13 and FM14. 
       10. Replace ACDB. 
       11. Replace PFDB 
Faulty part isolation DIPSW 
Control while detached 
  

2.7.11   C-0411 

Code 
      C-0411 
Classification 
      PF: PF fan heater abnormality 
Cause 
      Fan heater /Up (DH3) low temperature abnormality 
      The temperature sensor /3 (TEMS/3) detects the prescribed or lower value continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  AC drive board in PF (ACDB) 
        •  Fan heater /Up (DH3) 
        •  Temperature sensor /3 (TEMS/3) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 

                                                                             K -100 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connection between ACDB and the noise filter of PF. 
       2.  Check the connector connection and the wiring between PFDB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between PFDB and ACDB, and repair it if any abnormality. 
       5.  Check the temperature and the installation condition of the fan heater and the installation condition of the temperature sensor, and 
           repair/replace it if any abnormality. (Wiring diagram: PF: 22-D, 25-D) 
       6.  Replace TEMS3. 
       7.  Replace DH3. 
       8.  Replace ACDB. 
       9.  Replace PFDB 
Faulty part isolation DIPSW 
Control while detached 
  

2.7.12   C-0412 

Code 
      C-0412 
Classification 
       PF: PF fan heater abnormality 
Cause 
       Fan heater /Lw (DH4) low temperature abnormality 
      The temperature sensor /4 (TEMS/4) detects the prescribed or lower value continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  AC drive board in PF (ACDB) 
        •  Fan heater /Lw (DH4) 
        •  Temperature sensor /4 (TEMS/4) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connection between ACDB and the noise filter of PF. 
       2.  Check the connector connection and the wiring between PFDB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between PFDB and ACDB, and repair it if any abnormality. 
       5.  Check the temperature and the installation status of the fan heater and of the temperature sensor, and then repair it if any abnormality. 
       6.  Replace TEMS /4 
       7.  Replace DH4 
       8.  Replace ACDB. 
       9.  Replace PFDB 
Faulty part isolation DIPSW 
Control while detached 
  

2.7.13   C-0413 

Code 
      C-0413 
Classification 
       PF: PF fan heater abnormality 
Cause 
       Fan heater /Up (DH3) temperature rise abnormality 
      The temperature detected by the temperature sensor /3 (TEMS/3) has not risen to a prescribed level within a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  AC drive board in PF (ACDB) 
        •  Fan heater /Up (DH3) 
        •  Temperature sensor /3 (TEMS/3) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connection between ACDB and the noise filter of PF. 
       2.  Check the connector connection and the wiring between PFDB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between PFDB and ACDB, and repair it if any abnormality. 
       5.  Check the temperature and the installation condition of the fan heater and the installation condition of the temperature sensor, and 
           repair/replace it if any abnormality. (Wiring diagram: PF: 22-D, 25-D) 

                                                                             K -101 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       6.  Replace TEMS/3. 
       7.  Replace DH3. 
       8.  Replace ACDB. 
       9.  Replace PFDB 
       10. Replace ACDB and DH3 at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.7.14   C-0414 

Code 
      C-0414 
Classification 
       PF: PF fan heater abnormality 
Cause 
       Fan heater /Lw (DH4) temperature rise abnormality 
      The temperature detected by the temperature sensor /4 (TEMS/4) has not risen to a prescribed level within a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  PF drive board (PFDB) 
        •  AC drive board in PF (ACDB) 
        •  Fan heater /Lw (DH4) 
        •  Temperature sensor /4 (TEMS/4) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connection between ACDB and the noise filter of PF. 
       2.  Check the connector connection and the wiring between PFDB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between PFDB and ACDB, and repair it if any abnormality. 
       5.  Check the temperature and the installation condition of the fan heater and the installation condition of the temperature sensor, and 
           repair/replace it if any abnormality. (Wiring diagram: PF: 21-F, 24-F) 
       6.  Replace TEMS/4. 
       7.  Replace DH4. 
       8.  Replace ACDB. 
       9.  Replace PFDB 
       10. Replace ACDB and DH4 at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.7.15   C-0415 

Code 
      C-0415 
Classification 
      LU: LU temperature sensor abnormality 
Cause 
      The temperature sensor /2 (TEMS2) detects an error detection signal continuously for a specified period of time. (Hardware detection) 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  LU drive board (LUDB) 
        •  Dehumidification heater /2 (DH2) 
        •  Temperature sensor /2 (TEMS2) 
        •  AC Drive Assy 
        •  Main body AC drive board (ACDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between LUDB, the temperature sensor, and AC Drive Assy and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring between the main body ACDB and the heater, and repair it if any abnormality. 
       3.  Check the installation position of the temperature sensor and repair/replace it if any abnormality (Wiring diagram: LU: 8-H, 4-C) 
       4.  Replace TEMS2. 
       5.  Replace DH2. 
       6.  Replace AC Drive Assy. 
       7.  Replace LUDB. 
       8.  Replace main body ACDB. 
Faulty part isolation DIPSW 
Control while detached 
      LU paper feed is not available 
  

                                                                             K -102 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

2.7.16   C-0416 

Code 
      C-0416 
Classification 
      LU: LU dehumidifier heater abnormality 
Cause 
      Dehumidifier heater /2 (DH2) high temperature abnormality 
      The temperature sensor /2 (TEMS2) detects the prescribed or higher value continuously for a specified period of time. (Software detection) 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  LU drive board (LUDB) 
        •  Dehumidification heater /2 (DH2) 
        •  Temperature sensor /2 (TEMS2) 
        •  AC drive assy 
        •  Main body AC drive board (ACDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between LUDB, the temperature sensor, and AC Drive Assy and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring between the main body ACDB and the heater, and repair it if any abnormality. 
       3.  Check the temperature and the installation condition of the dehumidifier heater and the installation condition of the temperature 
           sensor, and repair/replace it if any abnormality. (Wiring diagram: LU: 4-B, 8-H, 4-C) 
       4.  Replace TEMS2. 
       5.  Replace DH2. 
       6.  Replace AC Drive Assy. 
       7.  Replace LUDB. 
       8.  Replacing ACDB of the main body. 
Faulty part isolation DIPSW 
Control while detached 
  

2.7.17    C-0417 

Code 
      C-0417 
Classification 
      LU: LU dehumidifier heater abnormality 
Cause 
      Dehumidifier heater /2 (DH2) low temperature abnormality 
      The temperature sensor (TEMS) detects the prescribed or lower value continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  LU drive board (LUDB) 
        •  AC Drive Assy 
        •  Main body AC drive board (ACDB) 
        •  Dehumidification heater /2 (DH2) 
        •  Temperature sensor /2 (TEMS2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between LUDB, the temperature sensor, and AC Drive Assy and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring between the main body ACDB and the heater, and repair it if any abnormality. 
       3.  Check the temperature and the installation condition of the dehumidifier heater and the installation condition of the temperature 
           sensor, and repair/replace it if any abnormality. (Wiring diagram: LU: 4-B, 8-H, 4-C) 
       4.  Replace TEMS2. 
       5.  Replace DH2. 
       6.  Replace AC Drive Assy. 
       7.  Replace LUDB. 
       8.  Replace main body ACDB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.7.18   C-0418 

Code 
      C-0418 
Classification 
      LU: LU dehumidifier heater abnormality 
Cause 

                                                                            K -103 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       Dehumidifier heater /2 (DH2) temperature rise abnormality 
      The temperature detected by the temperature sensor (TEMS) has not risen to a prescribed level within a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  LU drive board (LUDB) 
        •  Main body AC drive board (ACDB) 
        •  Dehumidification heater /2 (DH2) 
        •  Temperature sensor /2 (TEMS2) 
        •  AC drive assy 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between LUDB, the temperature sensor, and AC Drive Assy and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring between the main body ACDB and the heater, and repair it if any abnormality. 
       3.  Check the temperature and the installation condition of the dehumidifier heater and the installation condition of the temperature 
           sensor, and repair/replace it if any abnormality. (Wiring diagram: LU: 4-B, 8-H, 4-C) 
       4.  Replace TEMS2. 
       5.  Replace DH2. 
       6.  Replace AC Drive Assy. 
       7.  Replace LUDB. 
       8.  Replacing ACDB of the main body 
Faulty part isolation DIPSW 
Control while detached 
  

2.8   Solution 4 (C-1001_1126) 

2.8.1   C-1005 

Code 
      C-1005 
Classification 
       FS: FS abnormality 
Cause 
      Communication error. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  FNS control board (FNSCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Turn OFF the sub power switch, and then turn OFF the main power switch. Then unplug all the power plug. Restart the main body 
           after 10 seconds. 
       2.  Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
       3.  Check the connector connection of the control board and the drive board in each option, and repair it if any abnormality. 
       4.  Rewrite the firmware of the option. 
       5.  Replace the control board of the option corresponds to the malfunction code. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.2   C-1006 

Code 
      C-1006 
Classification 
       FD: FD abnormality 
Cause 
      Communication error. 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  FD control board (FDCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 

                                                                             K -104 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        1.  Turn OFF the sub power switch, and then turn OFF the main power switch. Then unplug all the power plug. Restart the main body 
           after 10 seconds. 
       2.  Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
       3.  Check the connector connection of the control board and the drive board in each option, and repair it if any abnormality. 
       4.  Rewrite the firmware of the option. 
       5.  Replace the control board of the option corresponds to the malfunction code. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.3   C-1007 

Code 
      C-1007 
Classification 
      SD: SD-506 abnormality 
Cause 
      Communication error. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  SD control board (SDCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Turn OFF the sub power switch, and then turn OFF the main power switch. Then unplug all the power plug. Restart the main body 
           after 10 seconds. 
       2.  Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
       3.  Check the connector connection of the control board and the drive board in each option, and repair it if any abnormality. 
       4.  Rewrite the firmware of the option. 
       5.  Replace the control board of the option corresponds to the malfunction code. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.4   C-1009 

Code 
      C-1009 
Classification 
       PB: PB abnormality 
Cause 
      Communication error between Main CPU in the PB control board (PBCB) and Sub CPU1. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  Control program 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Turn OFF the sub power switch and then turn OFF the main power switch. Then unplug all the power plug. Restart the main body after 
           10 seconds. 
       2.  Check the connector connection of the control board and the drive board in PB, and repair it if any abnormality. 
       3.  Rewrite the firmware of PB. 
       4.  Replace PBCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.5   C-1010 

Code 
      C-1010 
Classification 
       PB: PB abnormality 
Cause 
      Communication error between Main CPU in the PB control board (PBCB) and Sub CPU2. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  Control program 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 

                                                                             K -105 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection of the control board and the drive board in PB, and repair it if any abnormality. 
       3.  Rewrite the firmware of PB. 
       4.  Replace PBCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.6    C-1011 

Code 
      C-1011 
Classification 
       PB control board (PBCB) 
Cause 
       Paper feed error between the main body and PB. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  Control program 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
       3.  Check the connector connection of the control board and the drive board in each option, and repair it if any abnormality. 
       4.  Rewrite the firmware of the option. 
       5.  Replace the control board of the option corresponds to the malfunction code. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.7   C-1012 

Code 
      C-1012 
Classification 
      GP : GP-501 abnormality 
Causes 
      Communication abnormality. 
Resulting operation 
      The main body and the GP stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Punch Controller PCB 
Correction 
       Error conditions are cleared by turning OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  "Please call service" is displayed on the touch panel. 
        
Procedure 
        1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the all the power plugs. Restart the main body 
           after 10 seconds. 
       2.  Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
       3.  Check the connector connection of the control board and the drive board in each option, and repair it if any abnormality. 
       4.  Rewrite the firmware of the option. 
       5.  Replace the control board of the option corresponds to the malfunction code. 
DipSW 
Control during separation 
  

2.8.8   C-1013 

Code 
      C-1013 
Classification 
       RU: RU-509 abnormality 
Cause 
      Communication error. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 

                                                                             K -106 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  Printer control board (PRCB) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Turn OFF the sub power switch and unplug the power plug. Restart the main body after 10 seconds. 
       2.  Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
       3.  Check the connector connection of the control board and the drive board in each option, and repair it if any abnormality. 
       4.  Rewrite the firmware of the option. 
       5.  Replace the control board of the option corresponds to the malfunction code. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.9   C-1014 

Code 
       C-1014 
Classification 
       RU : RU-506 abnormality 
Causes 
       Communication abnormality. 
Resulting operation 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  RU control board (RUCB) 
Correction 
       Error conditions are cleared by turning OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  "Please call service" is displayed on the touch panel. 
        
Procedure 
        1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the all the power plugs. Restart the main body 
           after 10 seconds. 
       2.  Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
       3.  Check the connector connection of the control board and the drive board in each option, and repair it if any abnormality. 
       4.  Rewrite the firmware of the option. 
       5.  Replace the control board of the option corresponds to the malfunction code. 
DipSW 
Control during separation 
  

2.8.10   C-1101 (FS-531/612) 

Code 
       C-1101 (FS-531/612) 
Classification 
       FS: FS-531/612 abnormality 
Cause 
      The shift unit does not get to the shift position or the home position within a specified period of time. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  Shift roller motor (M2) 
        •  Shift roller home sensor (PS18) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the shift unit, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSCB and motor/sensor, and repair it if any abnormality. 
       3.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 2-B) 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 3-B) 
       5.  Replace PS18. 
       6.  Replace M2. 
        7.  Replace FNSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.11   C-1102 (FS-521) 

Code 
       C-1102 (FS-521) 
Classification 

                                                                              K -107 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      FS: FS-521 abnormality 
Cause 
      The tray up down motor (M3) does not turn OFF even when a specified period of time elapses after it starts operations. Or, it operates for 
      more than the allowed time at a speed out of the specified one. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  FNS drive board (FNSDB) 
        •  Main tray up down motor (M3) 
        •  Main tray upper limit sensor (PS2) 
        •  Main tray lower limit sensor (PS3) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the tray up/down section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       4.  Check the sensor operation, LED emission and light-receiving path, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 
           2-B, 4-B) 
       5.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 1-B) 
       6.  Replace PS3. 
       7.  Replace LED1 and PS16. 
       8.  Replace M3. 
       9.  Replace FNSDB. 
       10. Replace FNSCB. 
Faulty part isolation DIPSW 
      DIPSW6-4 
Control while detached 
      FS main tray and stapling are not available 
  

2.8.12   C-1102 (FS-531/612) 

Code 
      C-1102 (FS-531/612) 
Classification 
      FS: FS-531/612 abnormality 
Cause 
      The main tray upper limit sensor (PS2) does not turn ON within a specified period of time after the main tray up down motor (M3) turns 
      ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  Main tray up down motor (M3) 
        •  Main tray upper limit sensor (PS2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the tray up/down section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSCB and motor/sensor, and repair it if any abnormality. 
       3.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram:FS-612: 5-B) 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 4-B) 
       5.  Replace PS2. 
       6.  Replace M3. 
       7.  Replace FNSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.13   C-1103 (FS-521) 

Code 
      C-1103 (FS-521) 
Classification 
      FS: FS-521 abnormality 
Cause 
      The alignment home sensors /Rr (PS8) and /Fr (PS31) do not turn ON within a specified period of time after the home position search 
      operation of the alignment motors /Rr (M5) and /Fr (M22) starts. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  FNS drive board (FNSDB) 

                                                                             K -108 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  Alignment motor /Rr (M5) 
        •  Alignment motor /Fr (M22) 
        •  Alignment home sensor /Rr (PS8) 
        •  Alignment home sensor /Fr (PS31) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:FS-521:4-G) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram:FS-521:3-G, 4-G) 
       5.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       6.  Replace PS8 or PS31. 
       7.  Replace M5. 
       8.  Replace M22. 
       9.  Replace FNSDB. 
       10. Replace FNSCB. 
Faulty part isolation DIPSW 
       DIPSW6-4 
Control while detached 
       FS main tray and stapling are not available 
  

2.8.14   C-1103 (FS-531/612) 

Code 
      C-1103 (FS-531/612) 
Classification 
       FS: FS-531/612 abnormality 
Cause 
      The alignment home sensor /Up (PS8) does not turn ON or OFF within a specified period of time after the alignment motor (M5) turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Relay board (RB) 
        •  Alignment motor /Up (M5) 
        •  Alignment home sensor /Up (PS8) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 7-I) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 3-B) 
       5.  Replace PS8. 
       6.  Replace M5. 
       7.  Replace RB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.15     C-1104 (FS-521) 

Code 
      C-1104 (FS-521) 
Classification 
       FS: FS-521 abnormality 
Cause 
      The main tray paper exit motor (M7) operates for more than the allowed time at a speed out of the specified one. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  FNS drive board (FNSDB) 
        •  Main tray exit motor (M7) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between FNSDB and the motor, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 2-B) 
       4.  Replace M7. 

                                                                             K -109 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       5.  Replace FNSDB. 
       6.  Replace FNSCB. 
Faulty part isolation DIPSW 
      DIPSW6-4 
Control while detached 
      FS main tray and stapling are not available 
  

2.8.16   C-1104 (FS-531/612) 

Code 
      C-1104 (FS-531/612) 
Classification 
      FS: FS-531/612 abnormality 
Cause 
      A prescribed speed is not obtained within a specified period of time after the paper exit roller motor (M7) turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  Paper exit roller motor (M7) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between FNSCB and the motor, and repair it if any abnormality. 
       2.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 1-B) 
       3.  Replace M7. 
       4.  Replace FNSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.17     C-1105 (FS-521) 

Code 
      C-1105 (FS-521) 
Classification 
      FS: FS-521 abnormality 
Cause 
      The paper exit opening unit does not get to the specified opening position within a specified period of time after the paper exit opening 
      motor (M8) starts operations. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  Paper exit opening motor (M8) 
        •  Paper exit opening home sensor (PS12) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the paper exit opening section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-521:2-C) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram:FS-521:3-B) 
       6.  Replace PS12. 
       7.  Replace M8. 
       8.  Replace FNSDB. 
       9.  Replace FNSCB. 
Faulty part isolation DIPSW 
      DIPSW6-4 
Control while detached 
      FS main tray and stapling are not available 
  

2.8.18   C-1105 (FS-531/612) 

Code 
      C-1105 (FS-531/612) 
Classification 
      FS: FS-531/612 abnormality 
Cause 
      The paper exit home sensor (PS12) does not turn ON or OFF within a specified period of time after the paper exit opening motor (M8) 
      turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 

                                                                             K -110 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  Paper exit opening motor (M8) 
        •  Paper exit home sensor (PS12) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the paper exit opening section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 3-B) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 2-B) 
       5.  Replace PS12. 
       6.  Replace M8. 
       7.  Replace FNSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.19   C-1106 (FS-521) 

Code 
      C-1106 (FS-521) 
Classification 
       FS: FS-521 abnormality 
Cause 
      The stapler movement home sensor (PS11) does not turn ON within a specified period of time after the home position search operation of 
      the stapler movement motor (M11) starts. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  FNS drive board (FNSDB) 
        •  Stapler movement motor (M11) 
        •  Stapler movement home sensor (PS11) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the stapler movement section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 5-G) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 2-G) 
       6.  Replace PS11. 
       7.  Replace M11. 
       8.  Replace FNSDB. 
       9.  Replace FNSCB. 
Faulty part isolation DIPSW 
       DIPSW6-3 
Control while detached 
      The use of staple is unavailable 
  

2.8.20   C-1106 (FS-531/612) 

Code 
      C-1106 (FS-531/612) 
Classification 
       FS: FS-531/612 abnormality 
Cause 
      The Stapler movement home sensor (PS11) does not turn ON within a specified period of time after the stapler movement motor (M11) 
      turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Relay board (RB) 
        •  Stapler movement motor (M11) 
        •  Stapler movement home sensor (PS11) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the stapler movement section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RB and motor/sensor, and repair it if any abnormality. 

                                                                             K -111 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 6-I) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 7-I) 
       5.  Replace PS11. 
       6.  Replace M11. 
        7.  Replace RB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.21   C-1107 (FS-521) 

Code 
      C-1107 (FS-521) 
Classification 
       FS: FS-521 abnormality (skew rotation) 
Cause 
      The stapler rotation home sensor (PS14) does not turn ON within a specified period of time after the home position search operation of the 
      stapler rotation motor (M4) starts. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  FNS drive board (FNSDB) 
        •  Stapler rotation motor (M4) 
        •  Stapler rotation home sensor (PS14) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the stapler rotation section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 5-G) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 2-G) 
       6.  Replace PS14. 
        7.  Replace M4. 
       8.  Replace FNSDB. 
       9.  Replace FNSCB. 
Faulty part isolation DIPSW 
       DIPSW6-3 
Control while detached 
      The use of staple is unavailable 
  

2.8.22     C-1107 (FS-612) 

Code 
      C-1107 (FS-612) 
Classification 
       FS: FS-612 abnormality 
Cause 
      The clincher rotation home sensor (PS14) does not turn ON or OFF within a specified period of time after the clincher rotation motor (M4) 
      turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Relay board (RB) 
        •  Clincher rotation motor (M4) 
        •  Clincher rotation home sensor (PS14) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the stapler rotation section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring betweenRB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 3-I) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 5-I) 
       5.  Replace PS14. 
       6.  Replace M4. 
        7.  Replace RB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.23   C-1108 (FS-521) 

Code 
      C-1108 (FS-521) 

                                                                              K -112 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Classification 
       FS: FS-521 abnormality (vertical rotation) 
Cause 
      The stapler rotation home sensor (PS14) does not turn ON within a specified period of time after the home position search operation of the 
      stapler rotation motor (M4) starts. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  FNS drive board (FNSDB) 
        •  Stapler rotation motor (M4) 
        •  Stapler rotation home sensor (PS14) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the stapler rotation section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 5-G) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 2-G) 
       6.  Replace PS14. 
       7.  Replace M4. 
       8.  Replace FNSDB. 
       9.  Replace FNSCB. 
Faulty part isolation DIPSW 
       DIPSW6-3 
Control while detached 
      The use of staple is unavailable 
  

2.8.24   C-1108 (FS-612) 

Code 
      C-1108 (FS-612) 
Classification 
       FS: FS-612 abnormality 
Cause 
      The stapler rotation home sensor (PS13) does not turn ON within a specified period of time after the stapler rotation motor (M6) turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Relay board (RB) 
        •  Stapler rotation motor (M6) 
        •  Stapler rotation home sensor (PS13) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the stapler rotation section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring betweenRB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 4-I) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 4-I) 
       5.  Replace PS13. 
       6.  Replace M6. 
       7.  Replace RB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.25   C-1109 (FS-521) 

Code 
      C-1109 (FS-521) 
Classification 
       FS: FS-521 abnormality 
Cause 
      After the stapler motor /Fr (M31) starts operations, it does not complete operations within a specified period of time, and the stapler home 
      sensor /Fr (PS41) does not turn ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  FNS drive board (FNSDB) 
        •  Stapler board (SB) 
        •  Stapler motor /Fr (M31) 
        •  Stapler home sensor /Fr (PS41) 

                                                                             K -113 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between FNSDB and the stapler, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       3.  Replacing the stapler assy 
       4.  Replace FNSDB. 
       5.  Replace FNSCB. 
Faulty part isolation DIPSW 
       DIPSW6-3 
Control while detached 
      The use of staple is unavailable 
  

2.8.26   C-1109 (FS-531/612) 

Code 
      C-1109 (FS-531/612) 
Classification 
       FS: FS-531/612 abnormality 
Cause 
      The stapler motor home sensor /Fr (PS31) does not turn ON within a specified period of time after the stapler motor /Fr (M14) turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Relay board (RB) 
        •  Stapler motor /Fr (M14) 
        •  Stapler motor home sensor /Fr (PS31) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between RB and the stapler, and repair it if any abnormality. 
       2.  Replacing the stapler assy 
       3.  Replace RB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.27     C-1110 (FS-521) 

Code 
      C-1110 (FS-521) 
Classification 
       FS: FS-521 abnormality 
Cause 
      After the stapler motor /Rr (M30) starts operations, it does not complete operations within a specified period of time, and the stapler home 
      sensor /Rr (PS40) does not turn ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  FNS drive board (FNSDB) 
        •  Stapler board (SB) 
        •  Stapler motor /Rr (M30) 
        •  Stapler home sensor /Rr (PS40) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between FNSDB and the stapler, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       3.  Replacing the stapler assy 
       4.  Replace FNSDB. 
       5.  Replace FNSCB. 
Faulty part isolation DIPSW 
       DIPSW6-3 
Control while detached 
      The use of staple is unavailable 
  

2.8.28     C-1110 (FS-531/612) 

Code 
      C-1110 (FS-531/612) 

                                                                             K -114 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Classification 
       FS: FS-531/612 abnormality 
Cause 
      The stapler motor home sensor /Rr (PS30) does not turn ON within a specified period of time after the stapler motor /Rr (M9) turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Relay board (RB) 
        •  Stapler motor /Rr (M9) 
        •  Stapler motor home sensor /Rr (PS30) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between RB and the stapler, and repair it if any abnormality. 
       2.  Replacing the stapler assy 
       3.  Replace RB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.29   C-1111 (FS-612) 

Code 
      C-1111 (FS-612) 
Classification 
       FS: FS-612 abnormality 
Cause 
      The clincher motor home sensor /Fr (PS33) does not turn ON within a specified period of time after the clincher motor /Fr (M15) turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Relay board (RB) 
        •  Clincher motor /Fr (M15) 
        •  Clincher motor home sensor /Fr (PS33) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between RB and the stapler, and repair it if any abnormality. 
       2.  Replacing the stapler assy 
       3.  Replace RB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.30   C-1112 (FS-612) 

Code 
      C-1112 (FS-612) 
Classification 
       FS: FS-612 abnormality 
Cause 
      The clincher motor home sensor /Rr (PS32) does not turn ON within a specified period of time after the clincher motor /Rr (M10) turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Relay board (RB) 
        •  Clincher motor /Rr (M10) 
        •  Clincher motor home sensor /Rr (PS32) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between RB and the stapler, and repair it if any abnormality. 
       2.  Replacing the stapler assy 
       3.  Replace RB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.8.31   C-1113 (FS-521) 

Code 
      C-1113 (FS-521) 
Classification 

                                                                              K -115 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      FS: FS-521 abnormality 
Cause 
      After the home position search operation of the rear stopper motor (M26) starts, the rear stopper home sensor (PS35) does not turn ON 
      within a specified period of time. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  FNS drive board (FNSDB) 
        •  Rear stopper motor (M26) 
        •  Rear stopper home sensor (PS35) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the stapler rotation section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 4-G) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 2-G) 
       6.  Replace PS14. 
       7.  Replace M26. 
       8.  Replace FNSDB. 
       9.  Replace FNSCB. 
Faulty part isolation DIPSW 
      DIPSW6-4 
Control while detached 
      FS main tray and stapling are not available 
  

2.8.32   C-1113 (FS-612) 

Code 
      C-1113 (FS-612) 
Classification 
      FS: FS-612 abnormality 
Cause 
      After the home position search operation of saddle stitching stopper motor (M18) starts, the saddle stitching stopper home sensor (PS23) 
      does not turn ON within a specified period of time. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Relay board (RB) 
        •  Saddle stitching stopper motor (M18) 
        •  Saddle stitching stopper home sensor (PS23) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the saddle stitching section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 3-I) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 1-I) 
       5.  Replace PS23. 
       6.  Replace M18. 
       7.  Replace RB. 
Faulty part isolation DIPSW 
      DIPSW18-5 
Control while detached 
      The use of multi-half folding, saddle stitching and multi-tri-folding unavailable 
  

2.8.33   C-1114 (FS-612) 

Code 
      C-1114 (FS-612) 
Classification 
      FS: FS-612 abnormality 
Cause 
      The alignment home sensor /Lw (PS24) does not turn ON within a specified period of time after the alignment motor /Lw (M16) turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Relay board (RB) 
        •  Alignment motor /Lw (M16) 
        •  Alignment home sensor /Lw (PS24) 
Correction 

                                                                             K -116 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the stacker section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 2-I) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 1-I) 
       5.  Replace PS24. 
       6.  Replace M16. 
        7.  Replace RB. 
Faulty part isolation DIPSW 
       DIPSW18-5 
Control while detached 
      The use of multi-half folding, saddle stitching and multi-tri-folding unavailable 
  

2.8.34   C-1115 (FS-612) 

Code 
      C-1115 (FS-612) 
Classification 
       FS: FS-612 abnormality 
Cause 
      The folding knife home sensor (PS22) does not turn ON within a specified period of time after the folding knife motor (M19) turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Relay board (RB) 
        •  Folding knife motor (M19) 
        •  Folding knife home sensor (PS22) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the folding section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 2-I) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 1-I) 
       5.  Replace PS22. 
       6.  Replace M19. 
        7.  Replace RB. 
Faulty part isolation DIPSW 
       DIPSW18-5 
Control while detached 
      The use of multi-half folding, saddle stitching and multi-tri-folding unavailable 
       (FS not connected) 
  

2.8.35   C-1116 (FS-612) 

Code 
      C-1116 (FS-612) 
Classification 
       FS: FS-612 abnormality 
Cause 
      A prescribed speed is not obtained within a specified period of time after the folding transfer motor (M20) turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Relay board (RB) 
        •  Folding transfer motor (M20) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the folding section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RB and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 7-I) 
       4.  Replace M20. 
       5.  Replace RB. 
Faulty part isolation DIPSW 
       DIPSW18-5 
Control while detached 
      The use of multi-half folding, saddle stitching and multi-tri-folding unavailable 

                                                                              K -117 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       (FS not connected) 
  

2.8.36   C-1124 

Code 
      C-1124 
Classification 
       PI: PI abnormality 
Cause 
      The tray upper limit sensor /Lw (PS209) or the tray lower limit sensor /Lw (PS210) does not turn ON within a specified period of time after 
      the Tray lift motor /Lw (M202) turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  PI drive board (PIDB) 
        •  Tray lift motor /Lw (M202) 
        •  Tray upper limit sensor /Lw (PS209) 
        •  Tray lower limit sensor /Lw (PS210) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the PI lower tray section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PIDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PI: 5-B) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: PI: 6-B) 
       5.  Replace M202. 
       6.  Replace PS209. 
        7.  Replace PS210. 
       8.  Replace PIDB. 
Faulty part isolation DIPSW 
       DIPSW18-6 
Control while detached 
       PI unusable 
       (PI not connected) 
  

2.8.37   C-1125 

Code 
      C-1125 
Classification 
       PI: PI abnormality 
Cause 
      The tray upper limit sensor /Up (PS205) or the tray lower limit sensor /Up (PS204) does not turn ON within a specified period of time after 
      the tray lift motor /Up (M201) turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  PI drive board (PIDB) 
        •  Tray lift motor /Up (M201) 
        •  Tray upper limit sensor /Up (PS205) 
        •  Tray lower limit sensor /Up (PS204) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the PI lower tray section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PIDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PI: 4-B) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: PI: 4-B) 
       5.  Replace M201. 
       6.  Replace PS204. 
        7.  Replace PS205. 
       8.  Replace PIDB. 
Faulty part isolation DIPSW 
       DIPSW18-6 
Control while detached 
       PI unusable 
       (PI not connected) 
  

2.8.38   C-1126 

Code 

                                                                              K -118 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                 K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      C-1126 
Classification 
      PI: PI abnormality 
Cause 
      A prescribed speed is not obtained within a specified period of time after the conveyance motor (M203) turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  PI drive board (PIDB) 
        •  Conveyance motor (M203) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PIDB and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 4-B) 
       4.  Replace M203. 
       5.  Replace PIDB. 
Faulty part isolation DIPSW 
      DIPSW18-6 
Control while detached 
      PI unusable 
      (PI not connected) 
  

2.9   Solution 5 (C-1127_1230) 

2.9.1   C-1127 

Code 
      C-1127 
Classification 
      PK: PK abnormality 
Cause 
      The punch shift home sensor (PS303) does not turn ON within a specified period of time after the punch shift motor (M302) turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  Punch drive board (PDB) 
        •  Punch shift motor (M302) 
        •  Punch shift home sensor (PS303) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the punch kit, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PK:7-C) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. 
       5.  Replace M302. 
       6.  Replace PS303. 
       7.  Replace PDB. 
Faulty part isolation DIPSW 
      DIPSW19-5 
Control while detached 
      PK unusable 
      (PK not connected) 
  

2.9.2   C-1132 

Code 
      C-1132 
Classification 
      PK: PK abnormality 
Cause 
      The punch home sensor (PS301) does not turn ON within a specified period of time after the punch motor (M301) turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  Punch drive board (PDB) 
        •  Punch motor (M301) 
        •  Punch home sensor (PS301) 

                                                                           K -119 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the punch kit, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PK: 4-C) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. 
       5.  Replace M301. 
       6.  Replace PS301. 
       7.  Replace PDB. 
Faulty part isolation DIPSW 
      DIPSW19-5 
Control while detached 
      PK unusable 
      (PK not connected) 
  

2.9.3    C-1137 (FS-531/612) 

Code 
      C-1137 (FS-531/612) 
Classification 
      FS: FS-531/612 abnormality 
Cause 
      The gate home sensor (PS16) does not turn ON within a specified period of time after the gate motor (M12) turns ON. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  Gate motor (M12) 
        •  Gate home sensor (PS16) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between FNSCB and motor/sensor, and repair it if any abnormality. 
       2.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-612: 2-B) 
       3.  Replace FNSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.9.4   C-1140 (FS-521) 

Code 
      C-1140 (FS-521) 
Classification 
      FS: FS-521 abnormality 
Cause 
      After the paper exit arm motor /Fr (M23) starts operations, it does not complete operations within a specified period of time, and the paper 
      exit arm home sensor /Fr (PS9) does not turn ON. Or, it operates for more than the allowed time at a speed out of the specified one. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  FNS drive board (FNSDB) 
        •  Paper exit arm motor (M23) 
        •  Paper exit arm home sensor (PS9) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the paper exit arm section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 6-G) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 3-G) 
       6.  Replace PS9. 
       7.  Replace M23. 
       8.  Replace FNSDB. 
       9.  Replace FNSCB. 
Faulty part isolation DIPSW 
      DIPSW6-4 
Control while detached 

                                                                             K -120 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       FS main tray and stapling are not available 
  

2.9.5   C-1141 (FS-521) 

Code 
      C-1141 (FS-521) 
Classification 
       FS: FS-521 abnormality 
Cause 
      The stack assist home sensor (PS32) does not turn ON within a specified period of time after the home position search operation of the 
      stack assist motor (M24) starts. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  FNS drive board (FNSDB) 
        •  Stack assist guide motor (M24) 
        •  Stack assist home sensor (PS32) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the stapler rotation section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:FS-521:5-G) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram:FS-521:3-B) 
       6.  Replace PS32. 
       7.  Replace M24. 
       8.  Replace FNSDB. 
       9.  Replace FNSCB. 
Faulty part isolation DIPSW 
       DIPSW6-4 
Control while detached 
       FS main tray and stapling are not available 
  

2.9.6   C-1142 (FS-521) 

Code 
      C-1142 (FS-521) 
Classification 
       FS: FS-521 abnormality 
Cause 
      The intermediate roller home sensor (PS33) does not turn ON even after a specified period of time after the intermediate roller open/close 
      motor (M25) starts the home position search operation. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  FNS drive board (FNSDB) 
        •  Alignment motor /Fr (M22) 
        •  Alignment motor /Rr (M5) 
        •  Intermediate roller release solenoid (SD7) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the intermediate roller open close section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 4-G) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 3-G) 
       6.  Replace PS33. 
       7.  Replace M25. 
       8.  Replace FNSDB. 
       9.  Replace FNSCB. 
Faulty part isolation DIPSW 
       DIPSW6-4 
Control while detached 
       FS main tray and stapling are not available 
  

2.9.7   C-1143 (FS-521) 

Code 
      C-1143 (FS-521) 

                                                                             K -121 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Classification 
      FS: FS-521 abnormality 
Cause 
      The conveyance motor (M1) does not turn ON when the start button is turned ON. Or the conveyance motor (M1) does not shift the speed 
      for each processing. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  Conveyance motor (M1) 
        •  Paper exit sensor (PS37) 
        •  FNS entrance sensor (PS4) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 1-B) 
       5.  Replace M1. 
       6.  Replace FNSDB. 
       7.  Replace FNSCB. 
Faulty part isolation DIPSW 
      DIPSW6-5 
Control while detached 
      FS unusable 
      (FS not connected) 
  

2.9.8    C-1144 (FS-521) 

Code 
      C-1144 (FS-521) 
Classification 
      FS: FS-521 abnormality 
Cause 
      The paper exit alignment plate home sensor /Fr (PS18) does not turn ON within a specified period of time after the paper exit alignment 
      motor /Fr (M15) starts the home position search operation. Or, even after a specified period of time after M15 starts the operation, it does 
      not stop. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  FNS drive board (FNSDB) 
        •  Paper exit alignment motor /Fr (M15) 
        •  Paper exit alignment plate home sensor /Fr (PS18) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the front side of the paper exit alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 8-G) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 7-G) 
       6.  Replace PS18. 
       7.  Replace M15. 
       8.  Replace FNSDB. 
       9.  Replace FNSCB. 
Faulty part isolation DIPSW 
      DIPSW6-4 
Control while detached 
      FS main tray and stapling are not available 
  

2.9.9   C-1145 (FS-521) 

Code 
      C-1145 (FS-521) 
Classification 
      FS: FS-521 abnormality 
Cause 
      The paper exit alignment plate home sensor /Rr (PS19) does not turn ON within a specified period of time after the paper exit alignment 
      motor /Rr (M14) starts the home position search operation. Or, even after a specified period of time after M14 starts the operation, it does 
      not stop. 
Measures to take when alert occurs 

                                                                             K -122 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  FNS drive board (FNSDB) 
        •  Paper exit alignment motor /Rr (M14) 
        •  Paper exit alignment plate home sensor /Rr (PS19) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the rear side of the paper exit alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 7-G) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 7-G) 
       6.  Replace PS19. 
       7.  Replace M14. 
       8.  Replace FNSDB. 
       9.  Replace FNSCB. 
Faulty part isolation DIPSW 
      DIPSW6-4 
Control while detached 
      FS main tray and stapling are not available 
  

2.9.10   C-1146 (FS-521) 

Code 
      C-1146 (FS-521) 
Classification 
      FS: FS-521 abnormality 
Cause 
      The bypass roller release home sensor (PS13) does not turn ON within a specified period of time after the bypass roller release motor 
      (M12) starts the home position search operation. Or, even after a specified period of time after M12 starts the operation, it does not stop. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  FNS drive board (FNSDB) 
        •  Bypass roller release motor (M12) 
        •  Bypass roller release home sensor (PS13) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the bypass roller section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:FS-521:5-C) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram:FS-521:4-B) 
       6.  Replace PS13. 
       7.  Replace M12. 
       8.  Replace FNSDB. 
       9.  Replace FNSCB. 
Faulty part isolation DIPSW 
      DIPSW6-4 
Control while detached 
      FS main tray and stapling are not available 
  

2.9.11   C-1147 (FS-521) 

Code 
      C-1147 (FS-521) 
Classification 
      FS: FS-521 abnormality 
Cause 
      The paper exit alignment plate retraction home sensor (PS24) does not turn ON within a specified period of time after the paper exit 
      alignment plate retraction home motor (M18) starts the home position search operation. Or, even after a specified period of time after M18 
      starts the operation, it does not stop. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  FNS drive board (FNSDB) 
        •  Paper exit alignment plate retraction motor (M18) 
        •  Paper exit alignment plate retraction home sensor (PS24) 

                                                                             K -123 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the paper exit alignment retraction section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 7-M) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 4-G) 
       6.  Replace PS24. 
       7.  Replace M18. 
       8.  Replace FNSDB. 
       9.  Replace FNSCB. 
Faulty part isolation DIPSW 
       DIPSW6-4 
Control while detached 
       FS main tray and stapling are not available 
  

2.9.12   C-1148 (FS-521) 

Code 
      C-1148 (FS-521) 
Classification 
       FS: FS-521 abnormality 
Cause 
      The stacker entrance roller release home sensor (PS23) does not turn ON within a specified period of time after the stacker entrance roller 
      release motor (M16) starts the home position search operation. Or, even after a specified period of time after M16 starts the operation, it 
      does not stop. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNS control board (FNSCB) 
        •  FNS drive board (FNSDB) 
        •  Stacker entrance roller release motor (M16) 
        •  Stacker entrance roller release home sensor (PS23) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the stacker entrance roller release section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FNSDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between FNSDB and FNSCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 6-G) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FS-521: 6-G) 
       6.  Replace PS23. 
       7.  Replace M16. 
       8.  Replace FNSDB. 
       9.  Replace FNSCB. 
Faulty part isolation DIPSW 
       DIPSW6-4 
Control while detached 
       FS main tray and stapling are not available 
  

2.9.13   C-1201 

Code 
      C-1201 
Classification 
       LS (1st tandem): LS abnormality 
Cause 
      The stacker tray encoder sensor (PS2) does not turn ON within a specified period of time after the stacker tray up down motor (M1) turns 
      ON. Or, the initial operation or the stacker tray down operation is not completed within a specified period of time. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Stacker tray up down motor (M1) 
        •  LS control board (LSCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the stacker tray up down section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between LSCB and motor/sensor, and repair it if any abnormality. 

                                                                             K -124 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:LS-505:5-A) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram:LS-505:5-A) 
       5.  Replace PS2. 
       6.  Replace M1. 
       7.  Replace LSCB. 
Faulty part isolation DIPSW 
       DIPSW6-6 
Control while detached 
       LS (1st tandem) unusable 
  

2.9.14   C-1202 

Code 
      C-1202 
Classification 
      LS (1st tandem): LS abnormality 
Cause 
      The shift unit home sensor (PS11) does not turn ON within a specified period of time after the shift unit motor (M5) turns ON. Or, PS11 
      does not turn ON within a specified period of time. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Shift unit motor (M5) 
        •  LS control board (LSCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the shift unit section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between LSCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: LS-505: 6-A) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: LS-505: 5-H) 
       5.  Replace PS11. 
       6.  Replace M5. 
       7.  Replace LSCB. 
Faulty part isolation DIPSW 
       DIPSW6-6 
Control while detached 
      LS (1st tandem) unusable 
  

2.9.15   C-1203 

Code 
      C-1203 
Classification 
       LS (1st tandem): LS abnormality 
Cause 
      The alignment plate home sensor (PS12) does not turn ON within a specified period of time after the alignment motor (M7) turns ON. Or, 
       PS12 does not turn ON within a specified period of time. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Alignment motor (M7) 
        •  LS control board (LSCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between LSCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: LS-505: 7-A) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: LS-505: 5-H) 
       5.  Replace PS12. 
       6.  Replace M7. 
       7.  Replace LSCB. 
Faulty part isolation DIPSW 
       DIPSW6-6 
Control while detached 
       LS (1st tandem) unusable 
  

2.9.16   C-1204 

Code 
      C-1204 
Classification 

                                                                             K -125 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      LS (1st tandem): LS abnormality 
Cause 
      The grip conveyance home sensor (PS5) does not turn ON within a specified period of time after the grip conveyance motor (M4) turns 
      ON. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Grip conveyance motor (M4) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the grip conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between LSCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: LS-505: 6-A) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: LS-505: 2-H) 
       5.  Replace PS5. 
       6.  Replace M4. 
       7.  Replace LSCB. 
Faulty part isolation DIPSW 
       DIPSW6-6 
Control while detached 
      LS (1st tandem) unusable 
  

2.9.17   C-1205 

Code 
      C-1205 
Classification 
      LS (1st tandem): LS abnormality 
Cause 
      The stacker tray upper limit switch (MS2) is ON when the stacker tray up down motor (M1) is in the up operation. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Stacker tray up down motor (M1) 
        •  Stacker tray upper limit switch (MS2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the stacker tray up down section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between LSCB and motor/switch, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:LS-505:5-A) 
       4.  Check the operation of the switch, and repair/replace it if any abnormality. (Wiring diagram: LS-505: 7-A) 
       5.  Replace MS2. 
       6.  Replace M1. 
       7.  Replace LSCB. 
Faulty part isolation DIPSW 
       DIPSW6-6 
Control while detached 
      LS (1st tandem) unusable 
  

2.9.18   C-1206 

Code 
      C-1206 
Classification 
       LS (1st tandem): LS abnormality 
Cause 
      The stacker tray lower limit switch (MS3) is ON when the stacker tray up down motor (M1) is in the down operation. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Stacker tray up down motor (M1) 
        •  Stacker tray lower limit switch (MS3) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the stacker tray up down section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between LSCB and motor/switch, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:LS-505:5-A) 

                                                                             K -126 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       4.  Check the operation of the switch, and repair/replace it if any abnormality. (Wiring diagram: LS-505: 7-A) 
       5.  Replace MS3. 
       6.  Replace M1. 
       7.  Replace LSCB. 
Faulty part isolation DIPSW 
       DIPSW6-6 
Control while detached 
       LS (1st tandem) unusable 
  

2.9.19   C-1211 

Code 
      C-1211 
Classification 
      LS (2nd tandem): LS abnormality 
Cause 
      The stacker tray encoder sensor (PS2) does not turn ON within a specified period of time after the stacker tray up down motor (M1) turns 
      ON. Or, the initial operation or the stacker tray down operation is not completed within a specified period of time. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Stacker tray up down motor (M1) 
        •  LS control board (LSCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the stacker tray up down section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between LSCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:LS-505:5-A) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram:LS-505:5-A) 
       5.  Replace PS2. 
       6.  Replace M1. 
       7.  Replace LSCB. 
Faulty part isolation DIPSW 
       DIPSW6-6 
Control while detached 
      LS (1st tandem) unusable 
  

2.9.20   C-1212 

Code 
      C-1212 
Classification 
       LS (2nd tandem): LS abnormality 
Cause 
      The shift unit home sensor (PS11) does not turn ON within a specified period of time after the shift unit motor (M5) turns ON. Or, PS11 
      does not turn ON within a specified period of time. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Shift unit motor (M5) 
        •  LS control board (LSCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the shift unit section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between LSCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: LS-505: 6-A) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: LS-505: 5-H) 
       5.  Replace PS11. 
       6.  Replace M5. 
       7.  Replace LSCB. 
Faulty part isolation DIPSW 
       DIPSW6-6 
Control while detached 
       LS (1st tandem) unusable 
  

2.9.21   C-1213 

Code 
      C-1213 
Classification 
       LS (2nd tandem): LS abnormality 

                                                                             K -127 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Cause 
      The alignment plate home sensor (PS12) does not turn ON within a specified period of time after the alignment motor (M7) turns ON. Or, 
      PS12 does not turn ON within a specified period of time. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Alignment motor (M7) 
        •  LS control board (LSCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between LSCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: LS-505: 7-A) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: LS-505: 5-H) 
       5.  Replace PS12. 
       6.  Replace M7. 
       7.  Replace LSCB. 
Faulty part isolation DIPSW 
      DIPSW6-6 
Control while detached 
      LS (1st tandem) unusable 
  

2.9.22   C-1214 

Code 
      C-1214 
Classification 
      LS (2nd tandem): LS abnormality 
Cause 
      The grip conveyance home sensor (PS5) does not turn ON within a specified period of time after the grip conveyance motor (M4) turns 
      ON. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Grip conveyance motor (M4) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the grip conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between LSCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: LS-505: 6-A) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: LS-505: 2-H) 
       5.  Replace PS5. 
       6.  Replace M4. 
       7.  Replace LSCB. 
Faulty part isolation DIPSW 
      DIPSW6-6 
Control while detached 
      LS (1st tandem) unusable 
  

2.9.23   C-1215 

Code 
      C-1215 
Classification 
      LS (2nd tandem): LS abnormality 
Cause 
      The stacker tray upper limit switch (MS2) is ON when the stacker tray up down motor (M1) is in the up operation. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Stacker tray up down motor (M1) 
        •  Stacker tray upper limit switch (MS2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the stacker tray up down section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between LSCB and motor/switch, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:LS-505:5-A) 

                                                                             K -128 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       4.  Check the operation of the switch, and repair/replace it if any abnormality. (Wiring diagram: LS-505: 7-A) 
       5.  Replace MS2. 
       6.  Replace M1. 
       7.  Replace LSCB. 
Faulty part isolation DIPSW 
      DIPSW6-6 
Control while detached 
      LS (1st tandem) unusable 
  

2.9.24   C-1216 

Code 
      C-1216 
Classification 
      LS (2nd tandem): LS abnormality 
Cause 
      The stacker tray lower limit switch (MS3) is ON when the stacker tray up down motor (M1) is in the down operation. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Stacker tray up down motor (M1) 
        •  Stacker tray lower limit switch (MS3) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the stacker tray up down section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between LSCB and motor/switch, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:LS-505:5-A) 
       4.  Check the operation of the switch, and repair/replace it if any abnormality. (Wiring diagram: LS-505: 7-A) 
       5.  Replace MS3. 
       6.  Replace M1. 
       7.  Replace LSCB. 
Faulty part isolation DIPSW 
      DIPSW6-6 
Control while detached 
      LS (1st tandem) unusable 
  

2.9.25   C-1221 

Code 
      C-1221 
Classification 
      FD: FD abnormality 
Cause 
      The 1st folding cam home sensor (PS55) does not turn ON within a specified period of time after the 1st folding release motor (M14) turns 
      ON. 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  1st folding release motor (M14) 
        •  Folding drive board (FDB) 
        •  1st folding cam home sensor (PS55) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the 1st folding section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 1-B) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 2-B) 
       5.  Replace PS55. 
       6.  Replace M14. 
       7.  Replace FDB. 
Faulty part isolation DIPSW 
      DIPSW6-0 
Control while detached 
      The use of the folding function and the punch section is unavailable 
  

2.9.26   C-1222 

Code 
      C-1222 
Classification 
      FD: FD abnormality 

                                                                             K -129 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Cause 
      The 2nd folding cam home sensor (PS56) does not turn ON within a specified period of time after the 2nd folding release motor (M15) 
      turns ON. 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  2nd folding release motor (M15) 
        •  Folding drive board (FDB) 
        •  2nd folding cam home sensor (PS56) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the 2nd folding section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 1-B) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 2-B) 
       5.  Replace PS56. 
       6.  Replace M15. 
       7.  Replace FDB. 
Faulty part isolation DIPSW 
      DIPSW6-0 
Control while detached 
      The use of the folding function and the punch section is unavailable 
  

2.9.27   C-1223 

Code 
      C-1223 
Classification 
      FD: FD abnormality 
Cause 
      The 3rd folding cam home sensor (PS57) does not turn ON within a specified period of time after the 3rd folding release motor (M16) turns 
      ON. 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  3rd folding release motor (M16) 
        •  Folding drive board (FDB) 
        •  3rd folding cam home sensor (PS57) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the 3rd folding section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 1-B) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 2-B) 
       5.  Replace PS57. 
       6.  Replace M16. 
       7.  Replace FDB. 
Faulty part isolation DIPSW 
      DIPSW6-0 
Control while detached 
      The use of the folding function and the punch section is unavailable 
  

2.9.28   C-1224 

Code 
      C-1224 
Classification 
      FD: FD abnormality 
Cause 
      The 2 holes punch home sensor (PS8) does not turn OFF within a specified period of time after the 2-holes punch home position return 
      operation starts. Or, after the punch motor (M10) turns ON, the 2 holes punch home sensor (PS8) does not turn OFF. 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Punch motor (M10) 
        •  Punch drive board (PDB) 
        •  2 holes punch home sensor (PS8) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 

                                                                            K -130 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        
Solution 
        1.  Check the 2-hole punch section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:FD-503:5-F) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 5-E) 
       5.  Replace PS8. 
       6.  Replace M10. 
       7.  Replace PDB. 
Faulty part isolation DIPSW 
       DIPSW6-0 
Control while detached 
      The use of the folding function and the punch section is unavailable 
  

2.9.29   C-1225 

Code 
      C-1225 
Classification 
       FD: FD abnormality 
Cause 
      The 3 holes/4 holes punch home sensor (PS9) does not turn OFF within a specified period of time after the 3 holes/4 holes punch home 
      position return operation starts. Or, after the punch motor (M10) turns ON, the 3 holes/4 holes punch home sensor (PS9) does not turn 
      OFF. 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Punch motor (M10) 
        •  Punch drive board (PDB) 
        •  3 holes/4 holes home sensor (PS9) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the 3-hole/4-hole punch section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:FD-503:5-F) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram:FD-503:5-E) 
       5.  Replace PS9. 
       6.  Replace M10. 
       7.  Replace PDB. 
Faulty part isolation DIPSW 
       DIPSW6-0 
Control while detached 
      The use of the folding function and the punch section is unavailable 
  

2.9.30   C-1226 

Code 
      C-1226 
Classification 
       FD: FD abnormality 
Cause 
      The alignment plate home sensor (PS10) does not turn ON within a specified period of time after the alignment plate home position return 
      operation starts. Or, after the alignment motor (M12) turns ON, the alignment plate home sensor (PS10) does not turn OFF. 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Alignment motor (M12) 
        •  Punch drive board (PDB) 
        •  Alignment plate home sensor (PS10) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the punch alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:FD-503:3-D) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram:FD-503:5-D) 
       5.  Replace PS10. 
       6.  Replace M12. 
       7.  Replace PDB. 
Faulty part isolation DIPSW 
       DIPSW6-0 
Control while detached 

                                                                             K -131 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      The use of the folding function and the punch section is unavailable 
  

2.9.31   C-1227 

Code 
      C-1227 
Classification 
       FD: FD abnormality 
Cause 
      The punch registration home sensor (PS11) does not turn ON within a specified period of time after the punch registration claw home 
      position return operation starts. Or, after the punch registration motor (M13) turns ON, the punch registration home sensor (PS11) does 
      not turn OFF. 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Punch registration motor (M13) 
        •  Punch drive board (PDB) 
        •  Punch registration home sensor (PS11) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the punch alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:FD-503:5-F) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 5-E) 
       5.  Replace PS11. 
       6.  Replace M13. 
       7.  Replace PDB. 
Faulty part isolation DIPSW 
       DIPSW6-0 
Control while detached 
      The use of the folding function and the punch section is unavailable 
  

2.9.32   C-1228 

Code 
      C-1228 
Classification 
       FD: FD abnormality 
Cause 
      The main tray upper limit sensor (PS20) does not turn ON within a specified period of time after the main tray home position search starts. 
      Or, after the tray up down motor (M11) turns ON, the main tray upper limit sensor (PS20) does not turn OFF. 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Tray up down motor (M11) 
        •  Main tray upper limit sensor (PS20) 
        •  Punch drive board (PDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the punch alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 3-D) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 6-D) 
       5.  Replace PS20. 
       6.  Replace M11. 
       7.  Replace PDB. 
Faulty part isolation DIPSW 
       DIPSW6-1 
Control while detached 
       Main tray unusable 
  

2.9.33   C-1229 

Code 
      C-1229 
Classification 
       FD: FD abnormality 
Cause 
      The main tray lower limit sensor (PS22) does not turn ON within a specified period of time after the tray up down motor (M11) is in the 
      down operation. 
Measures to take when alert occurs 

                                                                             K -132 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Tray up down motor (M11) 
        •  Punch drive board (PDB) 
        •  Main tray lower limit sensor (PS22) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the punch alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between FDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 3-D) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 3-D) 
       5.  Replace PS22. 
       6.  Replace M11. 
       7.  Replace PDB. 
Faulty part isolation DIPSW 
       DIPSW6-1 
Control while detached 
       Main tray unusable 
  

2.9.34   C-1230 

Code 
      C-1230 
Classification 
       FD: FD abnormality 
Cause 
      After the FD paper lift motor /Up (M8) is in the down operation, the PI lift plate home sensor /Up (PS34) does not turn ON within a 
      specified period of time. Or, after the paper lift motor /Up (M8) is in the up operation, the PI tray upper limit sensor /Up (PS32) does not 
      turn ON. 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Paper lift motor /Up (M8) 
        •  PI drive board (PIDB) 
        •  PI lift plate home sensor /Up (PS34) 
        •  PI upper limit sensor /Up (PS32) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the PI upper tray section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PIDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:FD-503:9-A) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram:FD-503:8-A, 9-A) 
       5.  Replace PS32 or PS34. 
       6.  Replace M8. 
       7.  Replace PIDB. 
Faulty part isolation DIPSW 
       DIPSW6-2 
Control while detached 
      The use of the PI section unavailable 
  

2.10   Solution 6 (C-1231_1270) 

2.10.1   C-1231 

Code 
      C-1231 
Classification 
       FD: FD abnormality 
Cause 
      After the FD paper lift motor /Lw (M9) is in the down operation, the PI lift plate home sensor /Lw (PS40) does not turn ON within a 
      specified period of time. Or, after the paper lift motor /Lw (M9) is in the up operation, the PI upper limit sensor /Lw (PS38) does not turn 
      ON. 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Paper lift motor /Lw (M9) 
        •  PI drive board (PIDB) 
        •  PI lift plate home sensor /Lw (PS40) 
        •  PI upper limit sensor /Lw (PS38) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 

                                                                             K -133 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the PI lower tray section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PIDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 9-A) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 7-A, 8-A) 
       5.  Replace PS38 or PS40. 
       6.  Replace M9. 
        7.  Replace PIDB. 
Faulty part isolation DIPSW 
       DIPSW6-2 
Control while detached 
      The use of the PI section unavailable 
  

2.10.2   C-1232 

Code 
      C-1232 
Classification 
       FD: FD abnormality 
Cause 
      An error detection signal is detected continuously for a specified period of time while the entrance conveyance motor (M1) is ON. 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Paper lift motor /Lw (M9) 
        •  PI drive board (PIDB) 
        •  PI lift plate home sensor /Lw (PS40) 
        •  PI upper limit sensor /Lw (PS38) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the entrance conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PDB and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 3-D) 
       4.  Replace M1. 
       5.  Replace PDB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.10.3   C-1233 

Code 
      C-1233 
Classification 
       FD: FD abnormality 
Cause 
      An error detection signal of M3 is detected continuously for a specified period of time while the intermediate conveyance motor (M3) is ON. 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Intermediate conveyance motor (M3) 
        •  Punch drive board (PDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the intermediate conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PDB and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 4-D) 
       4.  Replace M3. 
       5.  Replace PDB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.10.4   C-1234 

Code 
      C-1234 
Classification 
       FD: FD abnormality 
Cause 

                                                                              K -134 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      An error detection signal of M7 is detected continuously for a specified period of time while the PI conveyance motor (M7) is ON. 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PI conveyance motor (M7) 
        •  PI drive board (PIDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the PI conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PIDB and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 9-A) 
       4.  Replace M7. 
       5.  Replace PIDB. 
Faulty part isolation DIPSW 
       DIPSW6-2 
Control while detached 
      The use of the PI section unavailable 
  

2.10.5   C-1235 

Code 
      C-1235 
Classification 
       FD: FD abnormality 
Cause 
      An error detection signal of M17 is detected continuously for a specified period of time while the main tray exit motor (M17) is ON. 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Main tray exit motor (M17) 
        •  Punch drive board (PDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the main tray exit section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PDB and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: FD-503: 4-D) 
       4.  Replace M17. 
       5.  Replace PDB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.10.6   C-1241 

Code 
      C-1241 
Classification 
      SD: SD-506 abnormality 
Cause 
      The scraps press home sensor (PS48) does not turn ON within a specified period of time after the bundle exit motor (M5) starts the home 
      position search operation. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Bundle exit motor (M5) 
        •  Scraps press home sensor (PS48) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the bundle exit section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 22-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 24-D) 
       6.  Replace PS48. 
       7.  Replace M5. 
       8.  Replace SDDB. 

                                                                             K -135 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0 
      DIPSW7-1 
      DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding and trimmer unavailable 
  

2.10.7   C-1242 

Code 
      C-1242 
Classification 
      SD: SD-506 abnormality 
Cause 
      The folding main scan alignment home sensor /Fr1 (PS18) does not turn ON within a specified period of time after the folding main scan 
      alignment motor /Fr (M7) starts the home position search operation. Or, even after a specified period of time after M7 starts the operation, 
      it does not stop. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Folding main scan alignment motor /Fr (M7) 
        •  Folding main scan alignment home sensor /Fr1 (PS18) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the folding main scan alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 8-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 13-D) 
       6.  Replace PS18. 
       7.  Replace M7. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0 
      DIPSW7-1 
      DIPSW7-2 
      DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding, multi tri-folding and trimmer unavailable 
  

2.10.8   C-1243 

Code 
      C-1243 
Classification 
      SD: SD-506 abnormality 
Cause 
      The folding exit home sensor (PS24) does not turn ON within a specified period of time after the folding sub scan alignment exit motor 
      (M8) starts the home position search operation. Or, even after a specified period of time after M8 starts to decelerate, it does not stop. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Folding sub scan alignment exit motor (M8) 
        •  Folding exit home sensor (PS24) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the folding sub scan alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 10-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 14-D) 
       6.  Replace PS24. 
       7.  Replace M8. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 

                                                                            K -136 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                 K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Faulty part isolation DIPSW 
      DIPSW7-0 
      DIPSW7-1 
      DIPSW7-2 
      DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding, multi-tri-folding and trimmer unavailable 
  

2.10.9   C-1244 

Code 
      C-1244 
Classification 
      SD: SD-506 abnormality 
Cause 
      The saddle stitching alignment home sensor /Rt (PS28) does not turn ON within a specified period of time after the saddle stitching 
      alignment motor /Rt (M9) starts the home position search operation. Or, even after a specified period of time after M9 starts the operation, 
      it does not stop. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Saddle stitching alignment motor /Rt (M9) 
        •  Saddle stitching alignment home sensor /Rt (PS28) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the saddle stitching alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 19-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 17-D) 
       6.  Replace PS28. 
       7.  Replace M9. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0 
      DIPSW7-1 
      DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding and trimmer unavailable 
  

2.10.10     C-1245 

Code 
      C-1245 
Classification 
      SD: SD-506 abnormality 
Cause 
      The bundle arm home sensor (PS32) does not turn ON within a specified period of time after the bundle arm motor (M10) starts the home 
      position search operation. Or, even after a specified period of time after M10 starts the operation, it does not stop. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Bundle arm motor (M10) 
        •  Bundle arm home sensor (PS32) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the bundle arm section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 19-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 17-D) 
       6.  Replace PS32. 
       7.  Replace M10. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 

                                                                           K -137 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                 K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      DIPSW7-0 
      DIPSW7-1 
      DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding and trimmer unavailable 
  

2.10.11   C-1246 

Code 
      C-1246 
Classification 
      SD: SD-506 abnormality 
Cause 
      The bundle clip upper limit sensor (PS33) does not turn ON within a specified period of time after the bundle clip motor (M11) starts the 
      home position search operation. Or, even after a specified period of time after M11 starts the operation, it does not stop. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Bundle clip motor (M11) 
        •  Bundle clip upper limit sensor (PS33) 
        •  Bundle clip lower limit sensor (PS30) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the bundle clip section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:SD-506:16-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram:SD-506:19-D) 
       6.  Replace PS33. 
       7.  Replace M11. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0 
      DIPSW7-1 
      DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding and trimmer unavailable 
  

2.10.12   C-1247 

Code 
      C-1247 
Classification 
      SD: SD-506 abnormality 
Cause 
      The bundle registration home sensor (PS34) does not turn ON within a specified period of time after the bundle registration motor (M12) 
      starts the home position search operation. Or, even after a specified period of time after M12 starts the operation, it does not stop. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Bundle registration motor (M12) 
        •  Bundle registration home sensor (PS34) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the bundle registration section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 27-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 21-D) 
       6.  Replace PS34. 
       7.  Replace M12. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0 
      DIPSW7-1 

                                                                           K -138 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                 K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding and trimmer unavailable 
  

2.10.13   C-1248 

Code 
      C-1248 
Classification 
      SD: SD-506 abnormality 
Cause 
      The overlap home sensor (PS17) does not turn ON within a specified period of time after the overlap motor (M13) starts the home position 
      search operation. Or, even after a specified period of time after M13 starts the operation, it does not stop. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Overlap motor (M13) 
        •  Overlap home sensor (PS17) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the overlap section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 2-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 2-D) 
       6.  Replace PS17. 
       7.  Replace M13. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0 
      DIPSW7-1 
      DIPSW7-2 
      DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding, multi-tri-folding and trimmer unavailable 
  

2.10.14   C-1249 

Code 
      C-1249 
Classification 
      SD: SD-506 abnormality 
Cause 
      The folding main scan alignment home sensor /Rr (PS19) does not turn ON within a specified period of time after the folding main scan 
      alignment motor /Rr (M14) starts the home position search operation. Or, even after a specified period of time after M14 starts the 
      operation, it does not stop. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Folding main scan alignment motor /Rr (M14) 
        •  Folding main scan alignment home sensor /Rr (PS19) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the folding main scan alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 11-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 12-D) 
       6.  Replace PS19. 
       7.  Replace M14. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0 
      DIPSW7-1 
      DIPSW7-2 

                                                                           K -139 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                 K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding, multi-tri-folding and trimmer unavailable 
  

2.10.15   C-1250 

Code 
      C-1250 
Classification 
      SD: SD-506 abnormality 
Cause 
      The stapler movement home sensor (PS25) does not turn ON within a specified period of time after the home position search operation of 
      the stapler movement motor (M15) starts. Or, even after a specified period of time after M15 starts the operation, it does not stop. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Stapler movement motor (M15) 
        •  Stapler movement home sensor (PS25) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the stapler movement section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 15-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 18-D) 
       6.  Replace PS25. 
       7.  Replace M15. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0 
      DIPSW7-1 
      DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding and trimmer unavailable 
  

2.10.16   C-1251 

Code 
      C-1251 
Classification 
      SD: SD-506 abnormality 
Cause 
      The saddle stitching alignment home sensor /Lt (PS29) does not turn ON within a specified period of time after the saddle stitching 
      alignment motor /Lt (M16) starts the home position search operation. Or, even after a specified period of time after M16 starts the 
      operation, it does not stop. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Saddle stitching alignment motor /Lt (M16) 
        •  Saddle stitching alignment home sensor /Lt (PS29) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the saddle stitching alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 15-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 17-D) 
       6.  Replace PS29. 
       7.  Replace M16. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0 
      DIPSW7-1 
      DIPSW7-3 
Control while detached 

                                                                           K -140 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                 K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      The use of the saddle stitching, multi-center folding and trimmer unavailable 
  

2.10.17   C-1252 

Code 
      C-1252 
Classification 
      SD: SD-506 abnormality 
Cause 
      The bundle press movement home sensor (PS36) does not turn ON within a specified period of time after the bundle press movement 
      motor (M17) starts the home position search operation. Or, even after a specified period of time after M17 starts the operation, it does not 
      stop. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Bundle press movement motor (M17) 
        •  Bundle press movement home sensor (PS36) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the bundle press movement section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:SD-506:26-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram:SD-506:22-D) 
       6.  Replace PS36. 
       7.  Replace M17. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0 
      DIPSW7-1 
      DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding and trimmer unavailable 
  

2.10.18   C-1253 

Code 
      C-1253 
Classification 
      SD: SD-506 abnormality 
Cause 
      The 1st folding blade home sensor (PS21) does not turn ON within a specified period of time after the 1st folding blade motor (M18) starts 
      the home position search operation. Or 1st folding blade home sensor /1 (PS20) does not turned ON within a specified period of time after 
      M18 starts the operation. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  1st folding blade motor (M18) 
        •  1st folding blade home sensor /1 (PS20), /2 (PS21) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the 1st folding section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 11-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 12-D) 
       6.  Replace PS20. 
       7.  Replace M18. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0 
      DIPSW7-1 
      DIPSW7-2 
      DIPSW7-3 
Control while detached 

                                                                           K -141 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      The use of the saddle stitching, multi-center folding, multi-tri-folding and trimmer unavailable 
  

2.10.19   C-1254 

Code 
      C-1254 
Classification 
      SD: SD-506 abnormality 
Cause 
      The 2nd folding blade home sensor /2 (PS23) does not turn ON within a specified period of time after the 2nd folding blade motor (M19) 
      starts the home position search operation. Or the 2nd folding blade home sensor /1 (PS22) does not turned ON within a specified period of 
      time after M19 starts the operation. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  2nd folding blade motor (M19) 
        •  2nd folding blade home sensor /1 (PS22), /2 (PS23) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the 2nd folding section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:SD-506:11-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram:SD-506:12-D, 13-D) 
       6.  Replace PS22. 
       7.  Replace M19. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
       DIPSW7-2 
Control while detached 
      The use of the multi-tri-folding unavailable 
  

2.10.20   C-1255 

Code 
      C-1255 
Classification 
      SD: SD-506 abnormality 
Cause 
      The clincher up down home sensor (PS26) does not turn ON even after a specified period of time after the clincher up down motor (M20) 
      starts the home position search. Or, even after a specified period of time after M20 starts the operation, it does not stop. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Clincher up down motor (M20) 
        •  Clincher up down home sensor (PS26) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the clincher up down section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 16-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 18-D) 
       6.  Replace PS26. 
       7.  Replace M20. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
       DIPSW7-0 
       DIPSW7-1 
       DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding and trimmer unavailable 
  

                                                                             K -142 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                 K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

2.10.21   C-1256 

Code 
      C-1256 
Classification 
      SD: SD-506 abnormality 
Cause 
      The saddle stitching press home sensor (PS27) does not turn ON within a specified period of time after the saddle stitching press motor 
      (M21) starts the home position search operation. Or, even after a specified period of time after M21 starts the operation, it does not stop. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Saddle stitching press motor (M21) 
        •  Saddle stitching press home sensor (PS27) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the saddle stitching press section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 16-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 16-D) 
       6.  Replace PS27. 
       7.  Replace M21. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0 
      DIPSW7-1 
      DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding and trimmer unavailable 
  

2.10.22   C-1257 

Code 
      C-1257 
Classification 
      SD: SD-506 abnormality 
Cause 
      The bundle arm rotation home sensor (PS31) does not turn ON within a specified period of time after the bundle arm rotation motor (M22) 
      starts the home position search operation. Or, even after a specified period of time after M22 starts the operation, it does not stop. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Bundle arm rotation motor (M22) 
        •  Bundle arm rotation home sensor (PS31) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the bundle arm rotation section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 27-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 24-D) 
       6.  Replace PS31. 
       7.  Replace M22. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0 
      DIPSW7-1 
      DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding and trimmer unavailable 
  

2.10.23   C-1258 

Code 

                                                                           K -143 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      C-1258 
Classification 
      SD: SD-506 abnormality 
Cause 
      The bundle press home sensor (PS37) does not turn ON within a specified period of time after the bundle press motor (M23) starts the 
      home position search operation. Or, even after a specified period of time after M23 starts the operation, it does not stop. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Bundle press motor (M23) 
        •  Bundle press home sensor (PS37) 
        •  Bundle press lower limit sensor (PS47) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the bundle press section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 20-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 23-D) 
       6.  Replace PS37 or PS47. 
       7.  Replace M23. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0 
      DIPSW7-1 
      DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding and trimmer unavailable 
  

2.10.24   C-1259 

Code 
      C-1259 
Classification 
      SD: SD-506 abnormality 
Cause 
      The bundle press home sensor (PS35) does not turn ON within a specified period of time after the bundle press stage up down motor 
      (M24) starts the home position search operation. Or PS35 or the bundle press stage up down upper limit sensor (PS45) does not turned 
      ON after a specified period of time M24 starts the operation. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Bundle press stage up down motor (M24) 
        •  Bundle press stage up down home sensor (PS35) 
        •  Bundle press stage up down limit sensor (PS45) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the bundle press stage up down section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 21-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 24-D, 25-D) 
       6.  Replace PS35 or PS45. 
       7.  Replace M24. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0 
      DIPSW7-1 
      DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding and trimmer unavailable 
  

2.10.25   C-1260 

Code 

                                                                            K -144 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      C-1260 
Classification 
      SD: SD-506 abnormality 
Cause 
      The guide shaft home sensor (PS46) does not turn ON even after a specified period of time after the guide shaft motor (M25) starts the 
      home position search operation. Or, even after a specified period of time after M25 starts the operation, it does not stop. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Guide shaft motor (M25) 
        •  Guide shaft home sensor (PS46) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the guide shaft, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:SD-506:11-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram:SD-506:15-D) 
       6.  Replace PS46. 
       7.  Replace M25. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0, DIPSW7-1, DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding and trimmer unavailable 
  

2.10.26   C-1261 

Code 
      C-1261 
Classification 
      SD: SD-506 abnormality 
Cause 
      The stapler home sensor /Rt (HS1) or the clincher start sensor /Rt (HS2) does not turn ON even after a specified period of time after the 
      stapler motor /Rt (M29) starts the operation. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Stapler assembly /Rt 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the stapler unit /Rt, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and the stapler unit /Rt, and repair it if any abnormality. 
       3.  Replacing the stapler assy /Rt 
       4.  Replace SDDB. 
       5.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0, DIPSW7-3 
Control while detached 
      The use of the saddle stitching and trimmer unavailable 
  

2.10.27   C-1262 

Code 
      C-1262 
Classification 
      SD: SD-506 abnormality 
Cause 
      The stapler home sensor /Lt (HS3) or the clincher start sensor /Lt (HS4) does not turn ON even after a specified period of time after the 
      stapler motor /Lt (M30) starts the operation. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Stapler assembly /Lt 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 

                                                                             K -145 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the stapler unit /Rt, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and the stapler unit /Rt, and repair it if any abnormality. 
       3.  Replacing the stapler assy /Rt 
       4.  Replace SDDB. 
       5.  Replace SDCB. 
Faulty part isolation DIPSW 
       DIPSW7-0, DIPSW7-3 
Control while detached 
      The use of the saddle stitching and trimmer unavailable 
  

2.10.28   C-1263 

Code 
      C-1263 
Classification 
      SD: SD-506 abnormality 
Cause 
       It does not stop even after a specified period of time after the trimmer blade motor (M31) starts the operation. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Trimmer blade motor (M31) 
        •  Trimmer blade home sensor (PS50) 
        •  Trimmer blade upper limit sensor (PS51) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the trimmer blade, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:SD-506:22-R) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 23-R) 
       6.  Replace PS50 or PS51. 
       7.  Replace M31. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
       DIPSW7-3 
Control while detached 
      The use of the trimmer unavailable 
  

2.10.29   C-1264 

Code 
      C-1264 
Classification 
      SD: SD-506 abnormality 
Cause 
       It does not stop even after a specified period of time after the trimmer press motor (M32) starts the operation. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Trimmer press motor (M32) 
        •  Trimmer press home sensor (PS53) 
        •  Trimmer press upper limit sensor (PS52) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the trimmer press section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:SD-506:22-R) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram:SD-506:23-R) 

                                                                             K -146 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       6.  Replace PS52 or PS53. 
       7.  Replace M32. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0, DIPSW7-1, DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding and trimmer unavailable 
  

2.10.30   C-1265 

Code 
      C-1265 
Classification 
      SD: SD-506 abnormality 
Cause 
       It does not stop even after a specified period of time after the bundle arm assist motor (M26) starts the operation. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Bundle arm assist motor (M26) 
        •  Bundle arm assist home sensor (PS38) 
        •  Bundle arm assist upper limit sensor (PS39) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the bundle arm assist section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 16-D) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 17-D) 
       6.  Replace PS38 or PS39. 
       7.  Replace M26. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0, DIPSW7-1, DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding and trimmer unavailable 
  

2.10.31   C-1266 

Code 
      C-1266 
Classification 
      SD: SD-506 abnormality 
Cause 
      Rotation abnormality is detected for a specified period of time in succession while the entrance conveyance motor (M1) is driving. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Entrance conveyance motor (M1) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the entrance conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:SD-506:2-D) 
       5.  Replace M1. 
       6.  Replace SDDB. 
       7.  Replace SDCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.10.32   C-1267 

Code 
      C-1267 

                                                                             K -147 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Classification 
      SD: SD-506 abnormality 
Cause 
      Rotation abnormality is detected for a specified period of time in succession while the horizontal conveyance motor (M2) is driving. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Horizontal conveyance motor (M2) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the horizontal conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 7-D) 
       5.  Replace M2. 
       6.  Replace SDDB. 
       7.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-4 
Control while detached 
      Sub tray, paper exit to subsequent stage and FS unavailable 
  

2.10.33   C-1268 

Code 
      C-1268 
Classification 
      SD: SD-506 abnormality 
Cause 
      Rotation abnormality is detected for a specified period of time in succession while the folding entrance motor (M3) is driving. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Folding entrance motor (M3) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the folding entrance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 9-D) 
       5.  Replace M3. 
       6.  Replace SDDB. 
       7.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-0, DIPSW7-1, DIPSW7-2, DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding, multi-tri-folding and trimmer unavailable 
  

2.10.34   C-1269 

Code 
      C-1269 
Classification 
      SD: SD-506 abnormality 
Cause 
      Rotation abnormality is detected for a specified period of time in succession while the folding transfer motor (M4) is driving. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Folding transfer motor (M4) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        

                                                                             K -148 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Solution 
        1.  Check the folding conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 9-D) 
       5.  Replace M4. 
       6.  Replace SDDB. 
       7.  Replace SDCB. 
Faulty part isolation DIPSW 
       DIPSW7-0, DIPSW7-1, DIPSW7-2, DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding, multi-tri-folding and trimmer unavailable 
  

2.10.35   C-1270 

Code 
      C-1270 
Classification 
      SD: SD-506 abnormality 
Cause 
       Rotation abnormality is detected for a specified period of time in succession while the bundle exit motor (M5) is driving. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Bundle exit motor (M5) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the bundle exit section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 22-D) 
       5.  Replace M5. 
       6.  Replace SDDB. 
       7.  Replace SDCB. 
Faulty part isolation DIPSW 
       DIPSW7-0, DIPSW7-1, DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding and trimmer unavailable 
  

2.11   Solution 7 (C-1271_1400) 

2.11.1   C-1271 

Code 
      C-1271 
Classification 
      SD: SD-506 abnormality 
Cause 
       Rotation abnormality is detected for a specified period of time in succession while the folding sub scan alignment exit motor (M8) is driving. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Folding sub scan alignment exit motor (M8) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the folding sub scan alignment exit section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 10-D) 
       5.  Replace M8. 
       6.  Replace SDDB. 
       7.  Replace SDCB. 
Faulty part isolation DIPSW 
       DIPSW7-0, DIPSW7-1, DIPSW7-2, DIPSW7-3 
Control while detached 
      The use of the saddle stitching, multi-center folding, multi-tri-folding and trimmer unavailable 
  

                                                                             K -149 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                 K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

2.11.2   C-1272 

Code 
      C-1272 
Classification 
      SD: SD-506 abnormality 
Cause 
      Rotation abnormality is detected for a specified period of time in succession while the trimmer paddle motor (M33) is driving. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Trimmer paddle motor (M33) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the trimmer paddle, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 11-W) 
       4.  Replace M33. 
       5.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-3 
Control while detached 
      The use of the trimmer unavailable 
  

2.11.3    C-1273 

Code 
      C-1273 
Classification 
      SD: SD-506 abnormality 
Cause 
      The trimmer completion sensor (PS62) does not turn ON even after a specified period of time after the trimmer blade motor (M31) is in the 
      up operation. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Trimmer blade motor (M31) 
        •  Trimmer completion sensor (PS62) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the trimmer blade upper limit, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and motor/sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 22-R) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 10-U) 
       6.  Replace PS62. 
       7.  Replace M31. 
       8.  Replace SDDB. 
       9.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-3 
Control while detached 
      The use of the trimmer unavailable 
  

2.11.4   C-1275 

Code 
      C-1275 
Classification 
      SD: SD-506 abnormality 
Cause 
      The wire slack sensor (PS66) detected the slack of the trimmer edge drive wire. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Wire slack prevention sensor (PS66) 
        •  SD control board (SDCB) 

                                                                           K -150 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  SD drive board (SDDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the wire slack, and repair the trimmer blade if any abnormality. 
       2.  Check the connector connection and the wiring between SDCB and the sensor, and repair it if any abnormality. 
       3.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: SD-506: 10-U) 
       4.  Replace PS66. 
       5.  Replace SDCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.11.5   C-1281 

Code 
      C-1281 
Classification 
       RU : RU-506 abnormality 
Causes 
       FD alignment motor (M3) drive abnormality. The FD alignment home sensor (PS3) does not turn ON even after a specified period of time 
      after M3 starts the home position search operation. Or, even after a specified period of time after M3 starts the operation, it does not stop. 
Resulting operation 
       Main body and RU stop immediately and main relay (RY1) is turned OFF. 
Estimated abnormal parts 
        •  RU control board (RUCB) 
        •  FD alignment motor (M3) 
        •  FD alignment home sensor (PS3) 
Correction 
       Error conditions are cleared by turning OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  "Please call service" is displayed on the touch panel. 
        
Procedure 
        1.  Check the FD alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RUCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (RU-506: 1-B) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (RU-506: 5-B) 
       5.  Replace PS3. 
       6.  Replace M3. 
       7.  Replace RUCB 
DipSW 
Control during separation 
  

2.11.6   C-1282 

Code 
      C-1282 
Classification 
       RU : RU-506 abnormality 
Causes 
      CD alignment motor (M4) drive abnormality. The CD alignment home sensor (PS4) does not turn ON even after a specified period of time 
      after M4 starts the home position search operation. Or, even after a specified period of time after M4 starts the operation, it does not stop. 
Resulting operation 
       Main body and RU stop immediately and main relay (RY1) is turned OFF. 
Estimated abnormal parts 
        •  RU control board (RUCB) 
        •  CD alignment motor (M4) 
        •  CD alignment home sensor (PS4) 
Correction 
       Error conditions are cleared by turning OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  "Please call service" is displayed on the touch panel. 
        
Procedure 
        1.  Check the CD alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RUCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (RU-506: 2-B) 
       4.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (RU-506: 5-B) 
       5.  Replace PS4 
       6.  Replace M4 
       7.  Replace RUCB 
DipSW 
Control during separation 
  

                                                                             K -151 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

2.11.7   C-1290 

Code 
      C-1290 
Classification 
      RU: RU-509 abnormality 
Cause 
      Rotation abnormality is detected for a specified period of time in succession while the de-curler conveyance motor (M3) is driving. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  De-curler conveyance motor (M3) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the de-curler section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RUCB and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: RU-509: 11-F) 
       4.  Replace M3. 
       5.  Replace RUCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.11.8    C-1291 

Code 
      C-1291 
Classification 
      RU: RU-509 abnormality 
Cause 
      The home position search operation of the de-curler pressure motor /Lw (M5) does not complete within a specified period of time. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  De-curler pressure motor /Lw (M5) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the de-curler section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RUCB and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: RU-509: 10-F) 
       4.  Replace M5. 
       5.  Replace RUCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.11.9   C-1292 

Code 
      C-1292 
Classification 
      RU: RU-509 abnormality 
Cause 
      The home position search operation of the de-curler pressure motor /Up (M6) does not complete within a specified period of time. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  De-curler pressure motor /Up (M6) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the de-curler section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RUCB and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: RU-509: 11-F) 
       4.  Replace M6. 
       5.  Replace RUCB 
Faulty part isolation DIPSW 

                                                                            K -152 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Control while detached 
  

2.11.10   C-1293 

Code 
      C-1293 
Classification 
      RU: RU-509 abnormality 
Cause 
      Rotation abnormality is detected for a specified period of time in succession while the humidification section conveyance motor (M8) is 
      driving. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Humidification section conveyance motor (M8) 
        •  RU control board (RUCB) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the humidification section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RUDB and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between RUDB and RUCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: RU-509: 13-O) 
       5.  Replace M8. 
       6.  Replace RUDB. 
       7.  Replace RUCB 
Faulty part isolation DIPSW 
      DIPSW13-2 
Control while detached 
      Humidification unusable 
  

2.11.11   C-1294 

Code 
      C-1294 
Classification 
      RU: RU-509 abnormality 
Cause 
      The home position search operation of the humidification section roller pressure motor /Rt (M9) does not complete within a specified 
      period of time. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Humidification section roller pressure motor /Rt (M9) 
        •  RU control board (RUCB) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the humidification section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RUDB and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between RUDB and RUCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: RU-509: 15-O) 
       5.  Replace M9. 
       6.  Replace RUDB. 
       7.  Replace RUCB 
Faulty part isolation DIPSW 
      DIPSW13-2 
Control while detached 
      Humidification unusable 
  

2.11.12   C-1295 

Code 
      C-1295 
Classification 
      RU: RU-509 abnormality 
Cause 
      The home position search operation of the humidification section roller pressure motor /Lt (M10) does not complete within a specified 
      period of time. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 

                                                                             K -153 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Estimated abnormal parts 
        •  Humidification roller pressure motor /Lt (M10) 
        •  RU control board (RUCB) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the humidification section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RUDB and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between RUDB and RUCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: RU-509: 15-O) 
       5.  Replace M10. 
       6.  Replace RUDB. 
       7.  Replace RUCB 
Faulty part isolation DIPSW 
       DIPSW13-2 
Control while detached 
       Humidification unusable 
  

2.11.13   C-1296 

Code 
      C-1296 
Classification 
       RU: RU-509 abnormality 
Cause 
      Color density sensor detection preparation adjustment value abnormality 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Color density sensor unit 
        •  Color density control board (CDCB) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the color density sensor unit, and clean/repair them if any abnormality. 
       2.  Check the connector connection and the wiring between the color density sensor and CDCB, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between CDCB and RUCB, and repair it if any abnormality. 
       4.  Check I/O and the operation of the sensor, and repair/replace the color density sensor unit if any abnormality. 
       5.  Replace the color density sensor unit. 
       6.  Replace CDCB. 
       7.  Replace RUCB 
Faulty part isolation DIPSW 
       DIPSW13-3 
Control while detached 
      Color density sensor cannot be used 
  

2.11.14   C-1297 

Code 
      C-1297 
Classification 
       RU: RU-509 abnormality 
Cause 
      Color density sensor detection start abnormality 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Shutter solenoid (SD5) 
        •  Color density sensor unit 
        •  Color density control board (CDCB) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the color density sensor unit, and clean/repair them if any abnormality. 
       2.  Check the connector connection and the wiring between the color density sensor and CDCB, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between CDCB and RUCB, and repair it if any abnormality. 
       4.  Check the installation place of the shutter solenoid (SD5) and adjust it when the value is not within the standard value. 

                                                                             K -154 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       5.  Turn ON the shutter solenoid (SD5) by I/O to check the shutter position. 
       6.  Check I/O and the operation of the sensor, and repair/replace the color density sensor unit if any abnormality. 
       7.  Replace the color density sensor unit. 
       8.  Replace CDCB. 
       9.  Replace RUCB 
Faulty part isolation DIPSW 
      DIPSW13-3 
Control while detached 
      Color density sensor cannot be used 
  

2.11.15   C-1298 

Code 
      C-1298 
Classification 
      RU: RU-509 abnormality 
Cause 
      EPPROM read out abnormality in the color density relay board (CDRLB) 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Color density control board (CDCB) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Turn OFF the sub power switch and unplug the power plug. Restart the main body after 10 seconds. 
       2.  Check the color density sensor unit, and clean/repair them if any abnormality. 
       3.  Check the connector connection and the wiring between CDCB and RUCB, and repair it if any abnormality. 
       4.  Reinstall the RU firmware. 
       5.  Replace the color density sensor unit. 
       6.  Replace CDCB. 
       7.  Replace RUCB 
Faulty part isolation DIPSW 
      DIPSW13-3 
Control while detached 
      Color density sensor cannot be used 
  

2.11.16   C-1299 

Code 
      C-1299 
Classification 
      RU: RU-509 abnormality 
Cause 
      The water tank full sensor (PS13) detects ON continuously for more than a specified period of time. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Drain path 
        •  Water tank full sensor (PS13) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the drain path, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring of RUDB, the pump motor (1) and the sensor, and repair it if any abnormality. 
       3.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: RU-509: 16-O) 
       4.  Replace PS13. 
       5.  Replace RUDB. 
Faulty part isolation DIPSW 
      DIPSW13-2 
Control while detached 
      Humidification unusable 
  

2.11.17   C-1301 

Code 
      C-1301 
Classification 
      LS (1st tandem): LS abnormality 
Cause 
      An error detection signal is detected continuously for a specified period of time while the paper cooling fan motor /Fr (FM1) is ON. 

                                                                            K -155 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Paper cooling fan motor /Fr (FM1) 
        •  LS control board (LSCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between LSCB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: LS-505: 4-A) 
       3.  Replace FM1. 
       4.  Replace LSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.11.18   C-1302 

Code 
      C-1302 
Classification 
       LS (1st tandem): LS abnormality 
Cause 
      An error detection signal is detected continuously for a specified period of time while the paper cooling fan motor /1 (FM2) is ON. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Paper cooling fan motor /1 (FM2) 
        •  LS control board (LSCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between LSCB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: LS-505: 6-H) 
       3.  Replace FM2 or FM6. 
       4.  Replace LSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.11.19   C-1303 

Code 
      C-1303 
Classification 
       LS (1st tandem): LS abnormality 
Cause 
      An error detection signal is detected continuously for a specified period of time while the paper cooling fan motor/Mi (FM3) is ON. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Paper cooling fan motor /Mi (FM3) 
        •  LS control board (LSCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between LSCB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: LS-505: 5-A) 
       3.  Replace FM3 
       4.  Replace LSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.11.20   C-1304 

Code 
      C-1304 
Classification 
      LS (1st tandem): LS abnormality 
Cause 
      An error detection signal of FM4 is detected continuously for a specified period of time while the motor cooling fan motor (FM4) is ON. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Motor cooling fan motor (FM4) 

                                                                             K -156 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  LS control board (LSCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between LSCB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: LS-505: 7-H) 
       3.  Replace FM4 
       4.  Replace LSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.11.21   C-1305 

Code 
      C-1305 
Classification 
       LS (1st tandem): LS abnormality 
Cause 
      An error detection signal of FM5 is detected continuously for a specified period of time while the paper cooling fan motor /Rr (FM5) is ON. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Paper cooling fan motor /Rr (FM5) 
        •  LS control board (LSCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between LSCB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: LS-505: 5-A) 
       3.  Replace FM5. 
       4.  Replace LSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.11.22   C-1306 

Code 
      C-1306 
Classification 
       LS (2nd tandem): LS abnormality 
Cause 
      An error detection signal is detected continuously for a specified period of time while the paper cooling fan motor /Fr (FM1) is ON. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Paper cooling fan motor /Fr (FM1) 
        •  LS control board (LSCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between LSCB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: LS-505: 4-A) 
       3.  Replace FM1. 
       4.  Replace LSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.11.23   C-1307 

Code 
      C-1307 
Classification 
      LS (2nd tandem): LS abnormality 
Cause 
      An error detection signal is detected continuously for a specified period of time while the paper cooling fan motor/1 (FM2) is ON. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Paper cooling fan motor /1 (FM2) 
        •  LS control board (LSCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 

                                                                             K -157 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        
Solution 
        1.  Check the connector connection and the wiring between LSCB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: LS-505: 6-H) 
       3.  Replace FM2 or FM6. 
       4.  Replace LSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.11.24   C-1308 

Code 
      C-1308 
Classification 
       LS (2nd tandem): LS abnormality 
Cause 
      An error detection signal is detected continuously for a specified period of time while the paper cooling fan motor /Mi (FM3) is ON. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Paper cooling fan motor /Mi (FM3) 
        •  LS control board (LSCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between LSCB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: LS-505: 5-A) 
       3.  Replace FM3 
       4.  Replace LSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.11.25   C-1309 

Code 
      C-1309 
Classification 
       LS (2nd tandem): LS abnormality 
Cause 
      An error detection signal of FM4 is detected continuously for a specified period of time while the motor cooling fan motor (FM4) is ON. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Motor cooling fan motor 
        •  LS control board (LSCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between LSCB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: LS-505: 7-H) 
       3.  Replace FM4 
       4.  Replace LSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.11.26   C-1310 

Code 
      C-1310 
Classification 
       LS (2nd tandem): LS abnormality 
Cause 
      An error detection signal of FM5 is detected continuously for a specified period of time while the paper cooling fan motor /Rr (FM5) is ON. 
Measures to take when alert occurs 
      The main body and the LS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Paper cooling fan motor /Rr (FM5) 
        •  LS control board (LSCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between LSCB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: LS-505: 5-A) 

                                                                              K -158 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       3.  Replace FM5. 
       4.  Replace LSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.11.27   C-1311 

Code 
      C-1311 
Classification 
      SD: SD-506 abnormality 
Cause 
      A rotation error detection signal is detected continuously for specified period of time while the scraps removal fan motor (FM1) is started or 
      driving. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Scraps removal fan motor (FM1) 
        •  SD control board (SDCB) 
        •  SD drive board (SDDB) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between SDDB and the fan, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       3.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: SD-506: 26-D) 
       4.  Replace FM1. 
       5.  Replace SDDB. 
       6.  Replace SDCB. 
Faulty part isolation DIPSW 
      DIPSW7-3 
Control while detached 
      The use of the trimmer unavailable 
  

2.11.28   C-1330 

Code 
      C-1330 
Classification 
      PB: PB abnormality 
Cause 
      A rotation error detection signal is detected continuously for specified time period while the cover paper tray fan /1 (FM71) is started or 
      driving. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Cover paper tray fan /1 (FM71) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between PBDB/PBDB1 and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: PB-503: 21-D) 
       3.  Replace FM71. 
       4.  Replace PBDB1. 
Faulty part isolation DIPSW 
      DIPSW7-5 
Control while detached 
      Paper feed from the PB is unavailable. 
  

2.11.29   C-1331 

Code 
      C-1331 
Classification 
      PB: PB abnormality 
Cause 
      A rotation error detection signal is detected continuously for specified time period while the cover paper tray fan /2 (FM72) is started or 
      driving. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 

                                                                             K -159 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  Cover paper tray fan /2 (FM72) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between PBDB/PBDB1 and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: PB-503: 21-D) 
       3.  Replace FM72. 
       4.  Replace PBDB1. 
Faulty part isolation DIPSW 
      DIPSW7-5 
Control while detached 
      Paper feed from the PB is unavailable. 
  

2.11.30   C-1332 

Code 
      C-1332 
Classification 
      PB: PB abnormality 
Cause 
      A rotation error detection signal is detected continuously for a specified time period while the exhaust fan /1 (FM80) is started or driving. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
       1.  PB control board (PBCB) 
       2.  PB drive board (PBDB) 
       3.  Exhaust fan /1 (FM80) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between PBDB/PBDB1 and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: PB-503: 3-D, 19-U) 
       3.  Replace FM80, FM97 and FM98. 
       4.  Replace PBDB1 and PBDB3. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.11.31   C-1333 

Code 
      C-1333 
Classification 
      PB: PB abnormality 
Cause 
      A rotation error detection signal is detected continuously for a specified time period while the exhaust fan /2 (FM81) is started or driving. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Exhaust fan /2 (FM81) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between PBDB/PBDB1 and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram:PB-503:3-D) 
       3.  Replace FM81. 
       4.  Replace PBDB1. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.11.32   C-1334 

Code 
      C-1334 
Classification 
      PB: PB abnormality 
Cause 

                                                                             K -160 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      A rotation error detection signal is detected continuously for specified period of time while the pellet supply cooling fan (FM4) is started or 
      driving. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Pellet supply cooling fan (FM4) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between PBDB/PBDB1 and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: PB-503: 4-D) 
       3.  Replace FM4 
       4.  Replace PBDB1. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.11.33   C-1341 

Code 
      C-1341 
Classification 
      RU : RU-506 abnormality 
Causes 
      Stack assist fan /Fr (FM1) rotation abnormality. Rotation abnormality detected continuously for the specified time during FM1 operation. 
Resulting operation 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  RU control board (RUCB) 
        •  Stack assist fan /Fr (FM1) 
Correction 
      Error conditions are cleared by turning OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  "Please call service" is displayed on the touch panel. 
        
Procedure 
       1.  Check the connector connection and the wiring between RUCB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan by I/O or hand, and repair/replace it if any abnormality. (RU-506: 3-B) 
       3.  Replace FM1 
       4.  Replace RUCB 
DipSW 
Control during separation 
  

2.11.34   C-1342 

Code 
      C-1342 
Classification 
      RU : RU-506 abnormality 
Causes 
      Stack assist fan /Rr (FM2) rotation abnormality. Rotation abnormality detected continuously for the specified time during FM2 operation. 
Resulting operation 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  RU control board (RUCB) 
        •  Stack assist fan /Rr (FM2) 
Correction 
      Error conditions are cleared by turning OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  "Please call service" is displayed on the touch panel. 
        
Procedure 
       1.  Check the connector connection and the wiring between RUCB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan by I/O or hand, and repair/replace it if any abnormality. (RU-506: 3-B) 
       3.  Replace FM2 
       4.  Replace RUCB 
DipSW 
Control during separation 
  

2.11.35   C-1351 

Code 
      C-1351 

                                                                             K -161 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Classification 
      RU: RU-509 abnormality 
Cause 
      Error detection signals of FM1, FM2 and FM3 are detected continuously for a specified period of time while the entrance paper fans /1 
      (FM1), /2 (FM2) and /3 (FM3) are ON. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Entrance paper fan /1 (FM1) 
        •  Entrance paper fan /2 (FM2) 
        •  Entrance paper fan /3 (FM3) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between RUCB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair or replace it if any abnormality. (Wiring diagram: RU-509: 8-F, 9-F) 
       3.  Replace FM1, FM2 and FM3. 
       4.  Replace RUCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.11.36   C-1352 

Code 
      C-1352 
Classification 
      RU: RU-509 abnormality 
Cause 
      Error detection signals of FM4 and FM5 are detected continuously for a specified period of time while the ventilation assist fans /1 (FM4) 
      and /2 (FM5) are ON. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Ventilation assist fan /1 (FM4) 
        •  Ventilation assist fan /2 (FM5) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between RUCB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: RU-509: 9-F, 8-H) 
       3.  Replace FM4 and FM5. 
       4.  Replace RUCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.11.37   C-1353 

Code 
      C-1353 
Classification 
      RU: RU-509 abnormality 
Cause 
      Error detection signals of FM15, FM16 and FM17 are detected continuously for a specified period of time while the entrance paper fans /4 
      (FM15), /5 (FM16) and /6 (FM17) are ON. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Entrance paper fan /4 (FM15) 
        •  Entrance paper fan /5 (FM16) 
        •  Entrance paper fan /6 (FM17) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between RUCB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: RU-509: 17-L, 18-L) 
       3.  Replace FM15, FM16 and FM17. 
       4.  Replace RUCB 

                                                                             K -162 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Faulty part isolation DIPSW 
Control while detached 
  

2.11.38   C-1354 

Code 
      C-1354 
Classification 
      RU: RU-9 abnormality 
Cause 
      Error detection signals of FM18, FM19 and FM20 are detected continuously for a specified period of time while the entrance paper fans /7 
      (FM18), /8 (FM19) and /9 (FM20) are ON. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Entrance paper fan /7 (FM18) 
        •  Entrance paper fan /8 (FM19) 
        •  Entrance paper fan /9 (FM20) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between RUCB and the fan, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: RU-509: 18-L) 
       3.  Replace FM18, FM19 and FM20. 
       4.  Replace RUCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.11.39   C-1355 

Code 
      C-1355 
Classification 
      RU: RU-509 abnormality 
Cause 
      Error detection signals of FM21 is detected continuously for a specified period of time while the ventilation assist fan /3 (FM21) is ON. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Jumper connector CN108 
        •  Ventilation assist fan /3 (FM21) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  When HM-102 is not connected, check if the jumper connector CN108 is connected. Connect the connector if it is not connected. 
       2.  Check the connector connection and the wiring between RUCB and the fan, and repair it if any abnormality. 
       3.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: RU-509: 19-L) 
       4.  Replace FM21. 
       5.  Replace RUCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.11.40   C-1356 

Code 
      C-1356 
Classification 
      RU: RU-509 abnormality 
Cause 
      An error detection signal of FM6 is detected continuously for a specified period of time while the humidification section paper fan /1 (FM6) 
      is ON. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Humidification section paper fan /1 (FM6) 
        •  RU control board (RUCB) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 

                                                                            K -163 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        
Solution 
        1.  Check the connector connection and the wiring between RUDB and the fan, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RUDB and RUCB, and repair it if any abnormality. 
       3.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: RU-509: 19-O) 
       4.  Replace FM6. 
       5.  Replace RUDB. 
       6.  Replace RUCB 
Faulty part isolation DIPSW 
       DIPSW13-2 
Control while detached 
       Humidification unusable 
  

2.11.41   C-1357 

Code 
      C-1357 
Classification 
       RU: RU-509 abnormality 
Cause 
      An error detection signal of FM7 is detected continuously for a specified period of time while the humidification section paper fan /2 (FM7) 
      is ON. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Humidification section paper fan /2 (FM7) 
        •  RU control board (RUCB) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between RUDB and the fan, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RUDB and RUCB, and repair it if any abnormality. 
       3.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: RU-509: 19-O) 
       4.  Replace FM7. 
       5.  Replace RUDB. 
       6.  Replace RUCB 
Faulty part isolation DIPSW 
       DIPSW13-2 
Control while detached 
       Humidification unusable 
  

2.11.42   C-1358 

Code 
      C-1358 
Classification 
       RU: RU-509 abnormality 
Cause 
      An error detection signal of FM8 is detected continuously for a specified period of time while the humidification section paper fan /3 (FM8) 
      is ON. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Humidification section paper fan /3 (FM8) 
        •  RU control board (RUCB) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between RUDB and the fan, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RUDB and RUCB, and repair it if any abnormality. 
       3.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: RU-509: 19-O) 
       4.  Replace FM8. 
       5.  Replace RUDB. 
       6.  Replace RUCB 
Faulty part isolation DIPSW 
       DIPSW13-2 
Control while detached 
       Humidification unusable 
  

                                                                             K -164 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                 K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

2.11.43   C-1359 

Code 
      C-1359 
Classification 
      RU: RU-509 abnormality 
Cause 
      An error detection signal of FM9 is detected continuously for a specified period of time while the humidification section paper fan /4 (FM9) 
      is ON. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Humidification section paper fan /4 (FM9) 
        •  RU control board (RUCB) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between RUDB and the fan, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RUDB and RUCB, and repair it if any abnormality. 
       3.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: RU-509: 16-O) 
       4.  Replace FM9. 
       5.  Replace RUDB. 
       6.  Replace RUCB 
Faulty part isolation DIPSW 
      DIPSW13-2 
Control while detached 
      Humidification unusable 
  

2.11.44   C-1360 

Code 
      C-1360 
Classification 
      RU: RU-509 abnormality 
Cause 
      An error detection signal of FM10 is detected continuously for a specified period of time while the humidification section paper fan /5 
      (FM10) is ON. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Humidification section paper fan /5 (FM10) 
        •  RU control board (RUCB) 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between RUDB and the fan, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RUDB and RUCB, and repair it if any abnormality. 
       3.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: RU-509: 17-O) 
       4.  Replace FM10. 
       5.  Replace RUDB. 
       6.  Replace RUCB 
Faulty part isolation DIPSW 
      DIPSW13-2 
Control while detached 
      Humidification unusable 
  

2.11.45   C-1361 

Code 
      C-1361 
Classification 
      RU: RU-509 abnormality 
Cause 
      An error detection signal of FM11 is detected continuously for a specified period of time while the humidification section paper fan /6 
      (FM11) is ON. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Humidification section paper fan /6 (FM11) 
        •  RU control board (RUCB) 
        •  RU control board (RUCB) 

                                                                           K -165 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between RUDB and the fan, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RUDB and RUCB, and repair it if any abnormality. 
       3.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: RU-509: 17-O) 
       4.  Replace FM11. 
       5.  Replace RUDB. 
       6.  Replace RUCB 
Faulty part isolation DIPSW 
      DIPSW13-2 
Control while detached 
      Humidification unusable 
  

2.11.46   C-1364 

Code 
      C-1364 
Classification 
      RU: RU-509 abnormality 
Cause 
      An error detection signal of FM14 is detected continuously for a specified period of time while the humidification section paper fan (FM14) 
      is ON. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Power supply fan (FM14) 
        •  DC power supply (DCPS) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between DCPS and the fan, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between RUDB and RUCB, and repair it if any abnormality. 
       3.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: RU-509: 6-I) 
       4.  Replace FM14. 
       5.  Replace DCPS. 
Faulty part isolation DIPSW 
Control while detached 
  

2.12   Solution 8 (C-1401_1500) 

2.12.1   C-1402 

Code 
      C-1402 
Classification 
      FS: FS abnormality 
Cause 
      Non-volatile memory abnormality. 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FS control board (LSCB) 
        •  FNS control board (FNSCB) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of FNSCB, and repair it if any abnormality. 
       3.  Reinstalling FS firmware 
       4.  Replace FNSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.12.2     C-1403 

Code 
      C-1403 
Classification 
      FD: FD abnormality 

                                                                             K -166 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Cause 
      Non-volatile memory abnormality. 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FD control board (FDCB) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of FDCB, and repair it if any abnormality. 
       3.  Reinstalling FD firmware 
       4.  Replace FDCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.12.3   C-1404 

Code 
      C-1404 
Classification 
      SD: SD-506 abnormality 
Cause 
      Non-volatile memory abnormality. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  SD control board (SDCB) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of SDCB, and repair it if any abnormality. 
       3.  Reinstalling SD firmware 
       4.  Replace SDCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.12.4   C-1406 

Code 
      C-1406 
Classification 
      PB: PB abnormality 
Cause 
      Non-volatile memory abnormality in the PB control board (PBCB) 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  Control program 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of PBCB, and repair it if any abnormality. 
       3.  Reinstalling PB firmware 
       4.  Replace PBCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.12.5   C-1407 

Code 
      C-1407 
Classification 
      RU: RU-509 abnormality 
Cause 
      Non-volatile memory abnormality. 
Measures to take when alert occurs 

                                                                             K -167 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of RUCB, and repair it if any abnormality. 
       3.  Reinstall the RU firmware. 
       4.  Replace RUCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.12.6   C-1408 

Code 
      C-1408 
Classification 
      RU : RU-506 abnormality 
Causes 
      Non-volatile memory error. 
Resulting operation 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  RU control board (RUCB) 
Correction 
      Error conditions are cleared by turning OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  "Please call service" is displayed on the touch panel. 
        
Procedure 
       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of RUCB, and repair it if any abnormality. 
       3.  Reinstalling RU firmware 
       4.  Replace RUCB 
DipSW 
Control during separation 
  

2.12.7   C-1411 

Code 
      C-1411 
Classification 
      SD: SD-506 abnormality 
Cause 
      5V power abnormality in the SD drive board (SDDB) 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  SD drive board (SDDB) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring of SDDB, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between SDDB and SDCB, and repair it if any abnormality. 
       3.  Replace SDDB. 
       4.  Replace SDCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.12.8   C-1431 

Code 
      C-1431 
Classification 
      FS: FS abnormality 
Cause 
      Communication error in FS 
Measures to take when alert occurs 
      The main body and the FS stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Software bug 

                                                                            K -168 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of FNSCB, and repair it if any abnormality. 
       3.  Reinstall FS-612 firmware 
       4.  Replace FNSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.12.9   C-1432 

Code 
      C-1432 
Classification 
      FD: FD abnormality 
Cause 
      Communication error in FD 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Software bug 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of FDCB, and repair it if any abnormality. 
       3.  Reinstalling FD firmware 
       4.  Replace FDCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.12.10     C-1433 

Code 
      C-1433 
Classification 
      SD: SD-506 abnormality 
Cause 
      Communication error in SD 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Software bug 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of SDCB, and repair it if any abnormality. 
       3.  Reinstalling SD firmware 
       4.  Replace SDCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.12.11     C-1435 

Code 
      C-1435 
Classification 
      PB: PB abnormality 
Cause 
      Message queue full or the control abnormality of Sub CPU1 in the PB control board (PBCB) 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  Control program 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 

                                                                             K -169 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        
Solution 
        1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of PBCB, and repair it if any abnormality. 
       3.  Reinstalling PB firmware 
       4.  Replace PBCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.12.12   C-1436 

Code 
      C-1436 
Classification 
       PB: PB abnormality 
Cause 
       Message queue full or the control abnormality of Sub CPU2 in the PB control board (PBCB) 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  Control program 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of PBCB, and repair it if any abnormality. 
       3.  Reinstalling PB firmware 
       4.  Replace PBCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.12.13   C-1437 

Code 
      C-1437 
Classification 
       PB: PB abnormality 
Cause 
       Message queue of the communication among tasks in the PB is full. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Control program 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of PBCB, and repair it if any abnormality. 
       3.  Reinstalling PB firmware 
       4.  Replace PBCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.12.14     C-1438 

Code 
      C-1438 
Classification 
       RU: RU-509 abnormality 
Cause 
      Communication error in RU 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Software bug 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 

                                                                             K -170 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                 K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of RUCB, and repair it if any abnormality. 
       3.  Reinstall the RU firmware. 
       4.  Replace RUCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.12.15   C-1439 

Code 
      C-1439 
Classification 
      RU : RU-506 abnormality 
Causes 
      RU received operation start from the main body when unready. 
Resulting operation 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Software bug 
Correction 
      Error conditions are cleared by turning OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  "Please call service" is displayed on the touch panel. 
        
Procedure 
       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of RUCB, and repair it if any abnormality. 
       3.  Reinstalling RU firmware 
       4.  Replace RUCB 
DipSW 
Control during separation 
  

2.12.16   C-1440 

Code 
      C-1440 
Classification 
      RU: RU-509 abnormality 
Cause 
      RU SubCPU communication error (Main side) 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  RU control board (RUCB) 
        •  RU program 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of RUCB, and repair it if any abnormality. 
       3.  Reinstall the RU firmware. 
       4.  Replace RUCB 
Faulty part isolation DIPSW 
      DIPSW13-3 
Control while detached 
      Color density sensor cannot be used 
  

2.12.17   C-1441 

Code 
      C-1441 
Classification 
      RU: RU-509 abnormality 
Cause 
      RU SubCPU communication error (Sub side) 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  RU control board (RUCB) 
        •  RU program 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 

                                                                           K -171 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of RUCB, and repair it if any abnormality. 
       3.  Reinstall the RU firmware. 
       4.  Replace RUCB 
Faulty part isolation DIPSW 
      DIPSW13-3 
Control while detached 
      Color density sensor cannot be used 
  

2.12.18   C-1451 

Code 
      C-1451 
Classification 
      FD: FD abnormality 
Cause 
      When the FD is unready, a signal to start operations is received from the main body. 
Measures to take when alert occurs 
      The main body and the FD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Software bug 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of FDCB, and repair it if any abnormality. 
       3.  Reinstalling FD firmware 
       4.  Replace FDCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.12.19   C-1452 

Code 
      C-1452 
Classification 
      SD: SD-506 abnormality 
Cause 
      When the SD is unready, a signal to start operations is received from the main body. 
Measures to take when alert occurs 
      The main body and the SD stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Software bug 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of SDCB, and repair it if any abnormality. 
       3.  Reinstalling SD firmware 
       4.  Replace SDCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.12.20   C-1454 

Code 
      C-1454 
Classification 
      PB: PB abnormality 
Cause 
      PB operation prohibition abnormality. 
      PB received operation start signal from the main body when the PB is unready. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Control program 
Correction 

                                                                             K -172 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of PBCB, and repair it if any abnormality. 
       3.  Reinstalling PB firmware 
       4.  Replace PBCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.12.21   C-1455 

Code 
      C-1455 
Classification 
      RU: RU-509 abnormality 
Cause 
      When RU is unready, a signal to start operations is received from the main body. 
Measures to take when alert occurs 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Software bug 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of RUCB, and repair it if any abnormality. 
       3.  Reinstall the RU firmware. 
       4.  Replace RUCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.12.22   C-1456 

Code 
      C-1456 
Classification 
      RU : RU-506 abnormality 
Causes 
      RU received operation start signal from the main body when the RU is unready. 
Resulting operation 
      The main body and the RU stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Software bug 
Correction 
      Error conditions are cleared by turning OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  "Please call service" is displayed on the touch panel. 
        
Procedure 
       1.  After turning OFF the sub power switch, turn OFF the main power switch and unplug the power plug. Restart the main body after 10 
           seconds. 
       2.  Check the connector connection and the wiring of RUCB, and repair it if any abnormality. 
       3.  Reinstalling RU firmware 
       4.  Replace RUCB 
DipSW 
Control during separation 
  

2.13   Solution 9 (C-1501_1539) 

2.13.1   C-1501 

Code 
      C-1501 
Classification 
      PB: PB abnormality 
Cause 
      The entrance conveyance has not been completed within a specified period of time after the entrance conveyance motor (M1) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 

                                                                             K -173 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  Entrance conveyance motor (M1) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the entrance conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 1-D) 
       5.  Replace M1. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.13.2   C-1502 

Code 
      C-1502 
Classification 
      PB: PB abnormality 
Cause 
      A rotation error detection signal is detected for a specified period of time in succession while the intermediate conveyance motor (M2) is 
      driving. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Intermediate conveyance motor (M2) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the intermediate conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PB-503:2-D) 
       5.  Replace M2. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.3   C-1504 

Code 
      C-1504 
Classification 
      PB: PB abnormality 
Cause 
      The SC entrance conveyance has not been completed within a specified period of time after the SC entrance conveyance motor (M11) 
      turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  SC entrance conveyance motor (M11) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the SC entrance conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 4-D) 
       5.  Replace M11. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 

                                                                             K -174 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.4   C-1505 

Code 
      C-1505 
Classification 
      PB: PB abnormality 
Cause 
      The switchback conveyance has not been completed within a specified period of time after the SC switchback conveyance motor (M12) 
      turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  SC switchback conveyance motor (M12) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the SC switchback conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 4-D) 
       5.  Replace M12. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.5   C-1506 

Code 
      C-1506 
Classification 
      PB: PB abnormality 
Cause 
      The switchback roller release operation has not been completed within a specified period of time after the SC switchback release motor 
      (M13) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  SC switchback release motor (M13) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the SC switchback release section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 6-D) 
       5.  Replace M13. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.6   C-1507 

Code 
      C-1507 
Classification 
      PB: PB abnormality 
Cause 
      The SC alignment has not been completed within a specified period of time after SC alignment motor (M15) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 

                                                                             K -175 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  PB drive board (PBDB) 
        •  SC alignment motor (M15) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the SC alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PB-503:5-D) 
       5.  Replace M15. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.7   C-1508 

Code 
      C-1508 
Classification 
      PB: PB abnormality 
Cause 
      The SC paper bundle conveyance has not been completed within a specified period of time after the SC bundle conveyance motor (M17) 
      turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  SC bundle conveyance motor (M17) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the SC bundle conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PB-503:5-D) 
       5.  Replace M17. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.8   C-1509 

Code 
      C-1509 
Classification 
      PB: PB abnormality 
Cause 
      The SC roller release operation has not been completed within a specified period of time after the SC roller release motor (M18) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  SC roller release motor (M18) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the SC roller release section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 6-D) 
       5.  Replace M18. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 

                                                                             K -176 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.9   C-1510 

Code 
      C-1510 
Classification 
      PB: PB abnormality 
Cause 
      The SC entrance movement operation has not been completed within a specified period of time after the clamp entrance movement motor 
      (M19) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Clamp entrance movement motor (M19) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the clamp entrance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 5-D) 
       5.  Replace M19. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.10     C-1511 

Code 
      C-1511 
Classification 
      PB: PB abnormality 
Cause 
      The clamp entrance roller release operation has not been completed within a specified period of time after the clamp entrance roller 
      release motor (M20) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Clamp entrance roller release motor (M20) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the clamp entrance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 7-D) 
       5.  Replace M20. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.11     C-1512 

Code 
      C-1512 
Classification 
      PB: PB abnormality 
Cause 
      The clamp alignment has not been completed within a specified period of time after clamp alignment motor (M21) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 

                                                                            K -177 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  PB drive board (PBDB) 
        •  Clamp alignment motor (M21) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the clamp alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 7-D) 
       5.  Replace M21. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.12   C-1513 

Code 
      C-1513 
Classification 
      PB: PB abnormality 
Cause 
      The clamp section open/close operation has not been completed within a specified period of time after the clamp motor (M22) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Clamp motor (M22) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the clamp section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 8-D) 
       5.  Replace M22. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.13   C-1514 

Code 
      C-1514 
Classification 
      PB: PB abnormality 
Cause 
      The clamp rotation operation has not been completed within a specified period of time after the clamp rotation motor (M23) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Clamp rotation motor (M23) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the clamp section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PB-503:8-D) 
       5.  Replace M23. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 

                                                                             K -178 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      Ejecting onto the sub tray is possible. 
  

2.13.14   C-1515 

Code 
      C-1515 
Classification 
      PB: PB abnormality 
Cause 
      The glue tank movement operation has not been completed within a specified period of time after the glue tank movement motor (M31) 
      turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue tank movement motor (M31) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the glue tank movement section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 8-D) 
       5.  Replace M31. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.15   C-1516 

Code 
      C-1516 
Classification 
      PB: PB abnormality 
Cause 
      A rotation error detection signal is detected for a specified period of time in succession while the glue apply roller motor (M32) is driving. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the glue apply section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PB-503:9-D) 
       5.  Replace M32. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.16     C-1517 

Code 
      C-1517 
Classification 
      PB: PB abnormality 
Cause 
      The count of a specified number of pellets, which is counted by the pellet supply passage sensor (PS37), has not been reached after the 
      pellet supply pipe motor (M33) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 

                                                                             K -179 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  Pellet supply pipe motor (M33) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the pellet supply section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 10-D) 
       5.  Replace M33. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.17   C-1518 

Code 
      C-1518 
Classification 
      PB: PB abnormality 
Cause 
      The operation of the pellet supply arm has not been completed within a specified period of time after the pellet supply arm motor (M34) 
      turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Pellet supply arm motor (M34) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the pellet supply section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 10-D) 
       5.  Replace M34. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.18   C-1519 

Code 
      C-1519 
Classification 
      PB: PB abnormality 
Cause 
      The alignment in the cover paper table up/down section has not been completed within a specified period of time after the cover paper 
      alignment motor (M41) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Cover paper alignment motor (M41) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the cover paper alignment section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PB-503:12-D) 
       5.  Replace M41. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 

                                                                             K -180 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.19   C-1520 

Code 
      C-1520 
Classification 
      PB: PB abnormality 
Cause 
      The booklet exit has not been completed within a specified period of time after the booklet exit motor (M42) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Booklet exit motor (M42) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the booklet exit section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 12-D) 
       5.  Replace M42. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.20   C-1521 

Code 
      C-1521 
Classification 
      PB: PB abnormality 
Cause 
      The driven arm /Rt swing operation start has not been completed within a specified period of time after the cover paper conveyance arm 
      motor /Rt (M43) turns ON 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Cover paper conveyance arm motor /Rt (M43) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the cover paper conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PB-503:12-D) 
       5.  Replace M43. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.21   C-1522 

Code 
      C-1522 
Classification 
      PB: PB abnormality 
Cause 
      The driven arm /Lt swing operation start has not been completed within a specified period of time after the cover paper conveyance arm 
      motor /Lt (M44) turns ON 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 

                                                                             K -181 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  PB drive board (PBDB) 
        •  Cover paper conveyance arm motor /Lt (M44) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the cover paper conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 13-D) 
       5.  Replace M44. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.22   C-1523 

Code 
      C-1523 
Classification 
      PB: PB abnormality 
Cause 
      The cover paper conveyance start has not been completed within a specified period of time after cover paper conveyance motor (M45) 
      turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Cover paper conveyance motor (M45) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the cover paper conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 13-D) 
       5.  Replace M45. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.23   C-1524 

Code 
      C-1524 
Classification 
      PB: PB abnormality 
Cause 
      The cover paper table up or down movement has not been completed within a specified period of time after the cover paper table up down 
      motor /Fr (M46) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Cover paper table up down motor /Fr (M46) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the cover paper table up down section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PB-503: 11-D) 
       5.  Replace M46. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 

                                                                             K -182 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.24   C-1525 

Code 
      C-1525 
Classification 
      PB: PB abnormality 
Cause 
      The cover paper table up or down movement has not been completed within a specified period of time after the cover paper table up down 
      motor /Rr (M47) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Cover paper table up down motor /Rr (M47) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the cover paper table up down section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PB-503: 11-D) 
       5.  Replace M47. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.25   C-1526 

Code 
      C-1526 
Classification 
      PB: PB abnormality 
Cause 
      The movement of the cover paper folding plate /Rt has not been completed within a specified period of time after the cover paper folding 
      motor /Rt (M48) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Cover paper folding motor /Rt (M48) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the cover paper folding section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PB-503: 14-D) 
       5.  Replace M48. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.26   C-1527 

Code 
      C-1527 
Classification 
      PB: PB abnormality 
Cause 
      The movement of the cover paper folding plate /Lt has not been completed within a specified period of time after the cover paper folding 
      motor /Lt (M49) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 

                                                                             K -183 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Cover paper folding motor /Lt (M49) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the cover paper folding section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PB-503: 14-D) 
       5.  Replace M49. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.27   C-1528 

Code 
      C-1528 
Classification 
      PB: PB abnormality 
Cause 
      The trimming of the cover paper has not been completed within a specified period of time after the cutter motor (M50) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Cutter motor (M50) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the trimmer section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PB-503: 14-D) 
       5.  Replace M50. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.28   C-1530 

Code 
      C-1530 
Classification 
      PB: PB abnormality 
Cause 
      The booklet movement of the booklet conveyance section has not been completed within a specified period of time after the booklet 
      conveyance belt motor (M61) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Booklet conveyance belt motor (M61) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the booklet conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PB-503: 15-D) 
       5.  Replace M61. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 

                                                                             K -184 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.29   C-1531 

Code 
      C-1531 
Classification 
      PB: PB abnormality 
Cause 
      The size changing operation of the carriage section has not been completed within a specified period of time after the booklet conveyance 
      belt movement motor (M62) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Booklet conveyance belt movement motor (M62) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the booklet conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PB-503: 15-D) 
       5.  Replace M62. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.30   C-1532 

Code 
      C-1532 
Classification 
      PB: PB abnormality 
Cause 
      The up/down movement operation of the carriage section has not been completed within a specified period of time after the booklet 
      conveyance belt up down motor (M63) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Booklet conveyance belt up down motor (M63) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the booklet conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PB-503: 16-D) 
       5.  Replace M63. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.31   C-1534 

Code 
      C-1534 
Classification 
      PB: PB abnormality 
Cause 
      The booklet rear edge pressing process has not been completed within a specified period of time after the booklet stopper motor (M65) 
      turns ON. 
Measures to take when alert occurs 

                                                                            K -185 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Booklet stopper motor (M65) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the booklet conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 16-D) 
       5.  Replace M65. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-6 
Control while detached 
      Ejecting onto the sub tray is possible. 
  

2.13.32   C-1537 

Code 
      C-1537 
Classification 
      PB: PB abnormality 
Cause 
      The tray moving up process has not been completed within a specified period of time after the cover paper tray lift motor (M73) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Cover paper tray lift motor (M73) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the cover paper tray section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 19-D) 
       5.  Replace M73. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-5 
Control while detached 
      Paper feed from the PB is unavailable. 
  

2.13.33   C-1538 

Code 
      C-1538 
Classification 
      PB: PB abnormality 
Cause 
      The cover paper feed has not been completed within a specified period of time after the cover paper feed motor (M74) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Cover paper feed motor (M74) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the cover paper feed section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB/PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB/PBDB1 and PBCB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 17-D) 
       5.  Replace M74. 
       6.  Replace PBDB1. 
       7.  Replace PBCB. 

                                                                             K -186 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Faulty part isolation DIPSW 
       DIPSW7-5 
Control while detached 
       Paper feed from the PB is unavailable. 
  

2.14   Solution 10 (C-1540_1567) 

2.14.1   C-1540 

Code 
      C-1540 
Classification 
       PB: PB abnormality 
Cause 
      After the warm-up is started, temperature detected by the glue tank temperature sensor /Md (TH3) has not risen to a prescribed level 
      within a specified time period. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue tank temperature sensor /Md (TH3) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DIPSW3-1 is set to 0 before defective parts are fixed, it may cause fire. 
        
Solution 
        1.  Check the glue tank heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 10-U) 
       5.  Replace TH3. 
       6.  Replace H1. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
       DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.2   C-1541 

Code 
      C-1541 
Classification 
       PB: PB abnormality 
Cause 
      After the warm-up is started, temperature detected by the glue tank temperature sensor /Lw (TH4) has not risen to a prescribed level 
      within a specified time period. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue tank temperature sensor /Lw (TH4) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
        1.  Check the glue tank heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 10-U) 
       5.  Replace TH4. 

                                                                             K -187 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       6.  Replace H1. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
       DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.3   C-1542 

Code 
      C-1542 
Classification 
       PB: PB abnormality 
Cause 
      After the warm-up is started, temperature detected by the glue apply roller temperature sensor (TH1) has not risen to a prescribed level 
      within a specified time period. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue apply roller temperature sensor (TH1) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
        1.  Check the glue apply heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 9-U) 
       5.  Replace TH1. 
       6.  Replace H2. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
       DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.4   C-1543 

Code 
      C-1543 
Classification 
       PB: PB abnormality 
Cause 
      After the pellet supply, temperature detected by the glue tank temperature sensor /Up (TH2) has not risen to a prescribed level within a 
      specified period of time. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue tank temperature sensor /Up (TH2) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
        1.  Check the glue tank heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 9-U) 

                                                                             K -188 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       5.  Replace TH2. 
       6.  Replace H1. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
       DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.5   C-1544 

Code 
      C-1544 
Classification 
       PB: PB abnormality 
Cause 
       During standby, after the glue tank heater (H1) is turned ON, temperature detected by the glue tank temperature sensor /Md (TH3) has not 
      risen to a prescribed level within a specified time period. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue tank temperature sensor /Md (TH3) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
        1.  Check the glue tank heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 10-U) 
       5.  Replace TH3. 
       6.  Replace H1. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
       DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.6   C-1545 

Code 
      C-1545 
Classification 
       PB: PB abnormality 
Cause 
      When the prescribed temperature is obtained and after the glue tank heater (H1) is turned ON, temperature detected by the glue tank 
      temperature sensor /Lw (TH4) has not risen to a prescribed level within a specified time period. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue tank temperature sensor /Lw (TH4) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
        1.  Check the glue tank heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 

                                                                             K -189 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 10-U) 
       5.  Replace TH4. 
       6.  Replace H1. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
       DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.7   C-1546 

Code 
      C-1546 
Classification 
       PB: PB abnormality 
Cause 
      When the prescribed temperature is obtained and after the glue tank heater (H1) is turned ON, temperature detected by the glue apply 
      roller temperature sensor (TH1) has not risen to a prescribed level within a specified time period. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue apply roller temperature sensor (TH1) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
        1.  Check the glue apply heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 9-U) 
       5.  Replace TH1. 
       6.  Replace H2. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
       DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.8   C-1547 

Code 
      C-1547 
Classification 
       PB: PB abnormality 
Cause 
      The glue apply roller temperature sensor (TH1) detects an abnormal high temperature. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue apply roller temperature sensor (TH1) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
        1.  Check the glue apply heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 

                                                                             K -190 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 9-U) 
       5.  Replace TH1. 
       6.  Replace H2. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.9   C-1548 

Code 
      C-1548 
Classification 
      PB: PB abnormality 
Cause 
      The glue tank temperature sensor /Up (TH2) detects an abnormal high temperature. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue tank temperature sensor /Up (TH2) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
       1.  Check the glue tank heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 9-U) 
       5.  Replace TH2. 
       6.  Replace H1. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.10   C-1549 

Code 
      C-1549 
Classification 
      PB: PB abnormality 
Cause 
      The glue tank temperature sensor /Md (TH3) detects an abnormal high temperature. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue tank temperature sensor /Md (TH3) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
       1.  Check the glue tank heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 

                                                                             K -191 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 10-U) 
       5.  Replace TH3. 
       6.  Replace H1. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.11   C-1550 

Code 
      C-1550 
Classification 
      PB: PB abnormality 
Cause 
      The glue tank temperature sensor /Lw (TH4) detects an abnormal high temperature. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue tank temperature sensor /Lw (TH4) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
       1.  Check the glue tank heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 10-U) 
       5.  Replace TH4. 
       6.  Replace H1. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.12   C-1551 

Code 
      C-1551 
Classification 
      PB: PB abnormality 
Cause 
      The glue apply roller temperature sensor (TH1) detects an abnormal high temperature (hardware) TH1 detects an abnormal high 
      temperature of the glue apply roller. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue apply roller temperature sensor (TH1) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
       1.  Check the glue apply heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 

                                                                             K -192 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 9-U) 
       5.  Replace TH1. 
       6.  Replace H2. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.13   C-1552 

Code 
      C-1552 
Classification 
      PB: PB abnormality 
Cause 
      The glue tank temperature sensor /Up (TH2) detects an abnormal high temperature (hardware). TH2 detects an abnormal high 
      temperature of the glue tank. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue tank temperature sensor /Up (TH2) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
       1.  Check the glue tank heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 9-U) 
       5.  Replace TH2. 
       6.  Replace H1. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.14   C-1553 

Code 
      C-1553 
Classification 
      PB: PB abnormality 
Cause 
      The glue tank temperature sensor /Md (TH3) detects an abnormal high temperature (hardware). TH3 detects an abnormal high 
      temperature of the glue tank. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue tank temperature sensor /Md (TH3) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
       1.  Check the glue tank heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 

                                                                             K -193 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 10-U) 
       5.  Replace TH3. 
       6.  Replace H1. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.15   C-1554 

Code 
      C-1554 
Classification 
      PB: PB abnormality 
Cause 
      The glue tank temperature sensor /Lw (TH4) detects an abnormal high temperature (hardware). TH4 detects an abnormal high 
      temperature of the glue tank. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue tank temperature sensor /Lw (TH4) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
       1.  Check the glue tank heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 10-U) 
       5.  Replace TH4. 
       6.  Replace H1. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.16   C-1555 

Code 
      C-1555 
Classification 
      PB: PB abnormality 
Cause 
      After warming-up is completed, the glue apply roller temperature sensor (TH1) detects an abnormal low temperature. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue apply roller temperature sensor (TH1) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
       1.  Check the glue apply heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 

                                                                             K -194 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 9-U) 
       5.  Replace TH1. 
       6.  Replace H2. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.17   C-1556 

Code 
      C-1556 
Classification 
      PB: PB abnormality 
Cause 
      When glue supply control temperature is reached, the glue tank temperature sensor /Up (TH2) detects an abnormal low temperature. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue tank temperature sensor /Up (TH2) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
       1.  Check the glue tank heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 9-U) 
       5.  Replace TH2. 
       6.  Replace H1. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.18   C-1557 

Code 
      C-1557 
Classification 
      PB: PB abnormality 
Cause 
      After warming-up is completed, the glue tank temperature sensor /Md (TH3) detects an abnormal low temperature. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue tank temperature sensor /Md (TH3) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
       1.  Check the glue tank heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 

                                                                             K -195 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 10-U) 
       5.  Replace TH3. 
       6.  Replace H1. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.19   C-1558 

Code 
      C-1558 
Classification 
      PB: PB abnormality 
Cause 
      After warming-up is completed, the glue tank temperature sensor /Lw (TH4) detects an abnormal low temperature. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue tank temperature sensor /Lw (TH4) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
       1.  Check the glue tank heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 10-U) 
       5.  Replace TH4. 
       6.  Replace H1. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.20   C-1559 

Code 
      C-1559 
Classification 
      PB: PB abnormality 
Cause 
      The glue apply roller temperature sensor (TH1) detects an abnormal low temperature (hardware). After warming-up is completed, TH1 
      detects the glue apply roller error signal of abnormal low temperature. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue apply roller temperature sensor (TH1) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
       1.  Check the glue apply heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 

                                                                             K -196 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 9-U) 
       5.  Replace TH1. 
       6.  Replace H2. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.21   C-1560 

Code 
      C-1560 
Classification 
      PB: PB abnormality 
Cause 
      The glue tank temperature sensor /Up (TH2) detects an abnormal low temperature (hardware). After glue supply control temperature is 
      reached, TH2 detects the glue tank error signal of abnormal low temperature. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue tank temperature sensor /Up (TH2) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
       1.  Check the glue tank heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 9-U) 
       5.  Replace TH2. 
       6.  Replace H1. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.22   C-1561 

Code 
      C-1561 
Classification 
      PB: PB abnormality 
Cause 
      The glue tank temperature sensor /Md (TH3) detects an abnormal low temperature (hardware). After warming-up is completed, TH3 
      detects the glue tank error signal of abnormal low temperature. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue tank temperature sensor /Md (TH3) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
       1.  Check the glue tank heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 

                                                                             K -197 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 10-U) 
       5.  Replace TH3. 
       6.  Replace H1. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.23   C-1562 

Code 
      C-1562 
Classification 
      PB: PB abnormality 
Cause 
      The glue tank temperature sensor /Lw (TH4) detects an abnormal low temperature (hardware). After warming-up is completed, TH4 
      detects the glue tank error signal of abnormal low temperature. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Glue tank heater (H1) 
        •  Glue apply roller heater (H2) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
        •  Glue apply roller motor (M32) 
        •  Glue tank temperature sensor /Lw (TH4) 
Correction 
      Be sure to change the software DIPSW3-1 from 1 to 0 and turn OFF/ON the sub power switch (SW2) of the main body after fixing the 
      defective parts. 
      WARNING 
        •  If DipSW3-1 is set to 0 before defective parts are fixed, it causes fire. 
        
Solution 
       1.  Check the glue tank heater, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the heater, and repair it if any abnormality. 
       4.  Check the installation conditions of the heater and the temperature sensor, and repair/replace it if any abnormality. (Wiring diagram: 
           PB-503: 27-Q, 10-U) 
       5.  Replace TH4. 
       6.  Replace H1. 
       7.  Replace ACDB. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
      DIPSW7-7 
Control while detached 
      The use of the PB is unavailable 
  

2.14.24   C-1565 

Code 
      C-1565 
Classification 
      PB: PB abnormality 
Cause 
      Relay conveyance motor drive abnormality 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
      The relay conveyance does not start within the specified period of time after M92 turns ON. 
Estimated abnormal parts 
        •  Relay conveyance motor (M92) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
Solution 
       1.  Check the relay conveyance section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB2 and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:PB-503: 23-V) 
       4.  Replace M92. 
       5.  Replace PBDB2. 
       6.  Replace PBCB. 
Faulty part isolation DIPSW 
Control while detached 
  

                                                                             K -198 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                 K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

2.14.25   C-1566 

Code 
      C-1566 
Classification 
      PB: PB abnormality 
Cause 
      Relay conveyance exit motor drive abnormality 
      A rotation error detection signal is detected for a specified period of time in succession while the relay conveyance exit motor (M91) is 
      driving. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Relay conveyance exit motor (M91) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
Solution 
       1.  Check the relay conveyance paper exit section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PBDB2 and the motor, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 26-W) 
       5.  Replace M91. 
       6.  Replace PBDB2. 
       7.  Replace PBDB1. 
       8.  Replace PBCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.14.26   C-1567 

Code 
      C-1567 
Classification 
      PB: PB abnormality 
Cause 
      Pellet supply pipe motor drive abnormality 
      The pellet supply pipe has not completed the operations within a specified period of time after the pellet supply pipe motor (M33) turns ON. 
Measures to take when alert occurs 
      The main body and the PB stop immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Pellet supply pipe motor (M33) 
        •  PB control board (PBCB) 
        •  PB drive board (PBDB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
Solution 
       1.  Check the pellet supply section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PBDB1 and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: PB-503: 10-D) 
       4.  Replace M33. 
       5.  Replace PBDB1. 
       6.  Replace PBCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15   Solution 11 (C-2001_2400) 

2.15.1   C-2001 

Code 
      C-2001 
Classification 
      Main body: Communication error 
Cause 
      Communication error between the printer control board (PRCB) and the drum motor /Y (M14). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Drum motor /Y (M14) 
        •  Drum motor /M (M15) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Turn OFF the sub power switch and unplug the power plug. Restart the main body after 10 seconds. 
       2.  Check the connector connection and the wiring between PRCB and the motor, and repair it if any abnormality. 

                                                                           K -199 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: Main body 
           (3/3): 8-P, 7-P) 
       4.  Replace M14 or M15. 
       5.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.2   C-2003 

Code 
      C-2003 
Classification 
      Main body: Communication error 
Cause 
      Communication error between the printer control board (PRCB) and the belt motor (M18). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Belt motor (M18) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Turn OFF the sub power switch and unplug the power plug. Restart the main body after 10 seconds. 
       2.  Check the connector connection and the wiring between PRCB and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: Main body 
           (3/3):17-O) 
       4.  Replace M18. 
       5.  Replace PRCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.3   C-2004 

Code 
      C-2004 
Classification 
      Main body: Communication error 
Cause 
      Communication error between the printer control board (PRCB) and the drum motors /Y (M14) or /M (M15). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Drum motor /Y (M14) 
        •  Drum motor /M (M15) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Turn OFF the sub power switch and unplug the power plug. Restart the main body after 10 seconds. 
       2.  Check the connector connection and the wiring between PRCB and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: Main body 
           (3/8): 8-P, 7-P) 
       4.  Replace M14 or M15 
       5.  Replace PRCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.4   C-2006 

Code 
      C-2006 
Classification 
      Main body: Communication error 
Cause 
      Communication error between the printer control board (PRCB) and the belt motor (M18). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Belt motor (M18) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 

                                                                             K -200 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Turn OFF the sub power switch and unplug the power plug. Restart the main body after 10 seconds. 
       2.  Check the connector connection and the wiring between PRCB and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: Main body 
           (3/3):17-O) 
       4.  Replace M18. 
       5.  Replace PRCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.5   C-2201* 

Code 
      C-2201* 
Classification 
       Main body: Developing motor abnormality 
Cause 
      An error detection signal of M20 is detected continuously for a specified period of time while the developing motor /Y (M20) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /Y (M20) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and the motor, and repair it if any abnormality. 
       2.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:Main body (3/3): 
           18-O) 
       3.  Replace M20 and PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.6   C-2202* 

Code 
      C-2202* 
Classification 
       Main body: Developing motor abnormality 
Cause 
      An error detection signal of M21 is detected continuously for a specified period of time while the developing motor /M (M21) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /M (M21) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and the motor, and repair it if any abnormality. 
       2.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:Main body (3/3): 
           19-O) 
       3.  Replace M21 and PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.7   C-2203* 

Code 
      C-2203* 
Classification 
       Main body: Developing motor abnormality 
Cause 
      An error detection signal of M22 is detected continuously for a specified period of time while the developing motor /C (M22) is ON.An error 
      detection signal of M22 is detected continuously for a specified period of time while the developing motor /C (M22) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /C (M22) 
Correction 

                                                                             K -201 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and the motor, and repair it if any abnormality. 
       2.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:Main body (3/3): 
           20-O) 
       3.  Replace M22 and PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.8   C-2204* 

Code 
      C-2204* 
Classification 
       Main body: Developing motor abnormality 
Cause 
      An error detection signal of M23 is detected continuously for a specified period of time while the developing motor /K (M23) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /K (M23) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and the motor, and repair it if any abnormality. 
       2.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:Main body (3/3): 
           21-O) 
       3.  Replace M23 and PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.9   C-2220 

Code 
      C-2220 
Classification 
       Main body: Transfer belt unit abnormality 
Cause 
      An error detection signal of M18 is detected continuously for a specified period of time while the belt motor (M18) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Belt motor (M18) 
        •  Encoder sensor belt /1 (PS89), /2 (PS90) 
        •  DC power supply /2 (DCPS2) 
        •  Intermediate transfer unit 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the intermediate transfer unit and repair/replace it if any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: Main body 
           (3/3):17-O) 
       4.  Check the connector connection and the wiring between DCPS2 and PRCB, and repair it if any abnormality. 
       5.  Replace M18. 
       6.  Replace PS89 and PS90. 
        7.  Replace DCPS2. 
       8.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.10     C-2221 

Code 
      C-2221 
Classification 
       Main body: 1st transfer motor abnormality 
Cause 
      While the 1st transfer HP sensor (PS15) is ON, PS15 does not turn OFF within a specified period of time after the 1st transfer pressure 
       release motor (M19) turns ON. 
      While PS15 is OFF, PS15 does not turn ON within a specified period of time after M19 turns ON. 

                                                                              K -202 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  AC drive board (ACDB) 
        •  Printer control board (PRCB) 
        •  1st transfer pressure release motor (M19) 
        •  1st transfer HP sensor (PS15) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the 1st transfer fusing pressure release section, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and the sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the motor, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between ACDB and PRCB, and repair it if any abnormality. 
       5.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 10-B) 
       6.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: Main body (3/3): 16-O) 
        7.  Replace PS15. 
       8.  Replace M19. 
       9.  Replace ACDB. 
       10. Replace PRCB. 
       11. Replace M19 and ACDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.11   C-2222 

Code 
      C-2222 
Classification 
       Main body: Toner supply abnormality 
Cause 
      While one of the toner supply motors /Y (M49), /M (M50), /C (M51), /K (M52), toner bottle motor (M53), and toner bottle clutches /Y 
       (CL14), /M (CL15), /C (CL16) and /K (CL17) are ON, an error detection signal of one of them is detected for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Toner supply drive board (TSDB) 
        •  Toner supply motor /Y (M49) 
        •  Toner supply motor /M (M50) 
        •  Toner supply motor /C (M51) 
        •  Toner supply motor /K (M52) 
        •  Toner bottle motor (M53) 
        •  Toner bottle clutch /Y (CL14) 
        •  Toner bottle clutch /M (CL15) 
        •  Toner bottle clutch /C (CL16) 
        •  Toner bottle clutch /K (CL17) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the toner supply section, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between TSDB and motor/clutch, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PRCB and TSDB, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor and clutch and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: 
           Main body (3/3): 17-C, 18-A, 19-A, 17-A, 20-A) 
       5.  Replace CL14, CL15, CL16 or CL17 
       6.  Replace M49, M50, M51, M52 or M53 
        7.  Replace TSDB. 
       8.  Replace PRCB. 
       9.  Replace TSDB and one of M49, M50, M51, M52, M53, CL14, CL15, CL16, CL17 at a time 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.12   C-2223 

Code 
      C-2223 
Classification 
       Main body: Low drum load torque abnormality 
Cause 
      One of the torque is not recovered within a specified period of time after the low load torque recovery control of the drum motors /Y 
       (M14), /M (M15), /C (M16), /K (M17) starts. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 

                                                                              K -203 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Estimated abnormal parts 
        •  Drum motor /Y (M14) 
        •  Drum motor /M (M15) 
        •  Drum motor /C (M16) 
        •  Drum motor /K (M17) 
        •  Printer control board (PRCB) 
Correction 
       Note 
        • 
        
Solution 
        1.  Check the drum unit, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: Main body 
           (3/3): 8-P, 7-P, 11-P, 9-P) 
       4.  Replace M14, M15, M16 or M17. 
       5.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.13   C-2231* 

Code 
      C-2231* 
Classification 
       Main body: Drum motor abnormality 
Cause 
      An error detection signal of M14 is detected continuously for a specified period of time while the drum motor /Y (M14) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Drum motor /Y (M14) 
        •  Encoder sensor /Y1 (PS81), /Y2 (PS82) 
        •  DC power supply /2 (DCPS2) 
        •  Drum Unit /Y 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the drum unit and repair/replace it if any abnormality 
       2.  Check the connector connection and the wiring between PRCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: Main body 
           (3/3):8-P) 
       4.  Check the connector connection and the wiring between DCPS2 and PRCB, and repair it if any abnormality. 
       5.  Replace PS81 and PS82. 
       6.  Replace M14. 
        7.  Replace PRCB. 
       8.  Replace DCPS2. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.14   C-2232* 

Code 
      C-2232* 
Classification 
       Main body: Drum motor abnormality 
Cause 
      An error detection signal of M15 is detected continuously for a specified period of time while the drum motor /M (M15) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Drum motor /M (M15) 
        •  Encoder sensor /M1 (PS83), /M2 (PS84) 
        •  DC power supply /2 (DCPS2) 
        •  Drum Unit /M 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the drum unit and repair/replace it if any abnormality 
       2.  Check the connector connection and the wiring between PRCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: Main body 
           (3/3):7-P) 
       4.  Check the connector connection and the wiring between DCPS2 and PRCB, and repair it if any abnormality. 

                                                                              K -204 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       5.  Replace PS83 and PS84. 
       6.  Replace M15. 
       7.  Replace PRCB. 
       8.  Replace DCPS2. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.15   C-2233* 

Code 
      C-2233* 
Classification 
      Main body: Drum motor abnormality 
Cause 
      An error detection signal of M16 is detected continuously for a specified period of time while the drum motor /C (M16) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Drum motor /C (M16) 
        •  Encoder sensor /C1 (PS85), /C2 (PS86) 
        •  DC power supply /2 (DCPS2) 
        •  Drum Unit /C 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the drum unit and repair/replace it if any abnormality 
       2.  Check the connector connection and the wiring between PRCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: Main body 
           (3/3):11-P) 
       4.  Check the connector connection and the wiring between DCPS2 and PRCB, and repair it if any abnormality. 
       5.  Replace PS85 and PS86. 
       6.  Replace M16. 
       7.  Replace PRCB. 
       8.  Replace DCPS2. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.16     C-2234* 

Code 
      C-2234* 
Classification 
      Main body: Drum motor abnormality 
Cause 
      An error detection signal of M17 is detected continuously for a specified period of time while the drum motor /K (M17) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Drum motor /K (M17) 
        •  Encoder sensor /K1 (PS87), /K2 (PS88) 
        •  DC power supply /2 (DCPS2) 
        •  Drum Unit /K 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the drum unit and repair/replace it if any abnormality 
       2.  Check the connector connection and the wiring between PRCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: Main body 
           (3/3):9-P) 
       4.  Check the connector connection and the wiring between DCPS2 and PRCB, and repair it if any abnormality. 
       5.  Replace PS87 and PS88. 
       6.  Replace M17. 
       7.  Replace PRCB. 
       8.  Replace DCPS2. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.17   C-2241* 

Code 
      C-2241* 
Classification 
      Main body: Drum motor abnormality 

                                                                             K -205 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Cause 
      An error detection signal of M14 is detected continuously for a specified period of time while the drum motor /Y (M14) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Drum motor /Y (M14) 
        •  Encoder sensor /Y1 (PS81), /Y2 (PS82) 
        •  DC power supply /2 (DCPS2) 
        •  Drum unit /Y 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the drum unit and repair/replace it if any abnormality 
       2.  Check the connector connection and the wiring between PRCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: Main body 
           (3/3): 8-P) 
       4.  Check the connector connection and the wiring between DCPS2 and PRCB, and repair it if any abnormality. 
       5.  Replace PS81 and PS82. 
       6.  Replace M14. 
       7.  Replace PRCB 
       8.  Replace DCPS2. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.18   C-2242* 

Code 
      C-2242* 
Classification 
      Main body: Drum motor abnormality 
Cause 
      An error detection signal of M15 is detected continuously for a specified period of time while the drum motor /M (M15) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Drum motor /M (M15) 
        •  Encoder sensor /M1 (PS83) and /M2 (PS84) 
        •  DC power supply /2 (DCPS2) 
        •  Drum unit /M 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the drum unit and repair/replace it if any abnormality 
       2.  Check the connector connection and the wiring between PRCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: Main body 
           (3/3): 7-P) 
       4.  Check the connector connection and the wiring between DCPS2 and PRCB, and repair it if any abnormality. 
       5.  Replace PS83 and PS84. 
       6.  Replace M15. 
       7.  Replace PRCB 
       8.  Replace DCPS2. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.19   C-2243* 

Code 
      C-2243* 
Classification 
      Main body: Drum motor abnormality 
Cause 
      An error detection signal of M16 is detected continuously for a specified period of time while the drum motor /C (M16) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Drum motor /C (M16) 
        •  Encoder sensors /C1 (PS85) and /C2 (PS86) 
        •  DC power supply /2 (DCPS2) 
        •  Drum unit /C 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 

                                                                             K -206 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        
Solution 
        1.  Check the drum unit and repair/replace it if any abnormality 
       2.  Check the connector connection and the wiring between PRCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: Main body 
           (3/3): 11-P) 
       4.  Check the connector connection and the wiring between DCPS2 and PRCB, and repair it if any abnormality. 
       5.  Replace PS85 and PS86. 
       6.  Replace M16. 
        7.  Replace PRCB 
       8.  Replace DCPS2. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.20   C-2244* 

Code 
      C-2244* 
Classification 
       Main body: Drum motor abnormality 
Cause 
      An error detection signal of M17 is detected continuously for a specified period of time while the drum motor /K (M17) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Drum motor /K (M17) 
        •  Encoder sensors /K1 (PS87) and /K2 (PS88) 
        •  DC power supply /2 (DCPS2) 
        •  Drum unit /K 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the drum unit and repair/replace it if any abnormality 
       2.  Check the connector connection and the wiring between PRCB and motor/sensor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: Main body 
           (3/3): 9-P) 
       4.  Check the connector connection and the wiring between DCPS2 and PRCB, and repair it if any abnormality. 
       5.  Replace PS87 and PS88. 
       6.  Replace M17. 
        7.  Replace PRCB 
       8.  Replace DCPS2. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.21   C-2301 

Code 
      C-2301 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of M48 is detected continuously for a specified period of time while the charge intake fan (FM48) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Toner supply drive board (TSDB) 
        •  Charge intake fan (FM48) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between TSDB and the fan, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and TSDB, and repair it if any abnormality. 
       3.  Rotate the fan by I/O or by hand, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 22-A) 
       4.  Replace FM48 
       5.  Replace TSDB 
       6.  Replace PRCB 
        7.  Replace FM48 and TSDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.22   C-2302* 

Code 

                                                                              K -207 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      C-2302* 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of FM12 is detected continuously for a specified period of time while the motor cooling fan /1 (FM12) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Motor cooling fan /1 (FM12) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and the fun, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 14-D) 
       3.  Replace FM12 and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.23   C-2303* 

Code 
      C-2303* 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of FM11 is detected continuously for a specified period of time while the transfer belt fan (FM11) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Transfer belt fan (FM11) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and the fun, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 9-D) 
       3.  Replace FM11. 
       4.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.24   C-2304* 

Code 
      C-2304* 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of FM45 is detected continuously for a specified period of time while the developing fan /1 (FM45) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing fan /1 (FM45) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and the fun, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 13-D) 
       3.  Replace FM45 and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.25   C-2305* 

Code 
      C-2305* 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of FM46 is detected continuously for a specified period of time while the developing fan /2 (FM46) is ON. 
Measures to take when alert occurs 

                                                                             K -208 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing fan /2 (FM46) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and the fun, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 13-D) 
       3.  Replace FM46. 
       4.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.15.26   C-2306* 

Code 
      C-2306* 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of FM13 is detected continuously for a specified period of time while the motor cooling fan /2 (FM13) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Drum fan /2 (FM13) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and the fun, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 14-D) 
       3.  Replace FM13. 
       4.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16   Solution 12 (C-2401_2500) 

2.16.1   C-2401 

Code 
      C-2401 
Classification 
       Main body: Erase lamp abnormality 
Cause 
      The erase lamp /Y (EL/Y) set status cannot be detected. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Erase lamp /Y (EL/Y) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check the EL section, and clean/repair it if any abnormality. (Wiring diagram: Main body (3/3): 1-O) 
       3.  Check the connector connection and the wiring between PRCB and EL, and repair it if any abnormality. 
       4.  Replace EL. 
       5.  Replace PRCB. 
       6.  Replace EL and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.2   C-2402 

Code 
      C-2402 
Classification 
       Main body: Erase lamp abnormality 
Cause 
      The erase lamp /M (EL/M) set status cannot be detected. 
Measures to take when alert occurs 

                                                                             K -209 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Erase lamp /M (EL/M) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check the EL section, and clean/repair it if any abnormality. (Wiring diagram: Main body (3/3): 1-O) 
       3.  Check the connector connection and the wiring between PRCB and EL, and repair it if any abnormality. 
       4.  Replace EL. 
       5.  Replace PRCB. 
       6.  Replace EL and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.3   C-2403 

Code 
      C-2403 
Classification 
       Main body: Erase lamp abnormality 
Cause 
      The erase lamp /C (EL/C) set status cannot be detected. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Erase lamp /C (EL/C) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check the EL section, and clean/repair it if any abnormality. (Wiring diagram: Main body (3/3): 1-O) 
       3.  Check the connector connection and the wiring between PRCB and EL, and repair it if any abnormality. 
       4.  Replace EL. 
       5.  Replace PRCB. 
       6.  Replace EL and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.4   C-2404 

Code 
      C-2404 
Classification 
       Main body: Erase lamp abnormality 
Cause 
      The erase lamp /K (EL/K) set status cannot be detected. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Erase lamp /K (EL/K) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check the EL section, and clean/repair it if any abnormality. (Wiring diagram: Main body (3/3): 1-O) 
       3.  Check the connector connection and the wiring between PRCB and EL, and repair it if any abnormality. 
       4.  Replace EL. 
       5.  Replace PRCB. 
       6.  Replace EL and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.5     C-2411 

Code 
      C-2411 
Classification 
       Main body: TCR sensor abnormality 
Cause 

                                                                             K -210 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      The output of the TCR sensor /Y (TCRS/Y) cannot be controlled. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  TCR sensor /Y (TCRS/Y) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 3-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Replace TCRS. 
       6.  Replace PRCB. 
        7.  Replace TCRS and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.6   C-2412 

Code 
      C-2412 
Classification 
       Main body: TCR sensor abnormality 
Cause 
      The output of the TCR sensor /M (TCRS/M) cannot be controlled. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  TCR sensor /M (TCRS /M) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 3-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Replace TCRS. 
       6.  Replace PRCB. 
        7.  Replace TCRS and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.7   C-2413 

Code 
      C-2413 
Classification 
       Main body: TCR sensor abnormality 
Cause 
      The output of the TCR sensor /C (TCRS/C) cannot be controlled. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  TCR sensor /C (TCRS /C) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 3-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Replace TCRS. 
       6.  Replace PRCB. 
        7.  Replace TCRS and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

                                                                              K -211 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

2.16.8   C-2414 

Code 
      C-2414 
Classification 
      Main body: TCR sensor abnormality 
Cause 
      The output of the TCR sensor /K (TCRS/K) cannot be controlled. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  TCR sensor /K (TCRS /K) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 2-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Replace TCRS. 
       6.  Replace PRCB. 
       7.  Replace TCRS and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.9     C-2421 

Code 
      C-2421 
Classification 
      Main body: Developing drive abnormality 
Cause 
      While the developing motor /Y (M20) is ON or after a specified period of time from the TCR sensor /Y (TCRS/Y) initial adjustment starts, 
      TCRS/Y detects a value lower than the prescribed one. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /Y (M20) 
        •  TCR sensor /Y (TCRS/Y) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 3-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between PRCB and the developing motor, and repair it if any abnormality. 
       6.  Rotate the developing motor by I/O, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 18-O) 
       7.  Replace TCRS. 
       8.  Replace M20. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.10     C-2422 

Code 
      C-2422 
Classification 
      Main body: Developing drive abnormality 
Cause 
      While the developing motor /M (M21) is ON or after a specified period of time from the TCR sensor /M (TCRS/M) initial adjustment starts, 
      TCRS/M detects a value lower than the prescribed one. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /M (M21) 
        •  TCR sensor /M (TCRS/M) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        

                                                                             K -212 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 3-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between PRCB and the developing motor, and repair it if any abnormality. 
       6.  Rotate the developing motor by I/O, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 19-O) 
        7.  Replace TCRS. 
       8.  Replace M21. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.11   C-2423 

Code 
       C-2423 
Classification 
       Main body: Developing drive abnormality 
Cause 
      While the developing motor /C (M22) is ON or after a specified period of time from the TCR sensor /C (TCRS/C) initial adjustment starts, 
      TCRS/C detects a value lower than the prescribed one. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /C (M22) 
        •  TCR sensor /C (TCRS/C) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 3-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between PRCB and the developing motor, and repair it if any abnormality. 
       6.  Rotate the developing motor by I/O, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 20-O) 
        7.  Replace TCRS. 
       8.  Replace M22. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.12   C-2424 

Code 
       C-2424 
Classification 
       Main body: Developing drive abnormality 
Cause 
      While the developing motor /K (M23) is ON or after a specified period of time from the TCR sensor /K (TCRS/K) initial adjustment starts, 
      TCRS/K detects a value lower than the prescribed one. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /K (M23) 
        •  TCR sensor /K (TCRS/K) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 2-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between PRCB and the developing motor, and repair it if any abnormality. 
       6.  Rotate the developing motor by I/O, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 21-O) 
        7.  Replace TCRS. 
       8.  Replace M23. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

                                                                              K -213 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

2.16.13   C-2431 

Code 
      C-2431 
Classification 
      Main body: TCR sensor initial adjustment abnormality (low density) 
Cause 
      While in the initial adjustment of the TCR sensor /Y (TCRS/Y), TCRS/Y detects a value higher than the prescribed one with the minimum 
      control voltage. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /Y (M20) 
        •  TCR sensor /Y (TCRS/Y) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 3-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between PRCB and the developing motor, and repair it if any abnormality. 
       6.  Rotate the developing motor by I/O, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 18-O) 
       7.  Replace TCRS. 
       8.  Replace M20. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.14   C-2432 

Code 
      C-2432 
Classification 
      Main body: TCR sensor initial adjustment abnormality (low density) 
Cause 
      While in the initial adjustment of the TCR sensor /M (TCRS/M), TCRS/M detects a value higher than the prescribed one with the minimum 
      control voltage. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /M (M21) 
        •  TCR sensor /M (TCRS/M) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 3-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between PRCB and the developing motor, and repair it if any abnormality. 
       6.  Rotate the developing motor by I/O, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 19-O) 
       7.  Replace TCRS. 
       8.  Replace M21. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.15   C-2433 

Code 
      C-2433 
Classification 
      Main body: TCR sensor initial adjustment abnormality (low density) 
Cause 
      While in the initial adjustment of the TCR sensor /C (TCRS/C), TCRS/C detects a value higher than the prescribed one with the minimum 
      control voltage. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /C (M22) 
        •  TCR sensor /C (TCRS/C) 

                                                                             K -214 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 3-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between PRCB and the developing motor, and repair it if any abnormality. 
       6.  Rotate the developing motor by I/O, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 20-O) 
        7.  Replace TCRS. 
       8.  Replace M22. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.16   C-2434 

Code 
       C-2434 
Classification 
       Main body: TCR sensor initial adjustment abnormality (low density) 
Cause 
      While in the initial adjustment of the TCR sensor /K (TCRS/K), TCRS/K detects a value higher than the prescribed one with the minimum 
      control voltage. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /K (M23) 
        •  TCR sensor /K (TCRS/K) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 2-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between PRCB and the developing motor, and repair it if any abnormality. 
       6.  Rotate the developing motor by I/O, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 21-O) 
        7.  Replace TCRS. 
       8.  Replace M23. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.17   C-2441 

Code 
       C-2441 
Classification 
       Main body: TCR sensor initial adjustment abnormality (high density) 
Cause 
      While in the initial adjustment of the TCR sensor /Y (TCRS/Y), TCRS/Y detects a value lower than the prescribed one with the maximum 
      control voltage. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /Y (M20) 
        •  TCR sensor /Y (TCRS/Y) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 3-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between PRCB and the developing motor, and repair it if any abnormality. 
       6.  Rotate the developing motor by I/O, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 18-O) 
        7.  Replace TCRS. 
       8.  Replace M20. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 

                                                                              K -215 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Control while detached 
  

2.16.18   C-2442 

Code 
      C-2442 
Classification 
       Main body: TCR sensor initial adjustment abnormality (high density) 
Cause 
      While in the initial adjustment of the TCR sensor /M (TCRS/M), TCRS/M detects a value lower than the prescribed one with the maximum 
      control voltage. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /M (M21) 
        •  TCR sensor /M (TCRS/M) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 3-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between PRCB and the developing motor, and repair it if any abnormality. 
       6.  Rotate the developing motor by I/O, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 19-O) 
        7.  Replace TCRS. 
       8.  Replace M21. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.19   C-2443 

Code 
      C-2443 
Classification 
       Main body: TCR sensor initial adjustment abnormality (high density) 
Cause 
      While in the initial adjustment of the TCR sensor /C (TCRS/C), TCRS/C detects a value lower than the prescribed one with the maximum 
      control voltage. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /C (M22) 
        •  TCR sensor /C (TCRS/C) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 3-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between PRCB and the developing motor, and repair it if any abnormality. 
       6.  Rotate the developing motor by I/O, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 20-O) 
        7.  Replace TCRS. 
       8.  Replace M22. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.20     C-2444 

Code 
      C-2444 
Classification 
       Main body: TCR sensor initial adjustment abnormality (high density) 
Cause 
      While in the initial adjustment of the TCR sensor /K (TCRS/K), TCRS/K detects a value lower than the prescribed one with the maximum 
      control voltage. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 

                                                                              K -216 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  Developing motor /K (M23) 
        •  TCR sensor /K (TCRS/K) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 2-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between PRCB and the developing motor, and repair it if any abnormality. 
       6.  Rotate the developing motor by I/O, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 21-O) 
        7.  Replace TCRS. 
       8.  Replace M23. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.21   C-2451 

Code 
      C-2451 
Classification 
       Main body: Toner low density abnormality 
Cause 
      When the developing motor /Y (M20) is ON, the maximum detection value of TCR sensor /Y (TCRS/Y) is the specified value and the 
      difference between the maximum detection value and the minimum detection value is over the specified value. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /Y (M20) 
        •  TCR sensor /Y (TCRS/Y) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 3-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between PRCB and the developing motor, and repair it if any abnormality. 
       6.  Rotate the developing motor by I/O, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 18-O) 
        7.  Replace TCRS. 
       8.  Replace M20. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.22   C-2452 

Code 
      C-2452 
Classification 
       Main body: Toner low density abnormality 
Cause 
      When the developing motor /M (M21) is ON, the maximum detection value of TCR sensor /M (TCRS/M) is the specified value and the 
      difference between the maximum detection value and the minimum detection value is over the specified value. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /M (M21) 
        •  TCR sensor /M (TCRS/M) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 3-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between PRCB and the developing motor, and repair it if any abnormality. 
       6.  Rotate the developing motor by I/O, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 19-O) 
        7.  Replace TCRS. 
       8.  Replace M21. 

                                                                              K -217 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.23   C-2453 

Code 
      C-2453 
Classification 
       Main body: Toner low density abnormality 
Cause 
      When the developing motor /C (M22) is ON, the maximum detection value of TCR sensor /C (TCRS/C) is the specified value and the 
      difference between the maximum detection value and the minimum detection value is over the specified value. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /C (M22) 
        •  TCR sensor /C (TCRS/C) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 3-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between PRCB and the developing motor, and repair it if any abnormality. 
       6.  Rotate the developing motor by I/O, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 20-O) 
       7.  Replace TCRS. 
       8.  Replace M22. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.24   C-2454 

Code 
      C-2454 
Classification 
       Main body: Toner low density abnormality 
Cause 
      When the developing motor /K (M23) is ON, the maximum detection value of TCR sensor /K (TCRS/K) is the specified value and the 
      difference between the maximum detection value and the minimum detection value is over the specified value. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing motor /K (M23) 
        •  TCR sensor /K (TCRS/K) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check TCRS, and clean/repair it if there is sensor dirt or any abnormality. (Wiring diagram: Main body (3/3): 2-O) 
       3.  Check the developing section, and clean/repair it if there is sensor dirt or any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and TCRS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between PRCB and the developing motor, and repair it if any abnormality. 
       6.  Rotate the developing motor by I/O, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 21-O) 
       7.  Replace TCRS. 
       8.  Replace M23. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.16.25   C-2470 

Code 
      C-2470 
Classification 
       Main body: Process unit mount connection abnormality 
Cause 
       Process unit mount is not connected. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 

                                                                             K -218 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                      K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  Printer control board (PRCB) 
        •  Process mount 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check the process mount, and repair/replace it if any abnormality. 
       3.  Check the connector connection and the wiring between PRCB and the process mount, and repair it if any abnormality. 
       4.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.17   Solution 13 (C-2701_2800) 

2.17.1   C-2701 

Code 
       C-2701 
Classification 
       Main body: High voltage unit /1 abnormality 
Cause 
      An error detection signal of the charging corona /Y is detected while the charging corona /Y is ON. The signal is detected even after 
      turning OFF/ON for a prescribed time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  High voltage unit /1 (HV1) 
        •  Charging corona /Y 
        •  Printer control board (PRCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connection of the high voltage contact of the process unit, and clean/repair it if any abnormality. 
       2.  Check the charger (charging wire and the grid), and clean/repair it if there is any dirt or abnormality. 
       3.  Check the connector connection and the wiring between HV1 and the charger, and repair it if any abnormality. (Wiring diagram: Main 
           body (2/3): 1-P) 
       4.  Check the connector connection and the wiring between PRCB and HV1, and repair it if any abnormality. (Wiring diagram: Main body 
           (2/3): 1-M) 
       5.  Replace HV1. 
        6. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.17.2   C-2702 

Code 
       C-2702 
Classification 
       Main body: High voltage unit /1 abnormality 
Cause 
      An error detection signal of the charging corona /M is detected while the charging corona /M is ON. The signal is detected even after 
      turning OFF/ON for a prescribed time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  High voltage unit /1 (HV1) 
        •  Charging corona /M 
        •  Printer control board (PRCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connection of the high voltage contact of the process unit, and clean/repair it if any abnormality. 
       2.  Check the charger (charging wire and the grid), and clean/repair it if there is any dirt or abnormality. 
       3.  Check the connector connection and the wiring between HV1 and the charger, and repair it if any abnormality. (Wiring diagram: Main 
           body (2/3): 32-P). 
       4.  Check the connector connection and the wiring between PRCB and HV1, and repair it if any abnormality. (Wiring diagram: Main body 
           (2/3): 1-M). 
       5.  Replace HV1. 
        6. Replace PRCB 
Faulty part isolation DIPSW 
Control while detached 
  

                                                                              K -219 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

2.17.3   C-2703 

Code 
      C-2703 
Classification 
       Main body: High voltage unit /1 abnormality 
Cause 
      An error detection signal of the charging corona /C is detected while the charging corona /C is ON. The signal is detected even after 
      turning OFF/ON for a prescribed time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  High voltage unit /1 (HV1) 
        •  Charging corona /C 
        •  Printer control board (PRCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connection of the high voltage contact of the process unit, and clean/repair it if any abnormality. 
       2.  Check the charger (charging wire and the grid), and clean/repair it if there is any dirt or abnormality. 
       3.  Check the connector connection and the wiring between HV1 and the charger, and repair it if any abnormality. (Wiring diagram: Main 
           body (2/3): 3-P). 
       4.  Check the connector connection and the wiring between PRCB and HV1, and repair it if any abnormality. (Wiring diagram: Main body 
           (2/3): 1-M). 
       5.  Replace HV1. 
       6.  Replace PRCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.17.4     C-2704 

Code 
      C-2704 
Classification 
       Main body: High voltage unit /1 abnormality 
Cause 
      An error detection signal of the charging corona /K is detected while the charging corona /K is ON. The signal is detected even after 
      turning OFF/ON for a prescribed time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  High voltage unit /1 (HV1) 
        •  Charging corona /K 
        •  Printer control board (PRCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connection of the high voltage contact of the process unit, and clean/repair it if any abnormality. 
       2.  Check the charger (charging wire and the grid), and clean/repair it if there is any dirt or abnormality. 
       3.  Check the connector connection and the wiring between HV1 and the charger, and repair it if any abnormality. (Wiring diagram: Main 
           body (2/3): 4-P). 
       4.  Check the connector connection and the wiring between PRCB and HV1, and repair it if any abnormality. (Wiring diagram: Main body 
           (2/3): 1-M). 
       5.  Replace HV1. 
       6.  Replace PRCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.17.5   C-2711 

Code 
      C-2711 
Classification 
       Main body: High voltage unit /2 abnormality 
Cause 
      An error detection signal of the 1st transfer /Y is detected while the 1st transfer /Y is ON. The signal is detected even after turning OFF/ON 
      for a prescribed time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  High voltage unit /2 (HV2) 
        •  1st transfer roller /Y 
        •  Printer control board (PRCB) 
Correction 

                                                                              K -220 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connection of the high voltage contact of the process unit, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between HV2 and the 1st transfer unit, and repair it if any abnormality. (Wiring 
           diagram: Main body (2/3): 6-O) 
       3.  Check the connector connection and the wiring between PRCB and HV2, and repair it if any abnormality. 
       4.  Replace HV2. 
       5.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.17.6   C-2712 

Code 
       C-2712 
Classification 
       Main body: High voltage unit /2 abnormality 
Cause 
      An error detection signal of the 1st transfer /M is detected while the 1st transfer /M is ON. The signal is detected even after turning OFF/ 
       ON for a prescribed time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  High voltage unit /2 (HV2) 
        •  1st transfer roller /M 
        •  Printer control board (PRCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connection of the high voltage contact of the process unit, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between HV2 and the 1st transfer unit, and repair it if any abnormality. (Wiring 
           diagram: Main body (2/3): 6-O) 
       3.  Check the connector connection and the wiring between PRCB and HV2, and repair it if any abnormality. 
       4.  Replace HV2. 
       5.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.17.7   C-2713 

Code 
       C-2713 
Classification 
       Main body: High voltage unit /2 abnormality 
Cause 
      An error detection signal of the 1st transfer /C is detected while the 1st transfer /C is ON. The signal is detected even after turning OFF/ON 
      for a prescribed time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  High voltage unit /2 (HV2) 
        •  1st transfer roller /C 
        •  Printer control board (PRCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connection of the high voltage contact of the process unit, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between HV2 and the 1st transfer unit, and repair it if any abnormality. (Wiring 
           diagram: Main body (2/3): 6-O) 
       3.  Check the connector connection and the wiring between PRCB and HV2, and repair it if any abnormality. 
       4.  Replace HV2. 
       5.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.17.8   C-2714 

Code 
       C-2714 
Classification 
       Main body: High voltage unit /2 abnormality 
Cause 

                                                                              K -221 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      An error detection signal of the 1st transfer /K is detected while the 1st transfer /K is ON. The signal is detected even after turning OFF/ON 
      for a prescribed time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  High voltage unit /2 (HV2) 
        •  1st transfer roller /K 
        •  Printer control board (PRCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connection of the high voltage contact of the process unit, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between HV2 and the 1st transfer unit, and repair it if any abnormality. (Wiring 
           diagram: Main body (2/3): 7-O) 
       3.  Check the connector connection and the wiring between PRCB and HV2, and repair it if any abnormality. 
       4.  Replace HV2. 
       5.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.17.9   C-2720 

Code 
       C-2720 
Classification 
       Main body: High voltage unit /2 abnormality 
Cause 
      An error detection signal of the 2nd transfer is detected while the 2nd transfer is ON. The signal is detected even after turning OFF/ON for 
      a prescribed time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  High voltage unit /2 (HV2) 
        •  2nd transfer roller 
        •  Printer control board (PRCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connection of the high voltage contact of the process unit, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between HV2 and the 2nd transfer unit, and repair it if any abnormality. (Wiring 
           diagram: Main body (2/3): 7-O) 
       3.  Check the connector connection and the wiring between PRCB and HV2, and repair it if any abnormality. 
       4.  Replace HV2. 
       5.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.17.10     C-2721 

Code 
       C-2721 
Classification 
       Main body: High voltage unit /2 abnormality 
Cause 
      An error detection signal of the separation charger is detected while the separation charger is ON. The signal is detected even after 
      turning OFF/ON for a prescribed time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  High voltage unit /2 (HV2) 
        •  Separation charger 
        •  Printer control board (PRCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connection of the high voltage contact of the process unit, and clean/repair it if any abnormality. 
       2.  Check the connector connection and the wiring between HV2 and the separation charger, and repair it if any abnormality. (Wiring 
           diagram: Main body (2/3): 8-O) 
       3.  Check the connector connection and the wiring between PRCB and HV2, and repair it if any abnormality. 
       4.  Replace HV2. 
       5.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 

                                                                              K -222 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

  

2.18   Solution 14 (C-2801_3000) 

2.18.1   C-2801 

Code 
      C-2801 
Classification 
       Main body: Gamma correction abnormality 
Cause 
      The output voltage of the IDC sensor (IDCS) is detected more that the specified value on the patch /Y of the developing DC maximum 
      output. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing unit /Y 
        •  IDC sensor (IDCS) 
        •  IDC shutter solenoid (SD3) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check the installation of developing unit and I/O, and repair/replace it if any abnormality. 
       3.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       4.  Check the I/O of SD3 and repair/replace it if any abnormality. 
       5.  Check the sensor and clean/replace it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
       6.  Replace IDCS. 
        7.  Replacing the developing unit 
       8.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.18.2   C-2802 

Code 
      C-2802 
Classification 
       Main body: Gamma correction abnormality 
Cause 
      The output voltage of the IDC sensor (IDCS) is detected more that the specified value on the patch /M of the developing DC maximum 
      output. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing unit /M 
        •  IDC sensor (IDCS) 
        •  IDC shutter solenoid (SD3) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check the installation of developing unit and I/O, and repair/replace it if any abnormality. 
       3.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       4.  Check the I/O of SD3 and repair/replace it if any abnormality. 
       5.  Check the sensor, and clean/repair it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
       6.  Replace IDCS. 
        7.  Replacing the developing unit 
       8.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.18.3   C-2803 

Code 
      C-2803 
Classification 
       Main body: Gamma correction abnormality 
Cause 
      The output voltage of the IDC sensor (IDCS) is detected more that the specified value on the patch /C of the developing DC maximum 
      output. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 

                                                                              K -223 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                      K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  Printer control board (PRCB) 
        •  Developing unit /C 
        •  IDC sensor (IDCS) 
        •  IDC shutter solenoid (SD3) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check the installation of developing unit and I/O, and repair/replace it if any abnormality. 
       3.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       4.  Check the I/O of SD3 and repair/replace it if any abnormality. 
       5.  Check the sensor, and clean/repair it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
        6. Replace IDCS. 
        7.  Replacing the developing unit 
       8.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.18.4   C-2804 

Code 
       C-2804 
Classification 
       Main body: Gamma correction abnormality 
Cause 
      The output voltage of the IDC sensor (IDCS) is detected more that the specified value on the patch /K of the developing DC maximum 
       output. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing unit /K 
        •  IDC sensor (IDCS) 
        •  IDC shutter solenoid (SD3) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check the installation of developing unit and I/O, and repair/replace it if any abnormality. 
       3.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       4.  Check the I/O of SD3 and repair/replace it if any abnormality. 
       5.  Check the sensor, and clean/repair it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
        6. Replace IDCS. 
        7.  Replacing the developing unit 
       8.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.18.5   C-2811 

Code 
       C-2811 
Classification 
       Main body: Gamma correction abnormality 
Cause 
      The proper value cannot be figured out within the specified time by the correction of the patch density correction /Y. Or, the proper value of 
      the developing DC output is 0 or lower. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing unit /Y 
        •  IDC sensor (IDCS) 
        •  IDC shutter solenoid (SD3) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check the installation of developing unit and I/O, and repair/replace it if any abnormality. 
       3.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       4.  Check the I/O of SD3 and repair/replace it if any abnormality. 
       5.  Check the sensor, and clean/repair it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
        6. Replace IDCS. 

                                                                              K -224 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        7.  Replacing the developing unit 
       8.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.18.6   C-2812 

Code 
      C-2812 
Classification 
       Main body: Gamma correction abnormality 
Cause 
      The proper value cannot be figured out within the specified time by the correction of the patch density correction /M. Or, the proper value 
      of the developing DC output is 0 or lower. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing unit /M 
        •  IDC sensor (IDCS) 
        •  IDC shutter solenoid (SD3) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check the installation of developing unit and I/O, and repair/replace it if any abnormality. 
       3.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       4.  Check the I/O of SD3 and repair/replace it if any abnormality. 
       5.  Check the sensor, and clean/repair it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
       6.  Replace IDCS. 
        7.  Replacing the developing unit 
       8.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.18.7   C-2813 

Code 
      C-2813 
Classification 
       Main body: Gamma correction abnormality 
Cause 
      The proper value cannot be figured out within the specified time by the correction of the patch density correction /C. Or, the proper value of 
      the developing DC output is 0 or lower. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing unit /C 
        •  IDC sensor (IDCS) 
        •  IDC shutter solenoid (SD3) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check the installation of developing unit and I/O, and repair/replace it if any abnormality. 
       3.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       4.  Check the I/O of SD3 and repair/replace it if any abnormality. 
       5.  Check the sensor, and clean/repair it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
       6.  Replace IDCS. 
        7.  Replacing the developing unit 
       8.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.18.8   C-2814 

Code 
      C-2814 
Classification 
       Main body: Gamma correction abnormality 
Cause 
      The proper value cannot be figured out within the specified time by the correction of the patch density correction /K. Or, the proper value of 
      the developing DC output is 0 or lower. 
Measures to take when alert occurs 

                                                                              K -225 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing unit /K 
        •  IDC sensor (IDCS) 
        •  IDC shutter solenoid (SD3) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check the installation of developing unit and I/O, and repair/replace it if any abnormality. 
       3.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       4.  Check the I/O of SD3 and repair/replace it if any abnormality. 
       5.  Check the sensor, and clean/repair it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
       6.  Replace IDCS. 
        7.  Replacing the developing unit 
       8.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.18.9   C-2821 

Code 
       C-2821 
Classification 
       Main body: Dot diameter correction abnormality 
Cause 
      The output voltage of the IDC sensor (IDCS) is detected more that the specified value on the patch /Y of the MPC maximum output. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing unit /Y 
        •  IDC sensor (IDCS) 
        •  IDC shutter solenoid (SD3) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check the installation of developing unit and I/O, and repair/replace it if any abnormality. 
       3.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       4.  Check the I/O of SD3 and repair/replace it if any abnormality. 
       5.  Check the sensor, and clean/repair it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
       6.  Replace IDCS. 
        7.  Replacing the developing unit 
       8.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.18.10     C-2822 

Code 
       C-2822 
Classification 
       Main body: Dot diameter correction abnormality 
Cause 
      The output voltage of the IDC sensor (IDCS) is detected more that the specified value on the patch /M of the MPC maximum output. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing unit /M 
        •  IDC sensor (IDCS) 
        •  IDC shutter solenoid (SD3) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check the installation of developing unit and I/O, and repair/replace it if any abnormality. 
       3.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       4.  Check the I/O of SD3 and repair/replace it if any abnormality. 
       5.  Check the sensor, and clean/repair it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
       6.  Replace IDCS. 

                                                                              K -226 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        7.  Replacing the developing unit 
       8.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.18.11   C-2823 

Code 
      C-2823 
Classification 
       Main body: Dot diameter correction abnormality 
Cause 
      The output voltage of the IDC sensor (IDCS) is detected more that the specified value on the patch /C of the MPC maximum output. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing unit /C 
        •  IDC sensor (IDCS) 
        •  IDC shutter solenoid (SD3) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check the installation of developing unit and I/O, and repair/replace it if any abnormality. 
       3.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       4.  Check the I/O of SD3 and repair/replace it if any abnormality. 
       5.  Check the sensor, and clean/repair it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
       6.  Replace IDCS. 
        7.  Replacing the developing unit 
       8.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.18.12   C-2824 

Code 
      C-2824 
Classification 
       Main body: Dot diameter correction abnormality 
Cause 
      The output voltage of the IDC sensor (IDCS) is detected more that the specified value on the patch /K of the MPC maximum output. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing unit /K 
        •  IDC sensor (IDCS) 
        •  IDC shutter solenoid (SD3) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check the installation of developing unit and I/O, and repair/replace it if any abnormality. 
       3.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       4.  Check the I/O of SD3 and repair/replace it if any abnormality. 
       5.  Check the sensor, and clean/repair it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
       6.  Replace IDCS. 
        7.  Replacing the developing unit 
       8.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.18.13   C-2831 

Code 
      C-2831 
Classification 
       Main body: Dot diameter correction abnormality 
Cause 
      The proper value cannot be figured out within the specified time by the correction of the dot diameter correction /Y. Or, the MPC proper 
      value is 0 or lower. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 

                                                                              K -227 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                      K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  Printer control board (PRCB) 
        •  Developing unit /Y 
        •  IDC sensor (IDCS) 
        •  IDC shutter solenoid (SD3) 
        •  Writing unit /Y 
        •  Printer image processing board (PRIPB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check that the writing unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       3.  Check the installation of developing unit and I/O, and repair/replace it if any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between the writing unit and PRIPB, and repair it if any abnormality. 
        6.  Check the I/O of SD3 and repair/replace it if any abnormality. 
        7.  Check the sensor and clean/replace it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
       8.  Replace IDCS. 
       9.  Replacing the developing unit 
       10. Replace PRIPB. 
       11. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.18.14   C-2832 

Code 
       C-2832 
Classification 
       Main body: Dot diameter correction abnormality 
Cause 
      The proper value cannot be figured out within the specified time by the correction of the dot diameter correction /M. Or, the MPC proper 
      value is 0 or lower. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing unit /M 
        •  IDC sensor (IDCS) 
        •  IDC shutter solenoid (SD3) 
        •  Writing unit /M 
        •  Printer image processing board (PRIPB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check that the writing unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       3.  Check the installation of developing unit and I/O, and repair/replace it if any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between writing unit and PRIPB, and repair it if any abnormality. 
        6.  Check the I/O of SD3 and repair/replace it if any abnormality. 
        7.  Check the sensor, and clean/repair it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
       8.  Replace IDCS. 
       9.  Replacing the developing unit 
       10. Replace PRIPB. 
       11. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.18.15   C-2833 

Code 
       C-2833 
Classification 
       Main body: Dot diameter correction abnormality 
Cause 
      The proper value cannot be figured out within the specified time by the correction of the dot diameter correction /C. Or, the MPC proper 
      value is 0 or lower. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing unit /C 
        •  IDC sensor (IDCS) 
        •  IDC shutter solenoid (SD3) 
        •  Writing unit /C 

                                                                              K -228 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                      K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  Printer image processing board (PRIPB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check that the writing unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       3.  Check the installation of developing unit and I/O, and repair/replace it if any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between writing unit and PRIPB, and repair it if any abnormality. 
        6.  Check the I/O of SD3 and repair/replace it if any abnormality. 
        7.  Check the sensor, and clean/repair it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
       8.  Replace IDCS. 
       9.  Replacing the developing unit 
       10. Replace PRIPB. 
       11. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.18.16   C-2834 

Code 
       C-2834 
Classification 
       Main body: Dot diameter correction abnormality 
Cause 
      The proper value cannot be figured out within the specified time by the correction of the dot diameter correction /K. Or, the MPC proper 
      value is 0 or lower. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing unit /K 
        •  IDC sensor (IDCS) 
        •  IDC shutter solenoid (SD3) 
        •  Writing unit /K 
        •  Printer image processing board (PRIPB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check that the writing unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       3.  Check the installation of developing unit and I/O, and repair/replace it if any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between writing unit and PRIPB, and repair it if any abnormality. 
        6.  Check the I/O of SD3 and repair/replace it if any abnormality. 
        7.  Check the sensor, and clean/repair it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
       8.  Replace IDCS. 
       9.  Replacing the developing unit 
       10. Replace PRIPB. 
       11. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.18.17   C-2840 

Code 
       C-2840 
Classification 
       Main body: Gamma correction abnormality 
Cause 
      The IDC sensor (IDCS) output value is detected not within the specified range on the IDC sensor (IDCS) base correction when the rough 
       adjustment ends. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  IDC sensor (IDCS) 
        •  IDC shutter solenoid (SD3) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check that the belt cleaner blade on the intermediate transfer section is not curled and reinstall/repair it if any abnormality. 

                                                                              K -229 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       3.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       4.  Check the I/O of SD3 and repair/replace it if any abnormality. 
       5.  Check the sensor and clean/replace it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
       6.  Replace IDCS. 
       7.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.18.18   C-2841 

Code 
      C-2841 
Classification 
       Main body: Gamma correction abnormality 
Cause 
      The LED applied voltage is detected not within the specified range on the IDC sensor (IDCS) base correction. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  IDC sensor (IDCS) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the process unit is correctly installed without looseness, and reinstall/repair it if any abnormality. 
       2.  Check that there is no curling-up of belt cleaner blade of the intermediate transfer section, and install/repair it if any abnormality. 
       3.  Check the connector connection and the wiring between PRCB and IDCS, and repair it if any abnormality. 
       4.  Check the sensor and clean/replace it if any dirt or abnormality. (Wiring diagram: Main body (3/3): 5-P) 
       5.  Replace IDCS. 
       6.  Replace PRCB. 
       7.  Replace IDCS and PRCB at a time 
Faulty part isolation DIPSW 
Control while detached 
  

2.19   Solution 15 (C-3001_3500) 

2.19.1   C-3101 

Code 
      C-3101 
Classification 
       Main body: Motor abnormality 
Cause 
      An error detection signal of M29 is detected continuously for a specified period of time while the fusing motor (M29) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Conveyance drive board (CDB) 
        •  Printer control board (PRCB) 
        •  Fusing motor (M29) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the fusing unit, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between CDB and the motor, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between PRCB and CDB, and repair it if any abnormality. 
       5.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:Main body (1/3): 
           3-I) 
       6.  Replace M29. 
       7.  Replace CDB. 
       8.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.19.2     C-3102 

Code 
      C-3102 
Classification 
       Main body: Motor abnormality 
Cause 
      While the fusing release home sensor (PS16) is ON, PS16 does not turn OFF within a specified period of time after the fusing motor (M29) 
      turns ON. While PS16 is OFF, PS16 does not turn ON within a specified period of time after M29 turns ON. 

                                                                             K -230 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Conveyance drive board (CDB) 
        •  Printer control board (PRCB) 
        •  Fusing motor (M29) 
        •  Fusing release home sensor (PS16) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the front door is closed properly, and repair it if any abnormality. 
       2.  Check the fusing unit, and repair it if any abnormality. 
       3.  Check the fusing drive gear system, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between CDB and motor/sensor, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between PRCB and CDB, and repair it if any abnormality. 
       6.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:Main body (1/3): 
           3-I) 
        7.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: Main body (1/3): 2-I) 
       8.  Replace M29. 
       9.  Replace PS16. 
       10. Replace CDB. 
       11. Replace PRCB. 
       12. Replace M29 and CDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.19.3   C-3103 

Code 
       C-3103 
Classification 
       Main body: Motor abnormality 
Cause 
      The 2nd transfer pressure release motor (M34) does not turn OFF within a specified period of time after it turns ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Conveyance drive board (CDB) 
        •  2nd transfer pressure release motor (M34) 
        •  2nd transfer HP sensor (PS24) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the front door is closed properly, and repair it if any abnormality. 
       2.  Check the 2nd transfer intermediate transfer unit, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between CDB and motor/sensor, and repair it if any abnormality. 
       4.  Check I/O of the sensor, and repair/replace it if any abnormality. (Wiring diagram: Main body (1/3): 7-O) 
       5.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram:Main body (1/3): 
           10-P) 
       6.  Replace PS24. 
        7.  Replace M34. 
       8.  Replace CDB. 
       9.  Replace M34 and CDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.19.4   C-3301* 

Code 
       C-3301* 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of FM37 is detected continuously for a specified period of time while the fusing ventilation fan (FM37) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Fusing ventilation fan (FM37) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and the fan, and repair it if any abnormality. 

                                                                              K -231 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       2.  Rotate the fan by I/O or by hand, and repair/replace it if any abnormality. (Wiring diagram: Main body (3/3): 15-D) 
       3.  Replace FM37. 
       4.  Replace PRCB 
       5.  Replace FM37 and PRCB at a time 
Faulty part isolation DIPSW 
Control while detached 
  

2.19.5   C-3302* 

Code 
      C-3302* 
Classification 
      Main body: Fan abnormality 
Cause 
      An error detection signal of FM10 is detected continuously for a specified period of time while the fusing belt ventilation fan (FM10) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Fusing belt ventilation fan (FM10) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between PRCB and the fun, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 9-D) 
       3.  Replace FM10. 
       4.  Replace PRCB. 
       5.  Replace FM10 and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.19.6   C-3303 

Code 
      C-3303 
Classification 
      Main body: Fan abnormality 
Cause 
      An error detection signal of FM65 is detected continuously for a specified period of time while the fusing cooling fan (FM65) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Conveyance drive board (CDB) 
        •  Fusing cooling fan (FM65) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring between CDB and the fan, and repair it if any abnormality. 
       3.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 2-I) 
       4.  Replace FM65. 
       5.  Replace CDB. 
       6.  Replace FM65 and CDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.19.7   C-3304 

Code 
      C-3304 
Classification 
      Main body: Fan abnormality 
Cause 
      An error detection signal of any of FM7, FM8 or FM9 is detected continuously for a specified period of time while the fusing separation 
      fans /1 (FM7), /2 (FM8) and /3 (FM9) are ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Fusing separation fan /1 (FM7) 
        •  Fusing separation fan /2 (FM8) 
        •  Fusing separation fan /3 (FM9) 
Correction 

                                                                             K -232 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       Note 
        • 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and the fun, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 7-D) 
       3.  Replace FM7, FM8 and FM9. 
       4.  Replace PRCB. 
       5.  Replace FM7, FM8, FM9 and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20   Solution 16 (C-3501_4000) 

2.20.1   C-3501* 

Code 
       C-3501* 
Classification 
       Main body: Fusing high temperature abnormality 
Cause 
       Fusing high temperature abnormality 
      The temperature sensor /1 (TH1) detects 250 °C or higher value continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /1 (L2) 
        •  Fusing heater lamp /2 (L3) 
        •  Fusing heater lamp /3 (L4) 
        •  Temperature sensor /1 (TH1) 
Correction 
      WARNING 
        •  After replacing the defective parts, be sure to set the DIPSW 3-1 to 0. If DIPSW3-1 is set to 0 before defective parts are fixed, 
           it may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-E) 
       4.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-D) 
       5.  Check the installation condition of TH1 and temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-F) 
       6.  Replace TH1. 
        7.  ReplaceL2, L3 and L4. 
       8.  Replace ACDB. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.2   C-3502* 

Code 
       C-3502* 
Classification 
       Main body: Fusing high temperature abnormality 
Cause 
       Fusing high temperature abnormality 
      The temperature sensor /3 (TH3) detects 250 °C or higher value continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /1 (L2) 
        •  Fusing heater lamp /2 (L3) 
        •  Fusing heater lamp /3 (L4) 
        •  Temperature sensor /3 (TH3) 
Correction 
      WARNING 
        •  After replacing the defective parts, be sure to set the DIPSW3-1 to 0. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        

                                                                              K -233 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair/replace it if any abnormality 
           (Wiring diagram: Main body (1/3): 3-E) 
       4.  Check the installation condition of the fusing heater lamp and ON/OFF by the I/O, and repair/replace it if any abnormality (Wiring 
           diagram: Main body (1/3): 3-D) 
       5.  Check the installation condition of TH3 and the temperature by I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-F) 
       6.  Replace TH3. 
        7.  Replace L2, L3 and L4. 
       8.  Replace ACDB. 
       9.  Replace PRCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.3   C-3503* 

Code 
      C-3503* 
Classification 
       Main body: Fusing high temperature abnormality 
Cause 
       Fusing high temperature abnormality 
      The temperature sensor /2 (TH2) detects 250 °C or higher value continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /4 (L5) 
        •  Temperature sensor /2 (TH2) 
Correction 
      WARNING 
        •  After replacing the defective parts, be sure to set the DIPSW 3-1 to 0. If DIPSW3-1 is set to 0 before defective parts are fixed, 
           it may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 
       4.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 
       5.  Check the installation condition of TH2 and temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-G) 
       6.  Replace TH2. 
        7.  Replace L5. 
       8.  Replace ACDB. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.4   C-3504* 

Code 
      C-3504* 
Classification 
       Main body: Fusing high temperature abnormality 
Cause 
       Fusing high temperature abnormality 
      The temperature sensor /4 (TH4) detects 250 °C or higher value continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /4 (L5) 
        •  Temperature sensor /4 (TH4) 
Correction 
      WARNING 
        •  After replacing the defective parts, be sure to set the DIPSW3-1 to 0. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 

                                                                              K -234 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair/replace it if any abnormality 
           (Wiring diagram: Main body (1/3): 3-G) 
       4.  Check the installation condition of the fusing heater lamp and ON/OFF by the I/O, and repair/replace it if any abnormality (Wiring 
           diagram: Main body (1/3): 3-G) 
       5.  Check the installation condition of TH4 and the temperature by I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-G) 
       6.  Replace TH4. 
        7.  Replace L5. 
       8.  Replace ACDB. 
       9.  Replace PRCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.5   C-3505* 

Code 
      C-3505* 
Classification 
       Main body: Fusing high temperature abnormality 
Cause 
       Fusing high temperature abnormality 
      The temperature sensor /1 (TH1) detects 150 °C or higher value continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /1 (L2) 
        •  Fusing heater lamp /2 (L3) 
        •  Fusing heater lamp /3 (L4) 
        •  Temperature sensor /1 (TH1) 
Correction 
      WARNING 
        •  Be sure to set the DIPSW3-1 to 0 after replacing the defective parts. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair/replace it if any abnormality. 
           (Wiring diagram: Main body (1/3): 3-E) 
       4.  Check the installation condition of the fusing heater lamp and ON/OFF by the I/O, and repair/replace it if any abnormality (Wiring 
           diagram: Main body (1/3): 3-D) 
       5.  Check the installation condition of TH1 and temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-F) 
       6.  Replace TH1. 
        7.  Replace L2, L3 and L4. 
       8.  Replace ACDB. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.6   C-3506* 

Code 
      C-3506* 
Classification 
       Main body: Fusing high temperature abnormality 
Cause 
       Fusing high temperature abnormality 
      The temperature sensor /2 (TH2) detects 150 °C or higher value continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /4 (L5) 
        •  Temperature sensor /2 (TH2) 
Correction 
      WARNING 
        •  After replacing the defective parts, be sure to set the DIPSW 3-1 to 0. If DIPSW3-1 is set to 0 before defective parts are fixed, 
           it may cause fire. 
        

                                                                              K -235 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-E, 3-G) 
       4.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 
       5.  Check the installation condition of TH2 and temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-F, 3-G) 
       6.  Replace TH2. 
        7.  Replace L5. 
       8.  Replace ACDB. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.7   C-3508* 

Code 
      C-3508* 
Classification 
       Main body: Fusing high temperature abnormality 
Cause 
       Paper is wound around the fusing roller. 
      J31-02 occurs 4 times in a row. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  Conveyance drive board (CDB) 
        •  Registration motor (M30) 
        •  High voltage unit /1 (HV1) 
        •  High voltage unit /2 (HV2) 
        •  Fusing paper exit sensor (PS17) 
Correction 
      WARNING 
        •  After replacing the defective parts, be sure to set the DIPSW 3-1 to 0. If DIPSW3-1 is set to 0 before defective parts are fixed, 
           it may cause fire. 
        
Solution 
        1.  Check the fusing roller, and repair it if any abnormality such as paper wrap. 
       2.  Check the toner on the transfer belt and clean it if any abnormality. 
       3.  Check the connector connection and the wiring between CDB and the sensor, and repair it if any abnormality. 
       4.  Check the I/O drive of the motor, and repair/replace it if any abnormality. (Wiring diagram: Main body (1/3):10-O) 
       5.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: Main body (1/3): 3-I) 
       6.  Replace PS17. 
        7.  Replace CDB. 
       8.  Replace HV /1 and /2. 
       9.  Replace PRCB. 
       10. Replace fusing unit. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.8   C-3509* 

Code 
      C-3509* 
Classification 
       Main body: Fusing high temperature abnormality 
Cause 
       Fusing roller /Up temperature gap abnormality 
      When the fusing roller /Up is higher than the specified temperature, the gap detected by the temperature sensors /1 (TH1) and /3 (TH3)are 
       larger than the specified value. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /1 (L2) 
        •  Fusing heater lamp /2 (L3) 
        •  Fusing heater lamp /3 (L4) 
        •  Temperature sensor /1 (TH1) 
        •  Temperature sensor /3 (TH3) 
Correction 

                                                                              K -236 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                      K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      WARNING 
        •  Be sure to set the DIPSW 3-1 to 0 after replacing the defective parts. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 
        1.  Check that the front door is not opened/closed frequently, and wait for several minutes with the front door closed. 
       2.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       3.  Check the connector connection and the wiring of the heater and the sensor, and repair it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-E, 3-F, 3-G) 
       4.  Check the RL1, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 8-C) 
       5.  Check the conduction of thermostat. 
        6.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
        7.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-E, 3-G) 
       8.  Check the installation condition of TH1 and TH3 and temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-F, 3-G) 
       9.  Replace TH1 and TH3. 
       10. ReplaceL2, L3 and L4. 
       11. Replace ACDB. 
       12. Replace PRCB. 
       13. Replace fusing unit. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.9   C-3801* 

Code 
       C-3801* 
Classification 
       Main body: Fusing low temperature abnormality 
Cause 
       Fusing low temperature abnormality. 
      While fusing idling or printing, the temperature sensor /1 (TH1) detects lower than the specified temperature for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /1 (L2) 
        •  Fusing heater lamp /2 (L3) 
        •  Fusing heater lamp /3 (L4) 
        •  Temperature sensor /1 (TH1) 
        •  Thermostat /1 (TS1) 
        •  Thermostat /2 (TS2) 
Correction 
      WARNING 
        •  After replacing the defective parts, be sure to set the DIPSW 3-1 to 0. If DIPSW3-1 is set to 0 before defective parts are fixed, 
           it may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring of the heater and the sensor, and repair it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-E, 3-F) 
       3.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-E) 
       4.  Check the RL1, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 8-C) 
       5.  Check the conduction of thermostat. 
        6.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
        7.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-E) 
       8.  Check the installation condition of TH1 and temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-F) 
       9.  Replace TH1. 
       10. Replace TS1 and TS2. 
       11. ReplaceL2, L3 and L4. 
       12. Replace ACDB. 
       13. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.10   C-3802* 

Code 
       C-3802* 
Classification 
       Main body: Fusing low temperature abnormality 

                                                                              K -237 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Cause 
       Fusing low temperature abnormality. 
      While fusing idling or printing, the temperature sensor /3 (TH3) detects lower than the specified temperature for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /1 (L2) 
        •  Fusing heater lamp /2 (L3) 
        •  Fusing heater lamp /3 (L4) 
        •  Temperature sensor /3 (TH3) 
        •  Thermostat /1 (TS1) 
        •  Thermostat /2 (TS2) 
Correction 
      WARNING 
        •  Be sure to set the DIPSW3-1 to 0 after replacing the defective parts. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring of the heater and the sensor, and repair it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-E, 3-F) 
       3.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-E) 
       4.  Check the RL1, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 8-C) 
       5.  Check the conduction of thermostat. 
       6.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
        7.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair/replace it if any abnormality. 
           (Wiring diagram: Main body (1/3): 3-E) 
       8.  Check the installation condition of TH3 and the temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-F) 
       9.  Replace TH3. 
       10. Replace TS1 and TS2. 
       11. Replace L2, L3 and L4. 
       12. Replace ACDB. 
       13. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.11   C-3803* 

Code 
       C-3803* 
Classification 
       Main body: Fusing low temperature abnormality 
Cause 
       Fusing low temperature abnormality. 
      While fusing idling or printing, the temperature sensor /2 (TH2) detects lower than the specified temperature for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /4 (L5) 
        •  Temperature sensor /2 (TH2) 
        •  Thermostat /3 (TS3) 
Correction 
      WARNING 
        •  After replacing the defective parts, be sure to set the DIPSW 3-1 to 0. If DIPSW3-1 is set to 0 before defective parts are fixed, 
           it may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring of the heater and the sensor, and repair it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-G) 
       3.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 
       4.  Check the RL1, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 8-C) 
       5.  Check the conduction of thermostat. 
       6.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
        7.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 

                                                                              K -238 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       8.  Check the installation condition of TH2 and temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-G) 
       9.  Replace TH2. 
       10. Replace TS3. 
       11. Replace L5. 
       12. Replace ACDB. 
       13. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.12   C-3804* 

Code 
      C-3804* 
Classification 
       Main body: Fusing low temperature abnormality 
Cause 
       Fusing low temperature abnormality. 
      While fusing idling or printing, the temperature sensor /4 (TH4) detects lower than the specified temperature for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /4 (L5) 
        •  Temperature sensor /4 (TH4) 
        •  Thermostat /3 (TS3) 
Correction 
      WARNING 
        •  After replacing the defective parts, be sure to set the DIPSW 3-1 to 0. If DIPSW3-1 is set to 0 before defective parts are fixed, 
           it may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring of the heater and the sensor, and repair it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-G) 
       3.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 
       4.  Check the RL1, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 8-C) 
       5.  Check the conduction of thermostat. 
       6.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
       7.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 
       8.  Check the installation condition of TH4 and temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-G) 
       9.  Replace TH4. 
       10. Replace TS3. 
       11. Replace L5. 
       12. Replace ACDB. 
       13. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.13     C-3805* 

Code 
      C-3805* 
Classification 
       Main body: Fusing low temperature abnormality 
Cause 
       Fusing low temperature abnormality. 
      While fusing idling or printing, the temperature sensor /1 (TH1) detects lower than the specified temperature for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /1 (L2) 
        •  Fusing heater lamp /2 (L3) 
        •  Fusing heater lamp /3 (L4) 
        •  Temperature sensor /1 (TH1) 
        •  Thermostat /1 (TS1) 
        •  Thermostat /2 (TS2) 
Correction 

                                                                             K -239 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      WARNING 
        •  Be sure to set the DIPSW3-1 to 0 after replacing the defective parts. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring of the heater and the sensor, and repair it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-E, 3-F) 
       3.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-E) 
       4.  Check the RL1, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 8-C) 
       5.  Check the conduction of thermostat. 
       6.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
        7.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair/replace it if any abnormality. 
           (Wiring diagram: Main body (1/3): 3-E) 
       8.  Check the installation condition of TH1 and temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-F) 
       9.  Replace TH1. 
       10. Replace TS1 and TS2. 
       11. Replace L2, L3 and L4. 
       12. Replace ACDB. 
       13. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.14   C-3806* 

Code 
       C-3806* 
Classification 
       Main body: Fusing low temperature abnormality 
Cause 
       Fusing low temperature abnormality. 
      While fusing idling or printing, the temperature sensor /2 (TH2) detects lower than the specified temperature for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /4 (L5) 
        •  Temperature sensor /2 (TH2) 
        •  Thermostat /3 (TS3) 
Correction 
      WARNING 
        •  After replacing the defective parts, be sure to set the DIPSW3-1 to 0. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring of the heater and the sensor, and repair it if any abnormality (Wiring diagram: Main 
           body (1/3): 3-G) 
       3.  Check the installation condition of the fusing heater lamp and ON/OFF by the I/O, and repair/replace it if any abnormality (Wiring 
           diagram: Main body (1/3): 3-G) 
       4.  Check the RL1, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 8-C) 
       5.  Check the conduction of the thermostat 
       6.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
        7.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair/replace it if any abnormality 
           (Wiring diagram: Main body (1/3): 3-G) 
       8.  Check the installation condition of TH2 and the temperature by I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-G) 
       9.  Replace TH2. 
       10. Replace TS3. 
       11. Replace L5. 
       12. Replace ACDB. 
       13. Replace PRCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.15   C-3901* 

Code 
       C-3901* 
Classification 
       Main body: Fusing sensor abnormality 
Cause 
       Fusing high temperature abnormality (hardware detection). 

                                                                              K -240 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      The temperature sensor /3 (TH3) detects an error detection signal continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /1 (L2) 
        •  Fusing heater lamp /2 (L3) 
        •  Fusing heater lamp /3 (L4) 
        •  Temperature sensor /3 (TH3) 
Correction 
      WARNING 
        •  Be sure to set the DIPSW3-1 to 0 after replacing the defective parts. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair/replace it if any abnormality. 
           (Wiring diagram: Main body (1/3): 3-E) 
       4.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-E) 
       5.  Check the installation condition of TH3 and the temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-F) 
       6.  Replace TH3. 
        7.  Replace L2, L3 and L4. 
       8.  Replace ACDB. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.16   C-3902* 

Code 
      C-3902* 
Classification 
       Main body: Fusing sensor abnormality 
Cause 
       Fusing high temperature abnormality (hardware detection). 
      The temperature sensor /4 (TH4) detects an error detection signal continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /4 (L5) 
        •  Temperature sensor /4 (TH4) 
Correction 
      WARNING 
        •  After replacing the defective parts, be sure to set the DIPSW3-1 to 0. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair/replace it if any abnormality 
           (Wiring diagram: Main body (1/3): 3-E, 3-G) 
       4.  Check the installation condition of the fusing heater lamp and ON/OFF by the I/O, and repair/replace it if any abnormality (Wiring 
           diagram: Main body (1/3): 3-G) 
       5.  Check the installation condition of TH4 and the temperature by I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-F, 3-G) 
       6.  Replace TH4. 
        7.  Replace L5. 
       8.  Replace ACDB. 
       9.  Replace PRCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.17   C-3903* 

Code 
      C-3903* 
Classification 
       Main body: Fusing sensor abnormality 
Cause 

                                                                              K -241 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       Fusing low temperature abnormality (hardware detection) 
      The temperature sensor /1 (TH1) detects an error detection signal continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /1 (L2) 
        •  Fusing heater lamp /2 (L3) 
        •  Fusing heater lamp /3 (L4) 
        •  Temperature sensor /1 (TH1) 
        •  Thermostat /1 (TS1) 
        •  Thermostat /2 (TS2) 
Correction 
      WARNING 
        •  Be sure to set the DIPSW3-1 to 0 after replacing the defective parts. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring of the heater and the sensor, and repair it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-E, 3-F) 
       3.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-E) 
       4.  Check the RL1, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 8-C) 
       5.  Check the conduction of thermostat. 
       6.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
        7.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair/replace it if any abnormality. 
           (Wiring diagram: Main body (1/3): 3-E) 
       8.  Check the installation condition of TH1 and temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-F) 
       9.  Replace TH1. 
       10. Replace TS1 and TS2. 
       11. Replace L2, L3 and L4. 
       12. Replace ACDB. 
       13. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.18   C-3904* 

Code 
       C-3904* 
Classification 
       Main body: Fusing sensor abnormality 
Cause 
       Fusing low temperature abnormality (hardware detection) 
      The temperature sensor /3 (TH3) detects an error detection signal continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /1 (L2) 
        •  Fusing heater lamp /2 (L3) 
        •  Fusing heater lamp /3 (L4) 
        •  Temperature sensor /3 (TH3) 
        •  Thermostat /1 (TS1) 
        •  Thermostat /2 (TS2) 
Correction 
      WARNING 
        •  Be sure to set the DIPSW3-1 to 0 after replacing the defective parts. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring of the heater and the sensor, and repair it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-E, 3-F) 
       3.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-E) 
       4.  Check the RL1, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 8-C) 
       5.  Check the conduction of thermostat. 
       6.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 

                                                                              K -242 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       7.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair/replace it if any abnormality. 
           (Wiring diagram: Main body (1/3): 3-E) 
       8.  Check the installation condition of TH3 and the temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-F) 
       9.  Replace TH3. 
       10. Replace TS1 and TS2. 
       11. Replace L2, L3 and L4. 
       12. Replace ACDB. 
       13. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.19   C-3905* 

Code 
      C-3905* 
Classification 
       Main body: Fusing sensor abnormality 
Cause 
       Fusing low temperature abnormality (hardware detection). 
      The temperature sensor /2 (TH2) detects an error detection signal continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /4 (L5) 
        •  Temperature sensor /2 (TH2) 
        •  Thermostat /3 (TS3) 
Correction 
      WARNING 
        •  Be sure to set the DIPSW3-1 to 0 after replacing the defective parts. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring of the heater and the sensor, and repair it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-G) 
       3.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 
       4.  Check the RL1, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 8-C) 
       5.  Check the conduction of thermostat. 
       6.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
       7.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 
       8.  Check the installation condition of TH2 and temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-G) 
       9.  Replace TH2. 
       10. Replace TS3. 
       11. Replace L5. 
       12. Replace ACDB. 
       13. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.20     C-3906* 

Code 
      C-3906* 
Classification 
       Main body: Fusing sensor abnormality 
Cause 
       Fusing low temperature abnormality (hardware detection). 
      The temperature sensor /4 (TH4) detects an error detection signal continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /4 (L5) 
        •  Temperature sensor /4 (TH4) 
        •  Thermostat /3 (TS3) 
Correction 
      WARNING 
        •  Be sure to set the DIPSW3-1 to 0 after replacing the defective parts. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 

                                                                             K -243 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring of the heater and the sensor, and repair it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-G) 
       3.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 
       4.  Check the RL1, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 8-C) 
       5.  Check the conduction of thermostat. 
       6.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
        7.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 
       8.  Check the installation condition of TH4 and temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-G) 
       9.  Replace TH4. 
       10. Replace TS3. 
       11. Replace L5. 
       12. Replace ACDB. 
       13. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.21   C-3907* 

Code 
       C-3907* 
Classification 
       Main body: Fusing sensor abnormality 
Cause 
       Fusing high temperature abnormality (hardware detection). 
      The temperature sensor /1 (TH1) detects an error detection signal continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /1 (L2) 
        •  Fusing heater lamp /2 (L3) 
        •  Fusing heater lamp /3 (L4) 
        •  Temperature sensor /1 (TH1) 
Correction 
      WARNING 
        •  Be sure to set the DIPSW3-1 to 0 after replacing the defective parts. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring of the heater and the sensor, and repair it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-E, 3-F) 
       3.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-E) 
       4.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
       5.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair/replace it if any abnormality. 
           (Wiring diagram: Main body (1/3): 3-E) 
       6.  Check the installation condition of TH1, and adjust/replace it if any abnormality. (Wiring diagram: Main body (1/3): 3-F) 
        7.  Replace TH1. 
       8.  Replace L2, L3 and L4. 
       9.  Replace ACDB. 
       10. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.22   C-3908* 

Code 
       C-3908* 
Classification 
       Main body: Fusing sensor abnormality 
Cause 
       Fusing low temperature abnormality (hardware detection). 
      The temperature sensor /1 (TH1) detects an error detection signal continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 

                                                                              K -244 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  AC drive board (ACDB) 
        •  Fusing heater lamp /1 (L2) 
        •  Fusing heater lamp /2 (L3) 
        •  Fusing heater lamp /3 (L4) 
        •  Temperature sensor /1 (TH1) 
        •  Thermostat /1 (TS1) 
        •  Thermostat /2 (TS2) 
Correction 
      WARNING 
        •  Be sure to set the DIPSW3-1 to 0 after replacing the defective parts. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring of the heater and the sensor, and repair it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-E, 3-F) 
       3.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-E) 
       4.  Check the RL1, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 8-C) 
       5.  Check the conduction of thermostat. 
       6.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
        7.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair/replace it if any abnormality. 
           (Wiring diagram: Main body (1/3): 3-E) 
       8.  Check the installation condition of TH1 and temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-F) 
       9.  Replace TH1. 
       10. Replace TS1 and TS2. 
       11. Replace L2, L3 and L4. 
       12. Replace ACDB. 
       13. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.23   C-3909* 

Code 
       C-3909* 
Classification 
       Main body: Fusing sensor abnormality 
Cause 
       Fusing high temperature abnormality (hardware detection). 
      The temperature sensor /2 (TH2) detects an error detection signal continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /4 (L5) 
        •  Temperature sensor /2 (TH2) 
Correction 
      WARNING 
        •  Be sure to set the DIPSW3-1 to 0 after replacing the defective parts. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 
       4.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 
       5.  Check the installation condition of TH2 and temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-G) 
       6.  Replace TH2. 
        7.  Replace L5. 
       8.  Replace ACDB. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.24   C-3910* 

Code 
       C-3910* 
Classification 
       Main body: Fusing sensor abnormality 

                                                                              K -245 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Cause 
       Fusing low temperature abnormality (hardware detection). 
      The temperature sensor /2 (TH2) detects an error detection signal continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /4 (L5) 
        •  Temperature sensor /2 (TH2) 
        •  Thermostat /3 (TS3) 
Correction 
      WARNING 
        •  Be sure to set the DIPSW3-1 to 0 after replacing the defective parts. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring of the heater and the sensor, and repair it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-G) 
       3.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 
       4.  Check the RL1, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 8-C) 
       5.  Check the conduction of thermostat. 
       6.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
        7.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 
       8.  Check the installation condition of TH2 and temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-G) 
       9.  Replace TH2. 
       10. Replace TS3. 
       11. Replace L5. 
       12. Replace ACDB. 
       13. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.25   C-3911* 

Code 
       C-3911* 
Classification 
       Main body: Fusing sensor abnormality 
Cause 
      The detected temperature of the temperature sensor /1 (TH1) has not reached to 100°C within the specified period of time after the sub 
       power switch (SW2) turned ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /1 (L2) 
        •  Fusing heater lamp /2 (L3) 
        •  Fusing heater lamp /3 (L4) 
        •  Temperature sensor /1 (TH1) 
        •  Thermostat /1 (TS1) 
        •  Thermostat /2 (TS2) 
Correction 
      WARNING 
        •  After replacing the defective parts, be sure to set the DIPSW 3-1 to 0. If DIPSW3-1 is set to 0 before defective parts are fixed, 
           it may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring of the heater and the sensor, and repair it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-E, 3-F) 
       3.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-E) 
       4.  Check the RL1, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 8-C) 
       5.  Check the conduction of thermostat. 
       6.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
        7.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-E) 

                                                                              K -246 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       8.  Check the installation condition of TH1 and temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-F) 
       9.  Replace TH1. 
       10. Replace TS1 and TS2. 
       11. ReplaceL2, L3 and L4. 
       12. Replace ACDB. 
       13. Replace PRCB. 
       14. Replace ACDB and L2, L3, L4 at a time 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.26   C-3912* 

Code 
      C-3912* 
Classification 
       Main body: Fusing sensor abnormality 
Cause 
      The detected temperature of the temperature sensor /2 (TH2) has not reached to 100°C within the specified period of time after the sub 
       power switch (SW2) turned ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /4 (L5) 
        •  Temperature sensor /2 (TH2) 
        •  Thermostat /3 (TS3) 
Correction 
      WARNING 
        •  Be sure to set the DIPSW3-1 to 0 after replacing the defective parts. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring of the heater and the sensor, and repair it if any abnormality. (Wiring diagram: Main 
           body (1/3): 3-G) 
       3.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 
       4.  Check the RL1, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 8-C) 
       5.  Check the conduction of thermostat. 
       6.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
        7.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 
       8.  Check the installation condition of TH2 and temperature of I/O, and adjust/replace it if any abnormality. (Wiring diagram: Main body 
           (1/3): 3-G) 
       9.  Replace TH2. 
       10. Replace TS3. 
       11. Replace L5. 
       12. Replace ACDB. 
       13. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.27     C-3913* 

Code 
      C-3913* 
Classification 
       Main body: Fusing sensor abnormality 
Cause 
      The fusing unit is not set. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check that the fusing unit is properly set and repair it if any abnormality. 
       2.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       3.  Check the connector connection and the wiring between PRCB and the fan on the main body side, and repair it if any abnormality. 
       4.  Replace PRCB. 

                                                                              K -247 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       5.  Replace fusing unit. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.28   C-3914* 

Code 
      C-3914* 
Classification 
       Main body: Fusing sensor abnormality 
Cause 
       Fusing high temperature abnormality (hardware detection). 
      The temperature sensor /1 (TH1) detects an error detection signal continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /1 (L2) 
        •  Fusing heater lamp /2 (L3) 
        •  Fusing heater lamp /3 (L4) 
        •  Temperature sensor /1 (TH1) 
Correction 
      WARNING 
        •  Be sure to set the DIPSW3-1 to 0 after replacing the defective parts. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair/replace it if any abnormality. 
           (Wiring diagram: Main body (1/3): 3-E) 
       4.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-E) 
       5.  Check the installation condition of TH1, and adjust/replace it if any abnormality. (Wiring diagram: Main body (1/3): 3-F) 
       6.  Replace TH1. 
        7.  Replace L2, L3 and L4. 
       8.  Replace ACDB. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.20.29     C-3915* 

Code 
      C-3915* 
Classification 
       Main body: Fusing sensor abnormality 
Cause 
       Fusing high temperature abnormality (hardware detection). 
      The temperature sensor /2 (TH2) detects an error detection signal continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Fusing unit 
        •  Printer control board (PRCB) 
        •  AC drive board (ACDB) 
        •  Fusing heater lamp /4 (L5) 
        •  Temperature sensor /2 (TH2) 
Correction 
      WARNING 
        •  Be sure to set the DIPSW3-1 to 0 after replacing the defective parts. If DIPSW3-1 is set to 0 before defective parts are fixed, it 
           may cause fire. 
        
Solution 
        1.  Check the connection between the rear side connector of the fusing unit and the main body side connector, and repair it if any 
           abnormality. 
       2.  Check the connector connection and the wiring between PRCB and the temperature sensor, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between ACDB and the fusing heater lamp, and repair/replace it if any abnormality. 
           (Wiring diagram: Main body (1/3): 3-E) 
       4.  Check the installation condition of the fusing heater lamp and ON/OFF with I/O, and repair/replace it if any abnormality. (Wiring 
           diagram: Main body (1/3): 3-G) 
       5.  Check the installation condition of TH2, and adjust/replace it if any abnormality. (Wiring diagram: Main body (1/3): 3-F) 
       6.  Replace TH2. 
        7.  Replace L5. 
       8.  Replace ACDB. 
       9.  Replace PRCB. 

                                                                              K -248 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Faulty part isolation DIPSW 
Control while detached 
  

2.21   Solution 17 (C-4001_5000) 

2.21.1   C-4101 

Code 
       C-4101 
Classification 
       Main body: Polygon motor abnormality 
Cause 
      When the polygon motor /Y (M70) in the writing unit starts up or its speed changes, the lock signal of M70 is not detected within a 
      specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Writing unit 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRCB. 
       5.  Replace writing unit and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.2   C-4102 

Code 
       C-4102 
Classification 
       Main body: Polygon motor abnormality 
Cause 
      When the polygon motor /M (M71) in the writing unit starts up or its speed changes, the lock signal of M71 is not detected within a 
      specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Writing unit 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRCB. 
       5.  Replace write unit and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.3   C-4103 

Code 
       C-4103 
Classification 
       Main body: Polygon motor abnormality 
Cause 
      When the polygon motor /C (M72) in the writing unit starts up or its speed changes, the lock signal of M72 is not detected within a 
      specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Writing unit 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 

                                                                              K -249 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRCB. 
       5.  Replace write unit and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.4   C-4104 

Code 
       C-4104 
Classification 
       Main body: Polygon motor abnormality 
Cause 
      When the polygon motor /K (M73) in the writing unit starts up or its speed changes, the lock signal of M73 is not detected within a 
      specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Writing unit 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRCB. 
       5.  Replace writing unit and PRCB at a time 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.5   C-4111 

Code 
       C-4111 
Classification 
       Main body: Polygon motor abnormality 
Cause 
      A temperature abnormality of the polygon motor /Y (M70) in the writing unit is detected. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Writing unit 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.6   C-4112 

Code 
       C-4112 
Classification 
       Main body: Polygon motor abnormality 
Cause 
      A temperature abnormality of the polygon motor /M (M71) in the writing unit is detected. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Writing unit 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 

                                                                              K -250 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       3.  Replace write unit. 
       4.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.7   C-4113 

Code 
       C-4113 
Classification 
       Main body: Polygon motor abnormality 
Cause 
      A temperature abnormality of the polygon motor /C (M72) in the writing unit is detected. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Writing unit 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.8   C-4114 

Code 
       C-4114 
Classification 
       Main body: Polygon motor abnormality 
Cause 
      A temperature abnormality of the polygon motor /K (M73) in the writing unit is detected. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Writing unit 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.9   C-4120 

Code 
       C-4120 
Classification 
       Main body: Polygon motor abnormality 
Cause 
      The temperature sensor in the writing unit /K detects the temperature abnormality. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Writing unit 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Replace writing unit /K. 
       4.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 

                                                                              K -251 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

  

2.21.10   C-4301 

Code 
       C-4301 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of any of M45 or M46 is detected continuously for a specified period of time while the developing fans (FM45) 
      and /2 (FM46) are ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Developing fan /1 (FM45) 
        •  Developing fan /2 (FM46) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and the fun, and repair it if any abnormality. 
       2.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 13-D) 
       3.  Replace FM45 and FM46. 
       4.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.11   C-4501 

Code 
       C-4501 
Classification 
       Main body: Writing correction drive abnormality 
Cause 
      The tilt correction home sensor /Y (PS70) turns OFF while the tilt correction motor /Y (M74) in the writing unit is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Writing unit 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRCB. 
       5.  Replace write unit and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.12   C-4502 

Code 
       C-4502 
Classification 
       Main body: Writing correction drive abnormality 
Cause 
      The tilt correction home sensor /M (PS71) turns OFF while the tilt correction motor /M (M75) in the writing unit is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Writing unit 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRCB. 
       5.  Replace write unit and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 

                                                                              K -252 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                      K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

  

2.21.13   C-4503 

Code 
       C-4503 
Classification 
       Main body: Writing correction drive abnormality 
Cause 
      The tilt correction home sensor /C (PS72) turns OFF while the tilt correction motor /C (M76) in the writing unit is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Writing unit 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRCB. 
       5.  Replace write unit and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.14   C-4504 

Code 
       C-4504 
Classification 
       Main body: Writing correction drive abnormality 
Cause 
      The tilt correction home sensor /K (PS73) turns OFF while the tilt correction motor /K (M77) in the writing unit is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Writing unit 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRCB. 
       5.  Replace write unit and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.15   C-4511 

Code 
       C-4511 
Classification 
       Main body: Writing correction drive abnormality 
Cause 
      The tilt correction motor /Y (M74) does not turn OFF within a specified period of time after it turns ON. Or, the installation position of the tilt 
       correction home sensor /Y (PS70) is improper. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Tilt correction motor /Y (M74) 
        •  Skew correction home sensor /Y (PS70) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor, and replace the write unit if any abnormality. 
       4.  Check I/O and the operation of the sensor, and replace the write unit if any abnormality. 
       5.  Replace write unit. 
        6. Replace PRCB. 

                                                                              K -253 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Faulty part isolation DIPSW 
Control while detached 
  

2.21.16   C-4512 

Code 
       C-4512 
Classification 
       Main body: Writing correction drive abnormality 
Cause 
      The tilt correction motor /Y (M75) does not turn OFF within a specified period of time after it turns ON. Or, the installation position of the tilt 
      correction home sensor /M (PS71) is improper. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Tilt correction motor /M (M75) 
        •  Skew correction home sensor /M (PS71) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor, and replace the write unit if any abnormality. 
       4.  Check I/O and the operation of the sensor, and replace the write unit if any abnormality. 
       5.  Replace write unit. 
       6.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.17   C-4513 

Code 
       C-4513 
Classification 
       Main body: Writing correction drive abnormality 
Cause 
      The tilt correction motor /C (M76) does not turn OFF within a specified period of time after it turns ON. Or, the installation position of the tilt 
      correction home sensor /C (PS72) is improper. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Tilt correction motor /C (M76) 
        •  Tilt correction home sensor /C (PS72) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor, and replace the write unit if any abnormality. 
       4.  Check I/O and the operation of the sensor, and replace the write unit if any abnormality. 
       5.  Replace write unit. 
       6.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.18   C-4514 

Code 
       C-4514 
Classification 
       Main body: Writing correction drive abnormality 
Cause 
      The tilt correction motor /K (M77) does not turn OFF within a specified period of time after it turns ON. Or, the installation position of the tilt 
      correction home sensor /K (PS73) is improper. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Tilt correction motor /K (M77) 
        •  Tilt correction home sensor /K (PS73) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 

                                                                              K -254 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                      K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor, and replace the write unit if any abnormality. 
       4.  Check I/O and the operation of the sensor, and replace the write unit if any abnormality. 
       5.  Replace write unit. 
        6. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.19   C-4520 

Code 
       C-4520 
Classification 
       Main body: Color registration abnormality 
Cause 
      The color registration correction has terminated abnormally. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Color registration sensor /Fr (PS8) 
        •  Color registration sensor /Rr (PS9) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  When a SC occurs, store the log by the Log Store in the service mode. 
       2.  Report it with that log to KM. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.20   C-4521 

Code 
       C-4521 
Classification 
       Main body: Color registration abnormality 
Cause 
      The color registration base line correction /Fr has terminated abnormally. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Color registration sensor /Fr (PS8) 
        •  Color registration shutter solenoid (SD2) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the shutter and around the color registration sensor, and clean/replace if there is any dirt or abnormality. 
       2.  Check the intermediate transfer belt, and clean/replace it if there is any dirt or abnormality. 
       3.  Check the connector connection and the wiring between PRCB and the sensor, and repair it if any abnormality. 
       4.  Check I/O and the I/O rate of the sensor by I/O of SD2, and repair/replace it if any abnormality. (Wiring diagram: Main body (3/3): 6-P) 
       5.  Replace PS8. 
        6. Replace PRCB 
        7.  Replace SD2 and PRCB at a time 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.21     C-4522 

Code 
       C-4522 
Classification 
       Main body: Color registration abnormality 
Cause 
      The color registration base line correction /Rr has terminated abnormally. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Color registration sensor /Rr (PS9) 
        •  Color registration shutter solenoid (SD2) 
Correction 

                                                                              K -255 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                       K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       Note 
        •  The message "Please call service" is displayed on the panel. 
         
Solution 
        1.  Check the shutter and around the color registration sensor, and clean/replace if there is any dirt or abnormality. 
        2. Check the intermediate transfer belt, and clean/replace it if there is any dirt or abnormality. 
        3. Check the connector connection and the wiring between PRCB and the sensor, and repair it if any abnormality. 
        4. Check the I/O rate of the sensor by I/O of SD2, and repair/replace it if any abnormality. (Wiring diagram: Main body (3/3): 6-P) 
        5. Replace PS9. 
        6. Replace PRCB. 
        7.  Replace SD2 and PRCB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.22   C-4545 

Code 
       C-4545 
Classification 
       Main body: Beam interval correction abnormality 
Cause 
       The beam interval correction (Y) has terminated abnormally. 
Measures to take when alert occurs 
       The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Writing unit 
Correction 
       Note 
        • 
         
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
        2. Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
        3. Replace write unit. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.23   C-4546 

Code 
       C-4546 
Classification 
       Main body: Beam interval correction abnormality 
Cause 
       The beam interval correction (M) has terminated abnormally. 
Measures to take when alert occurs 
       The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Writing unit 
Correction 
       Note 
        • 
         
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
        2. Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
        3. Replace write unit. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.24      C-4547 

Code 
       C-4547 
Classification 
       Main body: Beam interval correction abnormality 
Cause 
       The beam interval correction (C) has terminated abnormally. 
Measures to take when alert occurs 
       The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Writing unit 
Correction 
       Note 
        • 
         
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
        2. Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 

                                                                                K -256 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                      K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       3.  Replace write unit. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.25   C-4548 

Code 
       C-4548 
Classification 
       Main body: Beam interval correction abnormality 
Cause 
      The beam interval correction (K) has terminated abnormally. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Writing unit 
Correction 
       Note 
        • 
        
Solution 
        1.  Check the write unit, and replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.26   C-4601 

Code 
       C-4601 
Classification 
       Main body: Color registration board /Fr (Y) data undetected abnormality 
Cause 
      The color registration board /Fr (CRB/Fr) has not detected any data of Y toner. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Fr (PS8) 
        •  Color registration board /Fr (CRB/Fr) 
        •  Color registration shutter solenoid (SD2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Output the test pattern to check the Y toner density or whether white spot occurs. 
       2.  Output the test pattern No.25 to check the registration mark position in main scan direction. 
       3.  When the registration mark is not output properly, check the writing, developing, and transfer relation, and repair/replace it if any 
           abnormality. 
       4.  When the registration mark is output properly, check the connector connection and wiring between PRCB and the color registration 
           sensor, and repair it if any abnormality. 
           Check the color registration sensor, color registration shutter solenoid, and color registration board, and repair/replace it is any 
           abnormality. 
       5.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
        6. Replace SD2. 
        7.  Replace PS8. 
       8.  Replace CRB /Fr. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.27   C-4602 

Code 
       C-4602 
Classification 
       Main body: Color registration board /Fr (M) data undetected abnormality 
Cause 
      The color registration board /Fr (CRB/Fr) has not detected any data of M toner. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Fr (PS8) 
        •  Color registration board /Fr (CRB/Fr) 
        •  Color registration shutter solenoid (SD2) 

                                                                              K -257 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                      K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Output the test pattern to check the M toner density or whether white spot occurs. 
       2.  Output the test pattern No.25 to check the registration mark position in main scan direction. 
       3.  When the registration mark is not output properly, check the writing, developing, and transfer relations and repair/replace it if any 
           abnormality. 
       4.  When the registration mark is output properly, check the connection and wiring harness between PRCB and the color registration 
           sensor and repair it if any abnormality. 
           Check the color registration sensor, color registration shutter solenoid, and color registration board and repair/replace it if any 
           abnormality. 
       5.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
        6. Replace SD2. 
        7.  Replace PS8. 
       8.  Replace CRB/Fr. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.28   C-4603 

Code 
       C-4603 
Classification 
       Main body: Color registration board /Fr (C) data undetected abnormality 
Cause 
      The color registration board /Fr (CRB/Fr) has not detected any data of C toner. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Fr (PS8) 
        •  Color registration board /Fr (CRB/Fr) 
        •  Color registration shutter solenoid (SD2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Output the test pattern to check the C toner density or whether white spot occurs. 
       2.  Output the test pattern No.25 to check the registration mark position in main scan direction. 
       3.  When the registration mark is not output properly, check the writing, developing, and transfer relations and repair/replace it if any 
           abnormality. 
       4.  When the registration mark is output properly, check the connection and wiring harness between PRCB and the color registration 
           sensor and repair it if any abnormality. 
           Check the color registration sensor, color registration shutter solenoid, and color registration board and repair/replace it if any 
           abnormality. 
       5.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
        6. Replace SD2. 
        7.  Replace PS8. 
       8.  Replace CRB/Fr. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.29   C-4604 

Code 
       C-4604 
Classification 
       Main body: Color registration board /Fr (K) data undetected abnormality 
Cause 
      The color registration board /Fr (CRB/Fr) has not detected any data of K toner. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Fr (PS8) 
        •  Color registration board /Fr (CRB/Fr) 
        •  Color registration shutter solenoid (SD2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        

                                                                              K -258 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                      K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Solution 
        1.  Output the test pattern to check the K toner density or whether white spot occurs. 
       2.  Output the test pattern No.25 to check the registration mark position in main scan direction. 
       3.  When the registration mark is not output properly, check the writing, developing, and transfer relations and repair/replace it if any 
           abnormality. 
       4.  When the registration mark is output properly, check the connection and wiring harness between PRCB and the color registration 
           sensor and repair it if any abnormality. 
           Check the color registration sensor, color registration shutter solenoid, and color registration board and repair/replace it if any 
           abnormality. 
       5.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
        6. Replace SD2. 
        7.  Replace PS8. 
       8.  Replace CRB/Fr. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.30   C-4621 

Code 
       C-4621 
Classification 
       Main body: Color registration board /Rr (Y) data undetected abnormality 
Cause 
      The color registration board /Rr (CRB/Rr) has not detected any data of Y toner. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Rr (PS9) 
        •  Color registration board /Rr (CRB/Rr) 
        •  Color registration shutter solenoid (SD2) 
        •  - 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Output the test pattern to check the Y toner density or whether white spot occurs. 
       2.  Output the test pattern No.25 to check the registration mark position in main scan direction. 
       3.  When the registration mark is not output properly, check the writing, developing, and transfer relation, and repair/replace it if any 
           abnormality. 
       4.  When the registration mark is output properly, check the connector connection and wiring between PRCB and the color registration 
           sensor, and repair it if any abnormality. 
           Check the color registration sensor, color registration shutter solenoid, and color registration board, and repair/replace it is any 
           abnormality. 
       5.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
        6. Replace SD2. 
        7.  Replace PS9. 
       8.  Replace CRB /Rr. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.31   C-4622 

Code 
       C-4622 
Classification 
       Main body: Color registration board /Rr (M) data undetected abnormality 
Cause 
      The color registration board /Rr (CRB/Rr) has not detected any data of M toner. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Rr (PS9) 
        •  Color registration board /Rr (CRB/Rr) 
        •  Color registration shutter solenoid (SD2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Output the test pattern to check the M toner density or whether white spot occurs. 
       2.  Output the test pattern No.25 to check the registration mark position in main scan direction. 

                                                                              K -259 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                      K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       3.  When the registration mark is not output properly, check the writing, developing, and transfer relations and repair/replace it if any 
           abnormality. 
       4.  When the registration mark is output properly, check the connection and wiring harness between PRCB and the color registration 
           sensor and repair it if any abnormality. 
           Check the color registration sensor, color registration shutter solenoid, and color registration board and repair/replace it if any 
           abnormality. 
       5.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
        6. Replace SD2. 
        7.  Replace PS9. 
       8.  Replace CRB/Rr. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.32   C-4623 

Code 
       C-4623 
Classification 
       Main body: Color registration board /Rr (C) data undetected abnormality 
Cause 
      The color registration board /Rr (CRB/Rr) has not detected any data of C toner. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Rr (PS9) 
        •  Color registration board /Rr (CRB/Rr) 
        •  Color registration shutter solenoid (SD2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Output the test pattern to check the C toner density or whether white spot occurs. 
       2.  Output the test pattern No.25 to check the registration mark position in main scan direction. 
       3.  When the registration mark is not output properly, check the writing, developing, and transfer relations and repair/replace it if any 
           abnormality. 
       4.  When the registration mark is output properly, check the connection and wiring harness between PRCB and the color registration 
           sensor and repair it if any abnormality. 
           Check the color registration sensor, color registration shutter solenoid, and color registration board and repair/replace it if any 
           abnormality. 
       5.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
        6. Replace SD2. 
        7.  Replace PS9. 
       8.  Replace CRB/Rr. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.33   C-4624 

Code 
       C-4624 
Classification 
       Main body: Color registration board /Rr (K) data undetected abnormality 
Cause 
      The color registration board /Rr (CRB/Rr) has not detected any data of K toner. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Rr (PS9) 
        •  Color registration board /Rr (CRB/Rr) 
        •  Color registration shutter solenoid (SD2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Output the test pattern to check the K toner density or whether white spot occurs. 
       2.  Output the test pattern No.25 to check the registration mark position in main scan direction. 
       3.  When the registration mark is not output properly, check the writing, developing, and transfer relations and repair/replace it if any 
           abnormality. 
       4.  When the registration mark is output properly, check the connection and wiring harness between PRCB and the color registration 
           sensor and repair it if any abnormality. 

                                                                              K -260 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                      K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

           Check the color registration sensor, color registration shutter solenoid, and color registration board and repair/replace it if any 
           abnormality. 
       5.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
        6. Replace SD2. 
        7.  Replace PS9. 
       8.  Replace CRB/Rr. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.34   C-4631 

Code 
       C-4631 
Classification 
       Main body: Color registration board /Fr (Y) abnormality 
Cause 
      The histogram processing of Y toner has terminated abnormally on the color registration board /Fr (CRB/Fr). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Fr (PS8) 
        •  Color registration board /Fr (CRB/Fr) 
        •  Color registration shutter solenoid (SD2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Output the test pattern to check whether the uneven density occurs on Y toner area. 
       2.  Check the intermediate transfer belt, and clean/replace it if there is toner image or damage. 
       3.  Check the connector connection and the wiring between PRCB and the color registration sensor, and repair it if any abnormality. 
       4.  Check the color registration sensor, the color registration shutter solenoid and the color registration board, and repair/replace it if any 
           abnormality. 
       5.  Check the drive of I/O of SD2, and repair/replace it if any abnormality. 
        6. Replace SD2 
        7.  Replace PS8 
       8.  Replace CRB /Fr 
       9.  Replace PRCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.35   C-4632 

Code 
       C-4632 
Classification 
       Main body: Color registration board /Fr (M) abnormality 
Cause 
      The histogram processing of M toner has terminated abnormally on the color registration board /Fr (CRB/Fr). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Fr (PS8) 
        •  Color registration board /Fr (CRB/Fr) 
        •  Color registration shutter solenoid (SD2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Output the test pattern to check whether the uneven density occurs on M toner area. 
       2.  Check the intermediate transfer belt, and clean/replace it if there is toner image or damage. 
       3.  Check the connector connection and the wiring between PRCB and the color registration sensor, and repair it if any abnormality. 
       4.  Check the color registration sensor, color registration shutter solenoid, and color registration board and repair/replace it if any 
           abnormality. 
       5.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
        6. Replace SD2. 
        7.  Replace PS8. 
       8.  Replace CRB/Fr. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

                                                                              K -261 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

2.21.36   C-4633 

Code 
      C-4633 
Classification 
       Main body: Color registration board /Fr (C) abnormality 
Cause 
      The histogram processing of C toner has terminated abnormally on the color registration board /Fr (CRB/Fr). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Fr (PS8) 
        •  Color registration board /Fr (CRB/Fr) 
        •  Color registration shutter solenoid (SD2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Output the test pattern to check whether the uneven density occurs on C toner area. 
       2.  Check the intermediate transfer belt, and clean/replace it if there is toner image or damage. 
       3.  Check the connector connection and the wiring between PRCB and the color registration sensor, and repair it if any abnormality. 
       4.  Check the color registration sensor, color registration shutter solenoid, and color registration board and repair/replace it if any 
           abnormality. 
       5.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
       6.  Replace SD2. 
       7.  Replace PS8. 
       8.  Replace CRB/Fr. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.37   C-4634 

Code 
      C-4634 
Classification 
       Main body: Color registration board /Fr (K) abnormality 
Cause 
      The histogram processing of K toner has terminated abnormally on the color registration board /Fr (CRB/Fr). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Fr (PS8) 
        •  Color registration board /Fr (CRB/Fr) 
        •  Color registration shutter solenoid (SD2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Output the test pattern to check whether the uneven density occurs on K toner area. 
       2.  Check the intermediate transfer belt, and clean/replace it if there is toner image or damage. 
       3.  Check the connector connection and the wiring between PRCB and the color registration sensor, and repair it if any abnormality. 
       4.  Check the color registration sensor, color registration shutter solenoid, and color registration board and repair/replace it if any 
           abnormality. 
       5.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
       6.  Replace SD2. 
       7.  Replace PS8. 
       8.  Replace CRB/Fr. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.38   C-4651 

Code 
      C-4651 
Classification 
       Main body: Color registration board /Rr (Y) abnormality 
Cause 
      The histogram processing of Y toner has terminated abnormally on the color registration board /Rr (CRB/Rr). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 

                                                                             K -262 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                      K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  Printer control board 
        •  Color registration sensor /Rr (PS9) 
        •  Color registration board /Rr (CRB/Rr) 
        •  Color registration shutter solenoid (SD2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Output the test pattern to check whether the uneven density occurs on Y toner area. 
       2.  Check the intermediate transfer belt, and clean/replace it if there is toner image or damage. 
       3.  Check the connector connection and the wiring between PRCB and the color registration sensor, and repair it if any abnormality. 
       4.  Check the color registration sensor, color registration shutter solenoid, and color registration board and repair/replace it if any 
           abnormality. 
       5.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
        6. Replace SD2. 
        7.  Replace PS9. 
       8.  Replace CRB/Rr. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.39   C-4652 

Code 
       C-4652 
Classification 
       Main body: Color registration board /Rr (M) abnormality 
Cause 
      The histogram processing of M toner has terminated abnormally on the color registration board /Rr (CRB/Rr). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Rr (PS9) 
        •  Color registration board /Rr (CRB/Rr) 
        •  Color registration shutter solenoid (SD2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Output the test pattern to check whether the uneven density occurs on M toner area. 
       2.  Check the intermediate transfer belt, and clean/replace it if there is toner image or damage. 
       3.  Check the connector connection and the wiring between PRCB and the color registration sensor, and repair it if any abnormality. 
       4.  Check the color registration sensor, color registration shutter solenoid, and color registration board and repair/replace it if any 
           abnormality. 
       5.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
        6. Replace SD2. 
        7.  Replace PS9. 
       8.  Replace CRB/Rr. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.40   C-4653 

Code 
       C-4653 
Classification 
       Main body: Color registration board /Rr (C) abnormality 
Cause 
      The histogram processing of C toner has terminated abnormally on the color registration board /Rr (CRB/Rr). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Rr (PS9) 
        •  Color registration board /Rr (CRB/Rr) 
        •  Color registration shutter solenoid (SD2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Output the test pattern to check whether the uneven density occurs on C toner area. 

                                                                              K -263 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       2.  Check the intermediate transfer belt, and clean/replace it if there is toner image or damage. 
       3.  Check the connector connection and the wiring between PRCB and the color registration sensor, and repair it if any abnormality. 
       4.  Check the color registration sensor, color registration shutter solenoid, and color registration board and repair/replace it if any 
           abnormality. 
       5.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
       6.  Replace SD2. 
        7.  Replace PS9. 
       8.  Replace CRB/Rr. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.41   C-4654 

Code 
       C-4654 
Classification 
       Main body: Color registration board /Rr (K) abnormality 
Cause 
      The histogram processing of K toner has terminated abnormally on the color registration board /Rr (CRB/Rr). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Rr (PS9) 
        •  Color registration board /Rr (CRB/Rr) 
        •  Color registration shutter solenoid (SD2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Output the test pattern to check whether the uneven density occurs on K toner area. 
       2.  Check the intermediate transfer belt, and clean/replace it if there is toner image or damage. 
       3.  Check the connector connection and the wiring between PRCB and the color registration sensor, and repair it if any abnormality. 
       4.  Check the color registration sensor, color registration shutter solenoid, and color registration board and repair/replace it if any 
           abnormality. 
       5.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
       6.  Replace SD2. 
        7.  Replace PS9. 
       8.  Replace CRB/Rr. 
       9.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.42   C-4661 

Code 
       C-4661 
Classification 
       Main body: Color registration correction abnormality (Y) 
Cause 
      The color registration correction /Y has terminated abnormally. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Fr (PS8), /Rr (PS9) 
        •  Color registration board /Fr (CRB/Fr), /Rr (CRB/Rr) 
        •  Color registration shutter solenoid (SD2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Perform the color registration automatic adjustment. 
       2.  When the error 2 occurs, acquire the log and analyze. 
       3.  When the error 1 occurs, it means that the color registration error level is not abnormal but not good. In this case, the error is cleared 
           by returning to the normal mode. However it may occur again. 
       4.  Check the connector connection and the wiring between PRCB and the color registration sensor, and repair it if any abnormality. 
       5.  Check the color registration sensor, color registration shutter solenoid, and color registration board and repair/replace it if any 
           abnormality. 
       6.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
        7.  Replace SD2. 
       8.  Replace PS8 and PS9. 
       9.  Replace CRB/Fr and CRB/Rr. 
       10. Replace PRCB. 

                                                                              K -264 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Faulty part isolation DIPSW 
Control while detached 
  

2.21.43   C-4662 

Code 
       C-4662 
Classification 
       Main body: Color registration correction abnormality (M) 
Cause 
      The color registration correction /M has terminated abnormally. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Fr (PS8), /Rr (PS9) 
        •  Color registration board /Fr (CRB/Fr), /Rr (CRB/Rr) 
        •  Color registration shutter solenoid (SD2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Perform the color registration automatic adjustment. 
       2.  When the error 2 occurs, acquire the log and analyze. 
       3.  When the error 1 occurs, it means that the color registration error level is not abnormal but not good. In this case, the error is cleared 
           by returning to the normal mode. However it may occur again. 
       4.  Check the connector connection and the wiring between PRCB and the color registration sensor, and repair it if any abnormality. 
       5.  Check the color registration sensor, color registration shutter solenoid, and color registration board and repair/replace it if any 
           abnormality. 
       6.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
        7.  Replace SD2. 
       8.  Replace PS8 and PS9. 
       9.  Replace CRB/Fr and CRB/Rr. 
       10. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.44   C-4663 

Code 
       C-4663 
Classification 
       Main body: Color registration correction abnormality (C) 
Cause 
      The color registration correction /C has terminated abnormally. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board 
        •  Color registration sensor /Fr (PS8), /Rr (PS9) 
        •  Color registration board /Fr (CRB/Fr), /Rr (CRB/Rr) 
        •  Color registration shutter solenoid (SD2) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Perform the color registration automatic adjustment. 
       2.  When the error 2 occurs, acquire the log and analyze. 
       3.  When the error 1 occurs, it means that the color registration error level is not abnormal but not good. In this case, the error is cleared 
           by returning to the normal mode. However it may occur again. 
       4.  Check the connector connection and the wiring between PRCB and the color registration sensor, and repair it if any abnormality. 
       5.  Check the color registration sensor, color registration shutter solenoid, and color registration board and repair/replace it if any 
           abnormality. 
       6.  Check the I/O drive of SD2 and repair/replace it if any abnormality. 
        7.  Replace SD2. 
       8.  Replace PS8 and PS9. 
       9.  Replace CRB/Fr and CRB/Rr. 
       10. Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.45   C-4701 

Code 
       C-4701 

                                                                              K -265 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Classification 
      Main body: Image processing abnormality 
Cause 
      FIFO address abnormality for the printer. While in the image write, the expansion processing of image data that is read in does not 
      terminate correctly. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Overall control board (OACB) 
        •  Memory control board /1 (MCB1) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the connector connection and the wiring between MCB1 and OACB, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between OACB and PRCB, and repair it if any abnormality. 
       3.  Replace MCB1. 
       4.  Replace OACB. 
       5.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.46   C-4702 

Code 
      C-4702 
Classification 
      Main body: Image processing abnormality 
Cause 
      An error interrupt occurs with the compression/expansion chip FIFO. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Overall control board (OACB) 
        •  Memory control board /1 (MCB1) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the connector connection and the wiring between MCB1 and OACB, and repair it if any abnormality. 
       2.  Replace MCB1. 
       3.  Replace OACB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.47   C-4703 

Code 
      C-4703 
Classification 
      Main body: Image processing abnormality 
Cause 
      Image data expansion abnormality. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Overall control board (OACB) 
        •  Memory control board /1 (MCB1) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the connector connection and the wiring between MCB1 and OACB, and repair it if any abnormality. 
       2.  Replace MCB1. 
       3.  Replace OACB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.48     C-4705 

Code 
      C-4705 
Classification 
      Main body: Image processing abnormality 
Cause 

                                                                            K -266 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      While in the image write, the expansion processing from the memory to the printer does not terminate within a specified period of time. 
      The output from the page memory to the printer does not terminate within a specified period of time. The PVV is not detected within a 
      specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Printer image processing board (PRIPB) 
        •  Memory control board /1 (MCB1) 
        •  Overall control board (OACB) 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the connector connection between MCB1 and PRIPB/between MCB1 and OACB, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between OACB and PRCB, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between the writing unit and PRIPB, and repair it if any abnormality. 
       4.  Replace MCB1. 
       5.  Replace PRIPB. 
       6.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.49   C-4706 

Code 
      C-4706 
Classification 
       Main body: Image processing abnormality 
Cause 
      While in the image write, despite of no resource provided, an inappropriate processing such as accessing to the elongation device is 
      made. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Overall control board (OACB) 
        •  Memory control board /1 (MCB1) 
        •  Program of overall control board (OACB) 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the connector connection and the wiring between MCB1 and OACB, and repair it if any abnormality. 
       2.  Rewrite the firmware for image control. 
       3.  Replace MCB1. 
       4.  Replace OACB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.50   C-4708 

Code 
      C-4708 
Classification 
       Main body: Image processing abnormality 
Cause 
      When accessing to the memory device, a defective software is detected. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Overall control board (OACB) 
        •  Memory control board /1 (MCB1) 
        •  Program of overall control board (OACB) 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the connector connection and the wiring between MCB1 and OACB, and repair it if any abnormality. 
       2.  Rewrite the firmware for image control. 
       3.  Replace MCB1. 
       4.  Replace OACB. 
Faulty part isolation DIPSW 
Control while detached 
  

                                                                             K -267 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

2.21.51   C-4709 

Code 
      C-4709 
Classification 
      Main body: Image processing abnormality 
Cause 
      The expansion processing from the memory to the page memory does not terminate within a specified period of time. The compression 
      processing from the page memory to the memory does not terminate within a specified period of time. The development from the memory 
      to the page memory does not terminate within a specified period of time. The transmission of the compressed data from memory to 
      memory does not terminated within a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Overall control board (OACB) 
        •  Memory control board /1 (MCB1) 
        •  Program of overall control board (OACB) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the connector connection and the wiring between MCB1 and OACB, and repair it if any abnormality. 
       2.  Rewrite the firmware for image control. 
       3.  Replace MCB1. 
       4.  Replace OACB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.52   C-4713 

Code 
      C-4713 
Classification 
      Main body: Image processing abnormality 
Cause 
      A page memory for printing cannot be secured. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Memory control board /1 (MCB1) 
        •  Overall control board (OACB) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the connector connection and the wiring between PRIPB and write unit, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between PRCB and write unit, and repair it if any abnormality. 
       3.  Check the connector connection on MCB1 and PRIPB, and repair it if any abnormality. 
       4.  Replace PRIPB. 
       5.  Replace MCB1. 
       6.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.53   C-4714 

Code 
      C-4714 
Classification 
      Main body: Image processing abnormality /Y 
Cause 
      When executing APC, the Index sensor output does not change. The index sensor failed to detect the laser because the polygon mirror 
      does not rotate, the position of the index sensor is improper, or the index sensor is defective. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Writing unit /Y 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the write unit, and repair/replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRIB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 

                                                                             K -268 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       4.  Replace PRIPB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.54   C-4715 

Code 
       C-4715 
Classification 
       Main body: Image processing abnormality /M 
Cause 
      When executing APC, the Index sensor output does not change. The index sensor failed to detect the laser because the polygon mirror 
      does not rotate, the position of the index sensor is improper, or the index sensor is defective. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Writing unit /M 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the write unit, and repair/replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRIB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRIPB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.55   C-4716 

Code 
       C-4716 
Classification 
       Main body: Image processing abnormality /C 
Cause 
      When executing APC, the Index sensor output does not change. The index sensor failed to detect the laser because the polygon mirror 
      does not rotate, the position of the index sensor is improper, or the index sensor is defective. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Writing unit /C 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the write unit, and repair/replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRIB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRIPB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.56   C-4717 

Code 
       C-4717 
Classification 
       Main body: Image processing abnormality /K 
Cause 
      When executing APC, the Index sensor output does not change. The index sensor failed to detect the laser because the polygon mirror 
      does not rotate, the position of the index sensor is improper, or the index sensor is defective. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Writing unit/K 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the write unit, and repair/replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRIB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRIPB. 

                                                                              K -269 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Faulty part isolation DIPSW 
Control while detached 
  

2.21.57   C-4718 

Code 
      C-4718 
Classification 
       Main body: Image processing abnormality /Y 
Cause 
      APC abnormality. 
      The laser does not turn ON because 12V DC power source for driving laser is not fed, MPC is wrong, or the laser is defective. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Writing unit /Y 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the write unit, and repair/replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRIB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRIPB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.58   C-4719 

Code 
      C-4719 
Classification 
       Main body: Image processing abnormality /M 
Cause 
      APC abnormality. 
      The laser does not turn ON because 12V DC power source for driving laser is not fed, MPC is wrong, or the laser is defective. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Writing unit /M 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the write unit, and repair/replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRIB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRIPB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.59   C-4720 

Code 
      C-4720 
Classification 
       Main body: Image processing abnormality /C 
Cause 
      APC abnormality. 
      The laser does not turn ON because 12V DC power source for driving laser is not fed, MPC is wrong, or the laser is defective. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Writing unit /C 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the write unit, and repair/replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRIB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRIPB. 
Faulty part isolation DIPSW 

                                                                              K -270 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Control while detached 
  

2.21.60   C-4721 

Code 
      C-4721 
Classification 
       Main body: Image processing abnormality /K 
Cause 
      APC abnormality. 
      The laser does not turn ON because 12V DC power source for driving laser is not fed, MPC is wrong, or the laser is defective. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Writing unit/K 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the write unit, and repair/replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRIB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRIPB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.61   C-4722 

Code 
      C-4722 
Classification 
       Main body: Image processing abnormality /Y 
Cause 
      Connection abnormality between the index board /Y (IDB/Y) or the laser drive board /Y (LDB/Y) and the printer image processing board 
       (PRIPB). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Writing unit /Y 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the write unit, and repair/replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRIB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRIPB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.62   C-4723 

Code 
      C-4723 
Classification 
       Main body: Image processing abnormality /M 
Cause 
      Connection abnormality between the index board /M (IDB/M) or the laser drive board /M (LDB/M) and the printer image processing board 
       (PRIPB). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Writing unit /M 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the write unit, and repair/replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRIB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRIPB. 
Faulty part isolation DIPSW 
Control while detached 

                                                                              K -271 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                     K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

  

2.21.63   C-4724 

Code 
       C-4724 
Classification 
       Main body: Image processing abnormality /C 
Cause 
       Connection abnormality between the index board /C (IDB/C) or the laser drive board /C (LDB/C) and the printer image processing board 
       (PRIPB). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Writing unit /C 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the write unit, and repair/replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRIB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRIPB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.64   C-4725 

Code 
       C-4725 
Classification 
       Main body: Image processing abnormality /K 
Cause 
       Connection abnormality between the index board /K (IDB/K) or the laser drive board /K (LDB/K) and the printer image processing board 
       (PRIPB). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Writing unit/K 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the write unit, and repair/replace it if there is any abnormality. 
       2.  Check the connector connection and the wiring between PRIB and write unit, and repair it if any abnormality. 
       3.  Replace write unit. 
       4.  Replace PRIPB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.21.65   C-4840 

Code 
       C-4840 
Classification 
       Main body: Image processing abnormality 
Cause 
      The engine section has kept driving continuously for a specified period of time without producing image or process patch. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Printer control program 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring on PRCB, and repair it if any abnormality. 
       2.  Rewrite the firmware of printer system 
       3.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

                                                                              K -272 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

2.21.66   C-4850* 

Code 
      C-4850* 
Classification 
      Main body: Image processing abnormality 
Cause 
      The overall control software accesses an illegal address. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Overall control board (OACB) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring on OACB, and repair it if any abnormality. 
       2.  Rewrite the firmware for image control. 
       3.  Replace OACB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.22   Solution 18 (C-5001_6000) 

2.22.1   C-5001 

Code 
      C-5001 
Classification 
      Main body: Communication error 
Cause 
       12V DC abnormality. 
      An error signal is detected continuously for a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  DC power supply /1 (DCPS1) 
        •  Printer control board (PRCB) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Start up the main body with CN301 on PRCB disconnected to check the V output of CN301-2. 
       2.  If there is no 12V output, check the connector connection and the wiring of PRCB and DCPS1. Repair it if any abnormality. If no 
           abnormality exists, replace DCPS1. 
       3.  Replace PRCB if 12V output performed. 
       4.  Replace PRCB and SCPS1 at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.22.2   C-5002 

Code 
      C-5002 
Classification 
      Main body: Communication error 
Cause 
      24V DC abnormality. 
      An error signal is detected continuously for a specified period of time after REN/2 turns ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  DC power supply /2 (DCPS2) 
        •  Each loading of PRCB connection (motor, solenoid and clutch) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Start up the main body with CN302 on PRCB disconnected to check the 24V output of CN302-1 and CN302-3. 
       2.  If there is no 24V output, check the connector connection and the wiring of PRCB and DCPS2. Repair it if any abnormality. If no 
           abnormality exists, replace DCPS2. 
       3.  Replace PRCB if 24V output performed. 
       4.  Check the loading of PRCB connection (motor, solenoid and clutch), and repair/replace if any abnormality. 
       5.  Replace PRCB and DCPS2 at a time. 
Faulty part isolation DIPSW 
Control while detached 

                                                                             K -273 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

  

2.22.3   C-5003 

Code 
      C-5003 
Classification 
      Main body: Communication error 
Cause 
      Conveyance drive board (CDB) 24VDC abnormality. 
      An error signal of 24VDC for CDB is detected. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  DC power supply /2 (DCPS2) 
        •  Conveyance drive board (CDB) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check that the front door is closed properly, and repair it if any abnormality. 
       2.  Check the operation of the front door switch (MS1), and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between DCPS2 and CDB, and repair it if any abnormality. 
       4.  Replace DCPS2. 
       5.  Replace CDB. 
       6.  Replace DCPS2 and CDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.22.4   C-5004 

Code 
      C-5004 
Classification 
      Main body: Communication error 
Cause 
      Laser correction motor 5VDC abnormality 
      An abnormality of 5VDC for the tilt correction motors /Y (M74), /M (M75), /C (M76), /K (M77) 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  DC power supply /1 (DCPS1) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Start up the main body with CN301 on PRCB disconnected to check the 5V output of CN301-1. 
       2.  If there is no 5V output, check the connector connection and the wiring of PRCB and DCPS1. Repair it if any abnormality. If no 
           abnormality exists, replace DCPS1. 
       3.  Check the connector connection and the wiring between PRCB and CDB. Repair it if any abnormality. 
       4.  Replace DCPS1. 
Faulty part isolation DIPSW 
Control while detached 
  

2.22.5   C-5005 

Code 
      C-5005 
Classification 
      Main body: Communication error 
Cause 
      Conveyance drive board (CDB) 12VDC abnormality. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Conveyance drive board (CDB) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between PRCB and CDB, and repair it if any abnormality. 
       2.  Replace CDB. 
       3.  Replace PRCB 
       4.  Replace CDB and PRCB at a time 
Faulty part isolation DIPSW 
Control while detached 

                                                                             K -274 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

  

2.22.6   C-5010 

Code 
      C-5010 
Classification 
       Main body: Communication error 
Cause 
      A line status error or a checksum error occured between the overall control board (OACB) and the printer control board (PRIPB) is 
      detected and it cannot be recovered by sending a retransmission request. Recovery failed even after the requested retransmission is 
      performed. A sufficient space cannot be obtained in the circular buffer within a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Overall control board (OACB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PRIPB and OACB, and repair it if any abnormality. 
       2.  Replace PRCB. 
       3.  Replace OACB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.22.7   C-5301 

Code 
      C-5301 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of FM1 or FM3 is detected continuously for a specified period of time while the power supply cooling fan /1 (FM1) 
      and /3 (FM3) are ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Overall control board (OACB) 
        •  Power supply cooling fan /1 (FM1) 
        •  Power supply cooling fan /3 (FM3) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (1/3): 15-E) 
       2.  Check the connector connection and the wiring between OACB and the fan, and repair it if any abnormality. 
       3.  Replace FM1 and FM3. 
       4.  Replace OACB. 
       5.  Replace FM1, FM3 and OACB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.22.8   C-5302 

Code 
      C-5302 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of FM5 is detected continuously for a specified period of time while the image processing cooling fan /1 (FM5) is 
      ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Overall control board (OACB) 
        •  Image processing cooling fan /1 (FM5) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Rotate the fan by I/O or by hand, and repair/replace it if any abnormality. (Wiring diagram: Main body (2/3): 10-D) 
       2.  Check the connector connection and the wiring between OACB and the fan, and repair it if any abnormality. 
       3.  Replace FM5. 
       4.  Replace OACB. 
       5.  Replace FM5 and OACB at a time 

                                                                             K -275 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Faulty part isolation DIPSW 
Control while detached 
  

2.22.9   C-5303 

Code 
      C-5303 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of FM6 is detected continuously for a specified period of time while the image processing cooling fan /2 (FM6) is 
      ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Overall control board (OACB) 
        •  Image processing cooling fan /2 (FM6) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (2/3): 11-D) 
       2.  Check the connector connection and the wiring between OACB and the fan, and repair it if any abnormality. 
       3.  Replace FM6. 
       4.  Replace OACB. 
       5.  Replace FM6 and OACB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.22.10     C-5304 

Code 
      C-5304 
Classification 
       Main body: HDD unit cooling fan abnormality 
Cause 
      An error detection signal of FM81 or FM82 is detected continuously for a specified period of time while the HDD unit cooling fans /1 
      (FM81) and /2 (FM82) are ON. 
      An error detection signal is detected continuously while retrying power feed several times. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  HDD unit cooling fan /1 (FM81) 
        •  HDD unit cooling fan /2 (FM82) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Rotate the fan by I/O or by hand, and repair/replace it if any abnormality. (Wiring diagram: Main body (2/3): 11-D) 
       2.  Check the connector connection and the wiring between OACB and the fan, and repair it if any abnormality. 
       3.  Replace FM81 and FM82. 
       4.  Replace FM81, FM82 and OACB at a time 
Faulty part isolation DIPSW 
Control while detached 
  

2.22.11     C-5305 

Code 
      C-5305 
Classification 
       Main body: Fan abnormality 
Cause 
      An error detection signal of FM4 is detected continuously for a specified period of time while the power supply cooling fan /4 (FM4) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Power supply cooling fan /4 (FM4) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Rotate the fan or I/O by hand, and repair/replace it if any abnormality. (Wiring diagram: Main body (1/3): 14-E) 
       2.  Check the connector connection and the wiring between PRCB and the fan, and repair it if any abnormality. 
       3.  Replace FM4. 

                                                                             K -276 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Faulty part isolation DIPSW 
Control while detached 
  

2.23   Solution 19 (C-6001_7000) 

2.23.1   C-6101 

Code 
      C-6101 
Classification 
      Main body: Scanner abnormality 
Cause 
      While in the home position search operation, the scanner home sensor (PS1) does not turn ON within a specified period of time after the 
      scanner motor (M1) turns ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Scanner drive board (SCDB) 
        •  Scanner motor (M1) 
        •  Scanner home sensor (PS1) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check I/O and the operation of the sensor and motor, and repair/replace it if any abnormality. (Wiring diagram: Main body (3/3): 5-B, 3- 
           B) 
       2.  Check the connector connection and the wiring between the sensor and motor and SDCB, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SCDB and PRCB, and repair it if any abnormality. 
       4.  Replace PS1. 
       5.  Replace M1. 
       6.  Replace SCDB. 
       7.  Replace PRCB 
       8.  Replace M1 and SCDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.2   C-6102 

Code 
      C-6102 
Classification 
      Main body: Scanner abnormality 
Cause 
      When in optics scan returning operation, the scanner home sensor (PS1) does not turn ON within a specified period of time after the 
      scanner motor (M1) turns ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Scanner drive board (SCDB) 
        •  Scanner motor (M1) 
        •  Scanner home sensor (PS1) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check I/O and the operation of the sensor/motor, and repair/replace it if any abnormality. (Wiring diagram: Main body (3/3): 5-B, 3-B) 
       2.  Check the connector connection and the wiring between the sensor/motor and SDCB, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SCDB and PRCB, and repair it if any abnormality. 
       4.  Replace PS1. 
       5.  Replace M1. 
       6.  Replace SCDB. 
       7.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.3    C-6301 

Code 
      C-6301 
Classification 
      Main body: Fan abnormality 
Cause 
      An error detection signal of FM2 is detected continuously for a specified period of time while the scanner cooling fan (FM2) is ON. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 

                                                                            K -277 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Scanner drive board (SCDB) 
        •  Scanner cooling fan (FM2) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Rotate the fan or I/O by hand, and repair it if any abnormality. (Wiring diagram: Main body (3/3): 6-B) 
       2.  Check the connector connection and the wiring between SCDB and the fan, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between SCDB and PRCB, and repair it if any abnormality. 
       4.  Replace FM2. 
       5.  Replace SCDB. 
       6.  Replace PRCB. 
       7.  Replace FM2 and SCDB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.4   C-6701 

Code 
      C-6701 
Classification 
      Main body: Image processing 
Cause 
      When processing images, a filter coefficient cannot be created normally. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the connector connection and the wiring between SCIPB and MCB1, and repair it if any abnormality. 
       2.  Replace SCIPB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.5   C-6702 

Code 
      C-6702 
Classification 
      Main body: Image processing 
Cause 
      Address error of the scanner FIFO. While in the image read, the compression processing of image data that is read in does not terminate 
      correctly. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Overall control board (OACB) 
        •  Memory control board /1 (MCB1) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the connector connection and the wiring between OACB and MCB1, and repair it if any abnormality. 
       2.  Replace SCIPB. 
       3.  Replace OACB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.6   C-6703 

Code 
      C-6703 
Classification 
      Main body: Image processing 
Cause 
      After negation of SW, the compression of images that are read in and their development into the page memory are not terminated within a 
      specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 

                                                                             K -278 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        •  Memory control board /1 (MCB1) 
        •  Overall control board (OACB) 
        •  Printer control board (PRCB) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the connector connection and the wiring between SCIP and MCB1, between MCB1and OACB, and between OACB and PRCB, 
           and repair it if any abnormality. 
       2.  Replace SCIPB. 
       3.  Replace MCB1. 
       4.  Replace OACB. 
       5.  Replace PRCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.7   C-6704 

Code 
      C-6704 
Classification 
      Main body: Image processing 
Cause 
      While in the image read, the compression processing from the scanner into the memory does not terminate within a specified period of 
      time. The development from the scanner into the page memory does not terminate within a specified period of time. The SVV is not 
      detected within a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
        •  Memory control board /1 (MCB1) 
        •  Overall control board (OACB) 
        •  Printer control board (PRCB) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the connector connection and the wiring between SCIPB and MCB1 /between OACB and PRCB, and repair it if any 
           abnormality. 
       2.  Replace SCIPB. 
       3.  Replace MCB1. 
       4.  Replace OACB. 
       5.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.8   C-6705 

Code 
      C-6705 
Classification 
      Main body: Image processing 
Cause 
      While in the image read, despite of no resource provided, an inappropriate processing such as accessing to the compression device is 
      made. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
        •  Memory control board /1 (MCB1) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the connector connection and the wiring between SCIPB and MCB1, and repair it if any abnormality. 
       2.  Replace SCIPB. 
       3.  Replace MCB1. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.9   C-6706 

Code 
      C-6706 
Classification 
      Main body: Image processing 

                                                                             K -279 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Cause 
      While in the image read, SVV does not turn OFF within a specified period of time and the preparation for scanning the next page cannot 
      be started. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
        •  Memory control board /1 (MCB1) 
        •  Overall control board (OACB) 
        •  Printer control board (PRCB) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the connector connection and the wiring between SCIPB and MCB1 /between OACB and PRCB, and repair it if any 
           abnormality. 
       2.  Replace SCIPB. 
       3.  Replace MCB1. 
       4.  Replace OACB. 
       5.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.10   C-6707 

Code 
      C-6707 
Classification 
      Main body: Image processing 
Cause 
      Shading correction abnormality (GA abnormality). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the connector connection and the wiring between MCB1and SCIPB, between SCIPB and CCDB, and repair it if any 
           abnormality. 
       2.  Replace SCIPB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.11   C-6708 

Code 
      C-6708 
Classification 
      Main body: Image processing 
Cause 
      AOC/AGC adjustment abnormality 
      The light blocking cover and the lens cover of the scanner section are removed. 
      The connector of the CCD board (CCDB) is not disconnected. 
      The power cable of CCDB is disconnected. 
      The IC protector of the CCD board (CCDB) is removed. 
      Overexposure of the exposure lamp (L1). 
      L1 does not light. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  CCD board (CCDB) 
        •  Scanner image processing board (SCIPB) 
        •  CCD lens unit 
        •  Scanner drive board (SCDB) 
        •  Exposure lamp (L1) 
        •  Scanner inverter board (S_INVB) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the scanner section, and repair it if any abnormality such as cover off. 
       2.  Check the connector connection and the wiring between L1 and S_INVB, SCDB, and repair it if any abnormality. (Wiring diagram: 
           Main body (3/3): 4-B) 

                                                                             K -280 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       3.  Check the connector connection and the wiring between CCDB and SCIPB and repair it if any abnormality. (Wiring diagram: Main 
           body (2/3): 13-C) 
       4.  Check the connector connection and the wiring of SCIPB, MCB1, OACB, PRCB, and repair it if any abnormality. 
       5.  Check the I/O of L1 and replace it if any abnormality. 
       6.  Replace S_INVB. 
       7.  Replace SCIPB. 
       8.  Replace SCDB. 
       9.  Replace CCDB and SCIPB at a time. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.12   C-6709 

Code 
      C-6709 
Classification 
      Main body: Image processing 
Cause 
      The adjustment data evacuated by resolutions is not available. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
        •  Memory control board /1 (MCB1) 
        •  Program of overall control board (OACB) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between SCIPB and MCB1, and repair it if any abnormality. 
       2.  Rewrite the firmware for image control. 
       3.  Replace SCIPB. 
       4.  Replace MCB1. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.13   C-6710 

Code 
      C-6710 
Classification 
      Main body: Image processing 
Cause 
      A density conversion gamma curve cannot be created normally. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
        •  Memory control board /1 (MCB1) 
        •  Program of overall control board (OACB) 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between SCIPB, MCB1 and OACB, and repair it if any abnormality. 
       2.  Rewrite the firmware for image control. 
       3.  Replace SCIPB. 
       4.  Replace MCB1. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.14   C-6711 

Code 
      C-6711 
Classification 
      Main body: Image processing 
Cause 
      Pulse width modulation IC calibration cannot be started normally. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
        •  Memory control board /1 (MCB1) 
        •  Program of overall control board (OACB) 
Correction 

                                                                            K -281 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the connector connection and the wiring between SCIPB, MCB1 and OACB, and repair it if any abnormality. 
       2.  Rewrite the firmware for image control. 
       3.  Replace SCIPB. 
       4.  Replace MCB1. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.15   C-6712 

Code 
      C-6712 
Classification 
       Main body: Image processing 
Cause 
       Pulse width modulation IC calibration cannot be completed normally. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
        •  Memory control board /1 (MCB1) 
        •  Program of overall control board (OACB) 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the connector connection and the wiring between SCIPB and MCB1, and repair it if any abnormality. 
       2.  Rewrite the firmware for image control. 
       3.  Replace SCIPB. 
       4.  Replace MCB1. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.16   C-6713 

Code 
      C-6713 
Classification 
       Main body: Image processing 
Cause 
      APC initial sampling is started before MPC is completed. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Writing unit 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the connector connection and the wiring on PRIPB, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between the writing unit and PRIPB, and repair it if any abnormality. 
       3.  Replace PRIPB. 
       4.  Replace write unit. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.17     C-6714 

Code 
      C-6714 
Classification 
       Main body: Image processing 
Cause 
       MPC is started before APC is in progress. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Writing unit 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        

                                                                              K -282 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Solution 
        1.  Check the connector connection and the wiring on PRIPB, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between the writing unit and PRIPB, and repair it if any abnormality. 
       3.  Replace PRIPB. 
       4.  Replace write unit. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.18   C-6715 

Code 
      C-6715 
Classification 
       Main body: Image processing 
Cause 
      Sub scan beam correction is started before APC or MPC is completed. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Program of printer control board (PRCB) 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the connector connection and the wiring on PRIPB, and repair it if any abnormality. 
       2.  Rewrite the firmware of printer system 
       3.  Replace PRIPB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.19   C-6716 

Code 
      C-6716 
Classification 
       Main body: Image processing 
Cause 
      Sub scan beam interval correction is started with write clock abnormality occurred due to noncompletion of AD9561 initialization. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Program of printer control board (PRCB) 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the connector connection and the wiring on PRIPB, and repair it if any abnormality. 
       2.  Rewrite the firmware of printer system 
       3.  Replace PRIPB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.20     C-6717 

Code 
      C-6717 
Classification 
       Main body: Image processing 
Cause 
       N-in-1 page area abnormality. Due to an image area abnormality of the memory, images cannot be expanded on the memory. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Program of printer control board (PRCB) 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the connector connection and the wiring on PRIPB, and repair it if any abnormality. 
       2.  Rewrite the firmware of printer system 
       3.  Replace PRIPB. 
Faulty part isolation DIPSW 
Control while detached 

                                                                             K -283 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

  

2.23.21   C-6720 

Code 
      C-6720 
Classification 
       Main body: Image processing 
Cause 
      The scan operation starts before the centering adjustment is terminated. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Software bug 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  When a SC occurs, store the log by the Log Store in the service mode. 
       2.  Report it with that log to KM. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.22   C-6721 

Code 
      C-6721 
Classification 
       Main body: Image processing 
Cause 
      The AGC is retried due to the decreased light volume of the exposure lamp (L1). However, no error occurs. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  CCD board (CCDB) 
        •  Scanner image processing board (SCIPB) 
        •  CCD lens unit 
        •  Scanner drive board (SCDB) 
        •  Exposure lamp (L1) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the scanner section, and repair it if any abnormality such as cover off. 
       2.  Check the connector connection and the wiring between L1 and S_INVB, SCDB, and repair it if any abnormality. (Wiring diagram: 
           Main body (3/3): 4-B) 
       3.  Check the connector connection and the wiring between CCDB and SCIPB and repair it if any abnormality. (Wiring diagram: Main 
           body (2/3): 13-C) 
       4.  Check the connector connection and the wiring of SCIPB, MCB1, OACB, PRCB, and repair it if any abnormality. 
       5.  Check the I/O of L1 and replace it if any abnormality. 
       6.  Replace CCDB. 
       7.  Replace SCDB. 
       8.  Replace SCIPB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.23   C-6722 

Code 
      C-6722 
Classification 
       Main body: Image processing 
Cause 
      A PWM gamma curve is not created properly. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Writing unit 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between the writing unit and PRIPB, and repair it if any abnormality. 
       2.  Replace PRIPB. 
       3.  Replace write unit. 
Faulty part isolation DIPSW 

                                                                             K -284 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Control while detached 
  

2.23.24   C-6723 

Code 
      C-6723 
Classification 
      Main body: Image processing 
Cause 
      Connection abnormality between the CCD board (CCDB) and the image processing board (IPB). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
        •  CCD board (CCDB) 
        •  CCD lens unit 
        •  Exposure lamp (L1) 
        •  Scanner drive board (SCDB) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the scanner section, and repair it if any abnormality such as cover off. 
       2.  Check the connector connection and the wiring between L1 and S_INVB, SCDB, and repair it if any abnormality. (Wiring diagram: 
           Main body (3/3): 4-B) 
       3.  Check the connector connection and the wiring between CCDB and SCIPB and between SCDB and L1, and repair it if any 
           abnormality. (Wiring diagram:Main body (2/3): 13-C, (3/3): 4-B) 
       4.  Check the I/O of L1 and replace it if any abnormality. 
       5.  Replace CCDB. 
       6.  Replace SCDB. 
       7.  Replace SCIPB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.25   C-6724 

Code 
      C-6724 
Classification 
      Main body: Image processing 
Cause 
      When the sub power switch (SW2) turns ON, connection check of reading system board failed. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
        •  CCD board (CCDB) 
        •  CCD lens unit 
        •  Exposure lamp (L1) 
        •  Scanner drive board (SCDB) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the scanner section, and repair it if any abnormality such as cover off. 
       2.  Check the connector connection and the wiring between L1 and S_INVB, SCDB, and repair it if any abnormality. (Wiring diagram: 
           Main body (3/3): 4-B) 
       3.  Check the connector connection and the wiring between CCDB and SCIPB and between SCDB and L1, and repair it if any 
           abnormality. (Wiring diagram:Main body (2/3): 13-C, (3/3): 4-B) 
       4.  Check the connector connection and the wiring between SCDB and PRCB, and repair it if any abnormality. 
       5.  Check the I/O of L1 and replace it if any abnormality. 
       6.  Replace CCDB. 
       7.  Replace SCDB. 
       8.  Replace SCIPB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.26     C-6725 

Code 
      C-6725 
Classification 
      Main body: Image processing 
Cause 
      The parameter setting cannot be performed while preparing for scanning. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 

                                                                             K -285 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the connector connection and the wiring between SCIPB and MCB1, and repair it if any abnormality. 
       2.  Replace SCIPB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.23.27   C-6801 

Code 
      C-6801 
Classification 
      Main body: Communication error 
Cause 
      After the sub power switch (SW2) turns ON, the communication between the overall control board (OACB) and the operation board /1 
      (OB1) is not started within a specified period of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Overall control board (OACB) 
        •  Operation board /1 (OB1) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the connector connection and the wiring on OACB and OB1, and repair it if any abnormality. 
       2.  Replace OB1. 
       3.  Replace OACB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.24   Solution 20 (C-7001_9999) 

2.24.1   C-7001 

Code 
      C-7001 
Classification 
      Main body: Communication error 
Cause 
      Communication error. 
Measures to take when alert occurs 
      The main body and the post processing machine stop immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check the connector connection and the wiring between the main body and the post processing machine, and repair it if any 
           abnormality. 
       2.  Replace PRCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.24.2   C-8001 

Code 
      C-8001 
Classification 
      DF: DF communication error 
Cause 
      Communication error between the main body and DF. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  DF control board (DFCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 

                                                                            K -286 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        
Solution 
       1.  Check the connector connection and the wiring between DFCB and PRCB, and repair it if any abnormality. 
       2.  Replace DFCB. 
       3.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.24.3   C-8101 

Code 
      C-8101 
Classification 
      DF: Paper feed motor error 
Cause 
      Paper feed motor (M301) error 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Paper feed motor (M301) 
        •  DF control board (DFCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the original feed section, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between DFCB and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: DF: 7-A) 
       4.  Replace M301. 
       5.  Replace DFCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.24.4   C-8102 

Code 
      C-8102 
Classification 
      DF: Conveyance motor error 
Cause 
      Conveyance motor (M302) error 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Conveyance motor (M302) 
        •  DF control board (DFCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the original feed section, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between DFCB and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: DF: 7-A) 
       4.  Replace M302. 
       5.  Replace DFCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.24.5   C-8103 

Code 
      C-8103 
Classification 
      DF: Reverse/paper exit motor error 
Cause 
      Reverse/paper exit motor (M303) error. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Reverse/paper exit motor (M303) 
        •  DF control board (DFCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 

                                                                             K -287 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        
Solution 
        1.  Check the original feed section, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring between DFCB and the motor, and repair it if any abnormality. 
       3.  Check the I/O drive of the motor and the coupling of the gear, and repair/replace it if any abnormality. (Wiring diagram: DF: 7-B) 
       4.  Replace M303. 
       5.  Replace DFCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.24.6   C-8401 

Code 
      C-8401 
Classification 
       DF: Registration sensor error 
Cause 
       Registration sensor (PS301) error 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Original registration sensor (PS301) 
        •  DF control board (DFCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between DFCB and the sensor, and repair it if any abnormality. 
       2.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: DF: 1-B) 
       3.  Replace PS301. 
       4.  Replace DFCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.24.7   C-8402 

Code 
      C-8402 
Classification 
       DF: Timing sensor error 
Cause 
      Timing sensor (PS302) error 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Timing sensor (PS302) 
        •  DF control board (DFCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between DFCB and the sensor, and repair it if any abnormality. 
       2.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: DF: 1-B) 
       3.  Replace PS302. 
       4.  Replace DFCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.24.8   C-8403 

Code 
      C-8403 
Classification 
       DF: Reverse sensor error 
Cause 
       Reverse sensor (PS305) error 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Reverse sensor (PS305) 
        •  DF control board (DFCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 

                                                                             K -288 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        
Solution 
        1.  Check the connector connection and the wiring between DFCB and the sensor, and repair it if any abnormality. 
       2.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: DF: 1-D) 
       3.  Replace PS305 
       4.  Replace DFCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.24.9   C-8404 

Code 
      C-8404 
Classification 
       DF: Paper exit sensor error 
Cause 
       Paper exit sensor (PS306) error 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Paper exit sensor (PS306) 
        •  DF control board (DFCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between DFCB and the sensor, and repair it if any abnormality. 
       2.  Check I/O and the operation of the sensor, and repair/replace it if any abnormality. (Wiring diagram: DF: 1-D) 
       3.  Replace PS306 
       4.  Replace DFCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.24.10   C-8405 

Code 
      C-8405 
Classification 
       DF: Size VR error 
Cause 
      Size VR (VR301) error. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Size VR (VR301) 
        •  DF control board (DFCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring between DFCB and VR301, and repair it if any abnormality. 
       2.  Replace VR301 
       3.  Replace DFCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.24.11   C-8406 

Code 
      C-8406 
Classification 
       DF: Non-volatile memory error 
Cause 
       Non-volatile memory error 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  DF control board (DFCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the connector connection and the wiring on DFCB, and repair it if any abnormality. 

                                                                             K -289 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       2.  Reinstalling DFCB firmware 
       3.  Replace DFCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.24.12   C-8407 

Code 
      C-8407 
Classification 
       DF: DF abnormality 
Cause 
      When the sub power switch (SW2) is ON, it is detected that the control program of the DF control board (DFCB) is unwritten. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  DF control board (DFCB) 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Reinstalling DFCB firmware 
       2.  Check the connector connection and the wiring between RBU and OACB, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring on DFCB, and repair it if any abnormality. 
       4.  Replace DFCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.25   Solution 20 (C-C001_C200) 

2.25.1   C-C101 

Code 
      C-C101 
Classification 
       Main body: Communication error 
Cause 
      When the sub power switch (SW2) turns ON, a response from the printer control board (PRCB) has not received within a specified period 
      of time. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
        •  Overall control board (OACB) 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the connector connection and the wiring of PRCB and OACB, and repair it if any abnormality. 
       2.  Replace PRCB. 
       3.  Replace OACB. 
       4.  Replace PRCB and OACB at a time 
Faulty part isolation DIPSW 
Control while detached 
  

2.25.2     C-C102 

Code 
      C-C102 
Classification 
       Main body: Communication error 
Cause 
      Communication error of the printer control board (PRCB) 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control board (PRCB) 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the connector connection and the wiring between PRCB and OACB, and repair it if any abnormality. 
       2.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

                                                                             K -290 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

2.25.3   C-C103 

Code 
      C-C103 
Classification 
      Main body: Communication error 
Cause 
      Communication error of the control panel 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Operation board /1 (OB1) 
        •  Printer image processing board (PRIPB) 
        •  Scanner image processing board (SCIPB) 
        •  Memory control board /1 (MCB) 
        •  Printer control board (PRCB) 
        •  Overall control board (OACB) 
        •  Sub power switch (SW2) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Check SW2 and repair if any abnormality 
       2.  Check the connector connection and the wiring of PRIPB, SCIPB, MCB1, PRCB, OACB and OB1, and repair it if any abnormality. 
       3.  Replace OB1. 
       4.  Replace PRIPB. 
       5.  Replace SCIPB. 
       6.  Replace MCB1. 
       7.  Replace PRCB 
       8.  Replace OACB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.25.4   C-C104 

Code 
      C-C104 
Classification 
      Main body: ISW abnormality 
Cause 
      When the sub power switch (SW2) turns ON, ISW unwritten area is detected in the printer control program. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control firmware 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Reinstalling PRCB firmware 
       2.  Check the I/F connector connection and the wiring for ISW on RBU, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between RBU and OACB, and repair it if any abnormality. 
       4.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.25.5   C-C106 

Code 
      C-C106 
Classification 
      Main body: ISW abnormality 
Cause 
      No normal header is transmitted within a specified period of time after ISW is started. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Relay board /U (RBU) 
        •  USB memory 
Correction 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check whether using the USB memory for the low-power device. If not, replace it with one for low-power device. 
       2.  Check whether there is any abnormality on the USB memory. When using an USB memory which has never been used for ISW 
           before, replace it with one which has been successfully used for ISW. 

                                                                            K -291 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       3.  Check the I/F connector connection and the wiring for ISW on RBU, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between RBU and OACB, and repair it if any abnormality. 
       5.  Reinstalling firmware 
Faulty part isolation DIPSW 
Control while detached 
  

2.25.6   C-C107 

Code 
      C-C107 
Classification 
       Main body: ISW abnormality 
Cause 
      While in data transmission by ISW, a checksum error or a header error is detected in the downloaded error. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Relay board /U (RBU) 
        •  USB memory 
        •  Program file abnormality 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check whether there is any abnormality on the USB memory. When using an USB memory which has never been used for ISW 
           before, replace it with one which has been successfully used for ISW. 
       2.  Check the I/F connector connection and the wiring for ISW on RBU, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between RBU and OACB, and repair it if any abnormality. 
       4.  Reinstalling firmware 
Faulty part isolation DIPSW 
Control while detached 
  

2.25.7   C-C108 

Code 
      C-C108 
Classification 
       Main body: ISW abnormality 
Cause 
      While in data transmission by ISW, data cannot be written in the flash ROM properly. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Relay board /U (RBU) 
        •  UBS cables 
        •  Board to which the program is transferred 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check whether there is any abnormality on the USB memory. When using an USB memory which has never been used for ISW 
           before, replace it with one which has been successfully used for ISW. 
       2.  Check the I/F connector connection and the wiring for ISW on RBU, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between RBU and OACB, and repair it if any abnormality. 
       4.  Reinstalling firmware 
Faulty part isolation DIPSW 
Control while detached 
  

2.25.8   C-C109 

Code 
      C-C109 
Classification 
       FS: FS ISW unwritten 
Cause 
      When the sub power switch (SW2) turns ON, ISW unwritten area is detected in the FS firmware. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FNSCB firmware 
        •  FNS control board (FNSCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 

                                                                             K -292 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       1.  Reinstall the FNSCB firmware. 
       2.  Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
       3.  Check the I/F connector connection and the wiring for ISW on RBU, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between RUB and OACB, and repair it if any abnormality. 
       5.  Replace FNSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.25.9   C-C111 

Code 
      C-C111 
Classification 
      LS: LS ISW unwritten 
Cause 
      When the sub power switch (SW2) turns ON, ISW unwritten area is detected in the LS firmware (1st tandem). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  LSCB firmware 
        •  LS control board (LSCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Reinstall the LSCB firmware. 
       2.  Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
       3.  Check the I/F connector connection and the wiring for ISW on RBU, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between RUB and OACB, and repair it if any abnormality. 
       5.  Replace LSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.25.10     C-C112 

Code 
      C-C112 
Classification 
      LS: LS ISW unwritten 
Cause 
      When the sub power switch (SW2) turns ON, ISW unwritten area is detected in the LS firmware (2nd tandem). 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  LSCB firmware 
        •  LS control board (LSCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Reinstall the LSCB firmware. 
       2.  Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
       3.  Check the I/F connector connection and the wiring for ISW on RBU, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between RUB and OACB, and repair it if any abnormality. 
       5.  Replace LSCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.25.11     C-C113 

Code 
      C-C113 
Classification 
      FD: FD ISW unwritten 
Cause 
      When the sub power switch (SW2) turns ON, ISW unwritten area is detected in the FD firmware. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  FDCB firmware 
        •  FD control board (FDCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 

                                                                            K -293 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

        
Solution 
       1.  Reinstall the FDCB firmware. 
       2.  Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
       3.  Check the I/F connector connection and the wiring for ISW on RBU, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between RUB and OACB, and repair it if any abnormality. 
       5.  Replace FDCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.25.12   C-C114 

Code 
      C-C114 
Classification 
      SD: SD-506 ISW unwritten 
Cause 
      When the sub power switch (SW2) turns ON, ISW unwritten area is detected in the SD firmware. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  SDCB firmware 
        •  SD control board (SDCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Reinstalling SDCB firmware 
       2.  Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
       3.  Check the I/F connector connection and the wiring for ISW on RBU, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between RUB and OACB, and repair it if any abnormality. 
       5.  Replace SDCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.25.13   C-C116 

Code 
      C-C116 
Classification 
      PB: PB ISW unwritten 
Cause 
      When the sub power switch (SW2) turns ON, ISW unwritten area is detected in the PB firmware. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PB firmware 
        •  PB control board (PBCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Reinstalling PBCB firmware 
       2.  Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
       3.  Check the I/F connector connection and the wiring for ISW on RBU, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between RUB and OACB, and repair it if any abnormality. 
       5.  Replace PBCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.25.14   C-C117 

Code 
      C-C117 
Classification 
      GP: GP-501 ISW unwritten 
Causes 
      When the sub power switch (SW2) turns ON, ISW unwritten area is detected in the GP firmware. 
Resulting operation 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  GP firmware 
        •  Punch Controller PCB 
Correction 
      Turn OFF/ON the sub power switch of the main body. 

                                                                             K -294 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                   K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Procedure 
       1.  Reinstall the GP firmware. 
       2.  Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
       3.  Check the I/F connector connection and the wiring for ISW on RBU, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring of RBU, OB4 and OACB, and repair it if any abnormality. 
       5.  Replace punch controller PCB. 
DipSW 
Control during separation 
  

2.25.15   C-C118 

Code 
      C-C118 
Classification 
      RU: RU-506 ISW unwritten 
Causes 
      When the sub power switch (SW2) turns ON, ISW unwritten area is detected in the RU firmware. 
Resulting operation 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  RU-506 firmware 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Procedure 
       1.  Reinstall the RU firmware. 
       2.  Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
       3.  Check the I/F connector connection and the wiring for ISW on RBU, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring of RBU, OB4 and OACB, and repair it if any abnormality. 
       5.  Replace RUCB. 
DipSW 
Control during separation 
  

2.25.16   C-C119 

Code 
      C-C119 
Classification 
      RU: RU-509 ISW unwritten 
Cause 
      When the sub power switch (SW2) turns ON, ISW unwritten area is detected in the RU program. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  RU firmware 
        •  RU control board (RUCB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Reinstall the RU firmware. 
       2.  Check the connector connection and the wiring between the main body and each option, and repair it if any abnormality. 
       3.  Check the I/F connector connection and the wiring for ISW on RBU, and repair it if any abnormality. 
       4.  Check the connector connection and the wiring between RUB and OACB, and repair it if any abnormality. 
       5.  Replace RUCB 
Faulty part isolation DIPSW 
Control while detached 
  

2.25.17   C-C120 

Code 
      C-C120 
Classification 
      Main body: ISW abnormality 
Cause 
      Printer control board (PRCB) firmware abnormality 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer control firmware 
Correction 

                                                                             K -295 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                 K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Reinstall PRCB firmware. 
       2.  Check the I/F connector connection and the wiring for ISW on RBU, and repair it if any abnormality. 
       3.  Check the connector connection and the wiring between RBU and OACB, and repair it if any abnormality. 
       4.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

2.25.18   C-C135 

Code 
      C-C135 
Classification 
      Main body: HDD/P connection abnormality 
Cause 
      HDD/P unconnected 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  HDD/P (HDD/P) 
Correction 
      Turn OFF/ON the sub power switch of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  When HDD/P is not used, check the setting of the software DIPSW 2-1 on the service mode and when the setting is configured to "1", 
           change to "0". 
       2.  Check the connector connection and the wiring between HDD/P and MCB/P, and repair it if any abnormality.(Wiring diagram: Main 
           body (2/3-2):19-G) 
Faulty part isolation DIPSW 
      DIPSW18-7 
Control while detached 
      HDD unusable (HDD not connected) 
      However, it cannot be detached when the scanner or the IC-601 is connected. 
  

2.26   Solution 22 (C-C201_E100) 

2.26.1   C-D010 

Code 
      C-D010 
Classification 
      Main body: During or after HDD deletion 
Cause 
      The HDD overwriting and deleting is being executed, or the HDD overwriting and deleting has already been executed. 
Measures to take when an alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  HDD/Y (HDD/Y) 
        •  HDD/M (HDD/M) 
        •  HDD/C (HDD/C) 
        •  HDD/K (HDD/K) 
        •  HDD/A (HDD/A) 
        •  HDD/P (HDD/P) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Report it to KM. 
Faulty part isolation DIPSW 
      DIPSW18-7 
Control while detached 
      HDD unusable (HDD not connected) 
      However, it cannot be detached when IC-601 is connected. 
  

2.26.2   C-D0E0 

Code 
      C-D0E0 
Classification 
      Main body: HDD initialization abnormality 
Cause 
      There is HDD to be initialized. 

                                                                           K -296 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                 K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  HDD/Y (HDD/Y) 
        •  HDD/M (HDD/M) 
        •  HDD/C (HDD/C) 
        •  HDD/K (HDD/K) 
        •  HDD/A (HDD/A) 
        •  HDD/P (HDD/P) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Execute bad sectors check and recovery in the output check I/O 99-03. 
       2.  Replace HDD (Refer to I.5.7.12 Hard disk replacing procedure) 
Faulty part isolation DIPSW 
      DIPSW18-7 
Control while detached 
      HDD unusable (HDD not connected) 
      However, it cannot be detached when IC-601 is connected. 
  

2.26.3   C-D0E1 

Code 
      C-D0E1 
Classification 
      Main body: HDD abnormality (any of Y, M, C, K or A) 
Cause 
      HDD (Y/M/C/K/A) is not connected. Or damaged, or while in initialization. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  HDD/Y (HDD/Y) 
        •  HDD/M (HDD/M) 
        •  HDD/C (HDD/C) 
        •  HDD/K (HDD/K) 
        •  HDD/A (HDD/A) 
        •  Memory control board /1 (MCB1) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between HDD and MCB1, MCB/P, OACB, and repair it if any abnormality. (Wiring 
           diagram: Main body (2/3): 18-F) 
       2.  Execute bad sectors check and recovery in the output check I/O 99-03. 
       3.  Replace HDD (Refer to I.5.7.12 Hard disk replacing procedure) 
       4.  Replace MCB1. 
Faulty part isolation DIPSW 
      DIPSW18-7 
Control while detached 
      HDD unusable (HDD not connected) 
      However, it cannot be detached when IC-601 is connected. 
  

2.26.4   C-D0E2 

Code 
      C-D0E2 
Classification 
      Main body: HDD/P abnormality 
Cause 
      HDD/P unconnected Or damaged, or while in initialization. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  HDD/P (HDD/P) 
        •  Memory control board /P (MCB/P) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between HDD/P and MCB/P, and repair it if any abnormality. (Wiring diagram: Main 
           body (2/3): 18-G) 
       2.  Execute bad sectors check and recovery in the output check I/O 99-03. 

                                                                           K -297 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                 K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       3.  Replace HDD/P. (Refer to I.5.7.12 Hard disk replacing procedure) 
       4.  Replace MCB/P. 
Faulty part isolation DIPSW 
      DIPSW18-7 
Control while detached 
      HDD unusable (HDD not connected) 
      However, it cannot be detached when IC-601 is connected. 
  

2.26.5   C-D0E3 

Code 
      C-D0E3 
Classification 
      Main body: HDD/Y read/write abnormality 
Cause 
      Writing/reading to the HDD/Y failed. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  HDD/Y (HDD/Y) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between HDD/Y and MCB1, and repair it if any abnormality. (Wiring diagram: Main 
           body (2/3): 17-F) 
       2.  Execute bad sectors check and recovery in the output check I/O 99-03. 
       3.  Replace HDD/Y. (Refer to I.5.7.12 Hard disk replacing procedure) 
Faulty part isolation DIPSW 
      DIPSW18-7 
Control while detached 
      HDD unusable (HDD not connected) 
      However, it cannot be detached when IC-601 is connected. 
  

2.26.6   C-D0E4 

Code 
      C-D0E4 
Classification 
      Main body: HDD/M read/write abnormality 
Cause 
      Writing/reading to the HDD/M failed. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  HDD/M (HDD/M) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between HDD/M and OACB, and repair it if any abnormality. (Wiring diagram: Main 
           body (2/3): 18-G) 
       2.  Execute bad sectors check and recovery in the output check I/O 99-03. 
       3.  Replace HDD/M. (Refer to I.5.7.12 Hard disk replacing procedure) 
Faulty part isolation DIPSW 
      DIPSW18-7 
Control while detached 
      HDD unusable (HDD not connected) 
      However, it cannot be detached when IC-601 is connected. 
  

2.26.7   C-D0E5 

Code 
      C-D0E5 
Classification 
      Main body: HDD/C read/write abnormality 
Cause 
      Writing/reading to the HDD/C failed. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  HDD/C (HDD/C) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 

                                                                           K -298 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between HDD/C and OACB, and repair it if any abnormality. (Wiring diagram: Main 
           body (2/3): 17-G) 
       2.  Execute bad sectors check and recovery in the output check I/O 99-03. 
       3.  Replace HDD/C. (Refer to I.5.7.12 Hard disk replacing procedure) 
Faulty part isolation DIPSW 
      DIPSW18-7 
Control while detached 
      HDD unusable (HDD not connected) 
      However, it cannot be detached when IC-601 is connected. 
  

2.26.8   C-D0E6 

Code 
      C-D0E6 
Classification 
      Main body: HDD/K read/write abnormality 
Cause 
      Writing/reading to the HDD/K (HDD/K) failed. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  HDD/K (HDD/K) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between HDD/K and MCB1, and repair it if any abnormality. (Wiring diagram: Main 
           body (2/3): 17-G) 
       2.  Execute bad sectors check and recovery in the output check I/O 99-03. 
       3.  Replace HDD/K. (Refer to I.5.7.12 Hard disk replacing procedure) 
Faulty part isolation DIPSW 
      DIPSW18-7 
Control while detached 
      HDD unusable (HDD not connected) 
      However, it cannot be detached when IC-601 is connected. 
  

2.26.9   C-D0E7 

Code 
      C-D0E7 
Classification 
      Main body: HDD/A read/write abnormality 
Cause 
      Writing/reading to the HDD/A (HDD/A) failed. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  HDD/A (HDD/A) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between HDD/A and MCB1, and repair it if any abnormality. (Wiring diagram: Main 
           body (2/3): 17-F) 
       2.  Execute bad sectors check and recovery in the output check I/O 99-03. 
       3.  Replace HDD/A. (Refer to I.5.7.12 Hard disk replacing procedure) 
Faulty part isolation DIPSW 
      DIPSW18-7 
Control while detached 
      HDD unusable (HDD not connected) 
      However, it cannot be detached when IC-601 is connected. 
  

2.26.10   C-D0E8 

Code 
      C-D0E8 
Classification 
      Main body: HDD/P read/write abnormality 
Cause 
      Writing/reading to the HDD/P (HDD/P) failed. 
Measures to take when alert occurs 

                                                                            K -299 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  HDD/P (HDD/P) 
        •  Memory control board /P (MCB/P) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        • The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between HDD/P and MCB/P, and repair it if any abnormality. (Wiring diagram: Main 
           body (2/3): 18-G) 
       2.  Execute bad sectors check and recovery in the output check I/O 99-03. 
       3.  Replace HDD/P. (Refer to I.5.7.12 Hard disk replacing procedure) 
       4.  Replace MCB/P. 
Faulty part isolation DIPSW 
      DIPSW18-7 
Control while detached 
      HDD unusable (HDD not connected) 
      However, it cannot be detached when IC-601 is connected. 
  

2.26.11   C-D0EF 

Code 
      C-D0EF 
Classification 
      Main body: HDD verify abnormality 
Cause 
      An error is detected while in HDD verify check. 
      * SC is not counted. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  HDD/Y (HDD/Y) 
        •  HDD/M (HDD/M) 
        •  HDD/C (HDD/C) 
        •  HDD/K (HDD/K) 
        •  HDD/A (HDD/A) 
        •  HDD/P (HDD/P) 
        •  Memory control board /1 (MCB1) 
        •  Memory control board /P (MCB/P) 
        •  Overall control board (OACB) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 
      Note 
        • The message "Please call service" is displayed on the panel. 
        
Solution 
       1.  Check the connector connection and the wiring between HDD and MCB1, MCB/P, OACB, and repair it if any abnormality. (Wiring 
          diagram: Main body (2/3): 18-F) 
       2.  Execute bad sectors check and recovery in the output check I/O 99-03. 
       3.  Replace HDD. (Refer to I.5.7.12 Hard disk replacing procedure) 
       4.  Replace MCB/P. 
       5.  Replace OACB. 
       6.  Replace MCB1. 
Faulty part isolation DIPSW 
Control while detached 
  

2.26.12   C-D0F0 

Code 
      C-D0F0 
Classification 
      Main body: HDD Lock abnormality 
Cause 
      HDD Lock abnormality while in enhanced security. 
      HDD is locked due to incorrect password, password unset or security OFF. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  HDD/Y (HDD/Y) 
        •  HDD/M (HDD/M) 
        •  HDD/C (HDD/C) 
        •  HDD/K (HDD/K) 
        •  HDD/A (HDD/A) 
        •  HDD/P (HDD/P) 
Correction 
      Turn OFF/ON the sub power switch (SW2) of the main body. 

                                                                          K -300 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Set HDD Lock Password to correct value 
       2.  Release the security mode and replace HDD (Refer to I.5.7.12 Hard disk replacing procedure) 
Faulty part isolation DIPSW 
Control while detached 
  

2.26.13   C-DC## 

Code 
      C-DC## 
Classification 
       Main body: Security abnormality 
Cause 
      Security abnormality 
Measures to take when alert occurs 
      - 
Estimated abnormal parts 
        •  Contact to Konica Minolta before carrying on the action. 
Correction 
       Note 
        •  The message "Please call service" is displayed on the panel. 
        
Solution 
        1.  Check the machine condition. 
Faulty part isolation DIPSW 
Control while detached 
  

2.26.14     C-E001 

Code 
      C-E001 
Classification 
       Main body: Image processing abnormality 
Cause 
      The message queue is insufficient or destroyed. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
        •  Printer image processing board (PRIPB) 
        •  Memory control board /1 (MCB1) 
        •  Program of overall control board (OACB) 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Turn OFF the sub power switch and unplug the power plug. Restart the main body after 10 seconds. 
       2.  Reinstall the firmware related to the overall control. 
       3.  Check the connector connection and the wiring of SCIPB, PRIPB, MCB1 and OACB, and repair it if any abnormality. 
       4.  Replace OACB. 
       5.  Replace SCIPB. 
       6.  Replace PRIPB. 
        7.  Replace MCB1. 
Faulty part isolation DIPSW 
Control while detached 
  

2.26.15   C-E002 

Code 
      C-E002 
Classification 
       Main body: Image processing abnormality 
Cause 
      The parameter value is in excess of the permissible limits. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
        •  Printer image processing board (PRIPB) 
        •  Memory control board /1 (MCB1) 
        •  Program of overall control board (OACB) 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        

                                                                              K -301 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                  K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Solution 
       1.  Turn OFF the sub power switch and unplug the power plug. Restart the main body after 10 seconds. 
       2.  Reinstall the firmware related to the overall control. 
       3.  Check the connector connection and the wiring of SCIPB, PRIPB, MCB1, and OACB, and repair it if any abnormality. 
       4.  Replace OACB. 
       5.  Replace SCIPB. 
       6.  Replace PRIPB. 
       7.  Replace MCB1. 
Faulty part isolation DIPSW 
Control while detached 
  

2.26.16   C-E003 

Code 
      C-E003 
Classification 
      Main body: Image processing abnormality 
Cause 
      The ID of the task that sends the message queue is undefined. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
        •  Printer image processing board (PRIPB) 
        •  Memory control board /1 (MCB1) 
        •  Program of overall control board (OACB) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Turn OFF the sub power switch and unplug the power plug. Restart the main body after 10 seconds. 
       2.  Reinstall the firmware related to the overall control. 
       3.  Check the connector connection and the wiring of SCIPB, PRIPB, MCB1, and OACB, and repair it if any abnormality. 
       4.  Replace OACB. 
       5.  Replace SCIPB. 
       6.  Replace PRIPB. 
       7.  Replace MCB1. 
Faulty part isolation DIPSW 
Control while detached 
  

2.26.17   C-E004 

Code 
      C-E004 
Classification 
      Main body: Image processing abnormality 
Cause 
      The receiving event of the message is undefined. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
        •  Printer image processing board (PRIPB) 
        •  Memory control board /1 (MCB1) 
        •  Program of overall control board (OACB) 
Correction 
      Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
       1.  Turn OFF the sub power switch and unplug the power plug. Restart the main body after 10 seconds. 
       2.  Reinstall the firmware related to the overall control. 
       3.  Check the connector connection and the wiring of SCIPB, PRIPB, MCB1, and OACB, and repair it if any abnormality. 
       4.  Replace OACB. 
       5.  Replace SCIPB. 
       6.  Replace PRIPB. 
       7.  Replace MCB1. 
Faulty part isolation DIPSW 
Control while detached 
  

2.26.18   C-E005 

Code 
      C-E005 
Classification 
      Main body: Image processing abnormality 
Cause 
      Memory access abnormality. 

                                                                            K -302 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
        •  Printer image processing board (PRIPB) 
        •  Memory control board /1 (MCB1) 
        •  Overall control board (OACB) 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Turn OFF the sub power switch and unplug the power plug. Restart the main body after 10 seconds. 
       2.  Reinstall the firmware related to the overall control. 
       3.  Check the connector connection and the wiring of SCIPB, PRIPB, MCB1, and OACB, and repair it if any abnormality. 
       4.  Replace OACB. 
       5.  Replace SCIPB. 
       6.  Replace PRIPB. 
       7.  Replace MCB1. 
Faulty part isolation DIPSW 
Control while detached 
  

2.26.19   C-E006 

Code 
      C-E006 
Classification 
       Main body: Image processing abnormality 
Cause 
       Header address read out abnormality. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Scanner image processing board (SCIPB) 
        •  Printer image processing board (PRIPB) 
        •  Memory control board /1 (MCB1) 
        •  Overall control board (OACB) 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Turn OFF the sub power switch and unplug the power plug. Restart the main body after 10 seconds. 
       2.  Reinstall the firmware related to the overall control. 
       3.  Check the connector connection and the wiring of SCIPB, PRIPB, MCB1, and OACB, and repair it if any abnormality. 
       4.  Replace OACB. 
       5.  Replace SCIPB. 
       6.  Replace PRIPB. 
       7.  Replace MCB1. 
Faulty part isolation DIPSW 
Control while detached 
  

2.26.20   C-E007 

Code 
      C-E007 
Classification 
       Main body: Image processing abnormality 
Cause 
       Header address read out abnormality. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the power relay (RL1). 
Estimated abnormal parts 
        •  Printer image processing board (PRIPB) 
        •  Memory control board /1 (MCB1) 
        •  Overall control board (OACB) 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check that DIMM on the board is correctly installed, and repair it if any abnormality. 
       2.  Check the connector connection and the wiring of PRIPB, MCB1 and OACB, and repair it if any abnormality. 
       3.  Replace MCB1. 
       4.  Replace PRIPB. 
       5.  Replace OACB 
Faulty part isolation DIPSW 
Control while detached 
  

                                                                             K -303 
﻿bizhub PRESS C7000/C7000P/C70hc/C6000/PRO C6000L                                                    K   TROUBLESHOOTING  > 2.  MALFUNCTION CODE 

2.26.21   C-E008 

Code 
      C-E008 
Classification 
       Main body: Output paper density automatic adjustment abnormality 
Cause 
      An error is detected while in the output paper density adjustment. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  Color density sensor unit 
Correction 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Check the RU color density sensor unit, and clean/replace it if there is dirt or any abnormality. 
       2.  Make adjustments of the color density sensor unit. 
Faulty part isolation DIPSW 
Control while detached 
  

2.26.22   C-E009 

Code 
      C-E009 
Classification 
       Main body: Printer control non-volatile initial value abnormality 
Cause 
      Wrong initial value is detected in the printer control area. 
Measures to take when alert occurs 
      The main body stops immediately to turn OFF the main relay (RL1). 
Estimated abnormal parts 
        •  PRCB firmware 
        •  Printer control board (PRCB) 
Correction 
      Turn OFF/ON the sub power (SW2) switch of the main body. 
       Note 
        •  The message "Please turn on power again" is displayed on the touch panel. 
        
Solution 
        1.  Turn OFF the sub power switch (SW2) and unplug the power plug. Restart the main body after 10 seconds. 
       2.  Reinstall PRCB firmware. 
       3.  Replace PRCB. 
Faulty part isolation DIPSW 
Control while detached 
  

                                                                             K -304 
`