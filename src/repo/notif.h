#include <iostream>
#include <vector>
#include <map>
#include <fstream>
#include <thread> 

#ifndef NOTIFICATIONS
#define NOTIFICATIONS

#define MAX_ELEM 7
using namespace std;

class Notifications {
    
 public:
    enum notifs {
        laundry = 1,
        dishes,
        cleanBedroom,
        cleanBathroom,
        trash,
        groceries,
        phoneBill
    };

    map <int, string> notifData;

    /* Instantiating the message data for each
     * notification in the list depending on if 
     * it is done.
     */

    bool finishedState[MAX_ELEM];

    void retreiveInitState() {
        ifstream stateStream("../../data/state.data");

        for(int i = 0; i < MAX_ELEM; i++)
            stateStream >> finishedState[i];
    }

    void InitUpdate() {

        retreiveInitState();
        notifData[0] = finishedState[0] ? "Laundry finished" : "Laundry Pending";
        notifData[1] = finishedState[1] ? "Dishes finished" : "Dishes Pending";
        notifData[2] = finishedState[2] ? "Bedroom cleaning finished" : "Bedroom Cleaning Pending";
        notifData[3] = finishedState[3] ? "Bathroom Cleaning finished" : "Bathroom Cleaning Pending";
        notifData[4] = finishedState[4] ? "Trash Takeout finished" : "Trash Takeout Pending";
        notifData[5] = finishedState[5] ? "Grocery Shopping finished" : "Grocery Shopping Pending";
        notifData[6] = finishedState[6] ? "Phone Bill Payment finished" : "Phone Bill Payment Pending";
       /* 
        cout << "____________________\n\n\n\n";
        for(int i =0; i <7 ; i++)
            cout<< finishedState[i] << endl;


        cout << "____________________\n\n\n\n";
    */}

    void outFile () {
        
        ofstream outProbe;
        outProbe.open ("../../data/notifObjects");
        string outProbeStr[MAX_ELEM];
        outProbeStr[0] = finishedState[0] ? "\n" : "<Laundry>  <pending, Reminder Time:> <2000HRS>\n";
        outProbeStr[1] = finishedState[1] ? "\n" : "<Dishes>  <pending, Reminder Time:> <1100HRS>\n"; 
        outProbeStr[2] = finishedState[2] ? "\n" : "<Bedroom>  <pending, Reminder Time:> <900HRS>\n";
        outProbeStr[3] = finishedState[3] ? "\n" : "<Bathroom Cleaning>  <pending, Reminder Time:> <2200HRS>\n";
        outProbeStr[4] = finishedState[4] ? "\n" : "<Trash Takeout>  <pending, Reminder Time:> <1900HRS>\n";
        outProbeStr[5] = finishedState[5] ? "\n" : "<Grocery Shopping>  <pending, Reminder Time:> <1700HRS>\n";
        outProbeStr[6] = finishedState[6] ? "\n" : "<Phone Bill Payment>  <pending, Reminder Time:> <2200HRS>\n";
 
        for(int i = 0; i < MAX_ELEM; i++)
            outProbe << outProbeStr[i];
        outProbe.close();

        }

};
#endif
