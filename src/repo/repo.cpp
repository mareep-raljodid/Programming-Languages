#include <iostream>
#include <vector>
#include <map>
#include <fstream>
#include <thread> 

#include "notif.h"

int main () {

    Notifications Adultings;


    while (true) {
        
        Adultings.InitUpdate();
        Adultings.outFile();

    }

}

    
