#include <iostream>
#include <vector>
#include <map>
#include <fstream>
#ifndef NOTIFICATIONS
#define NOTIFICATIONS

#define MAX_ELEM 7
using namespace std;

class Notifications {
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

    bool finishedState[MAX_ELEM] = {0};

    void retreiveInitState() {
        ifstream stateStream("state.data");

        for(int i = 0; i < MAX_ELEM; i++)
            stateStream >> finishedState[i];
    }

    void Init() {

        retreiveInitState();
        notifData[1] = finishedState[1] ? "Laundry finished" : "Laundry Pending";
        notifData[2] = finishedState[2] ? "Dishes finished" : "Dishes Pending";
        notifData[3] = finishedState[3] ? "Bedroom cleaning finished" : "Bedroom Cleaning Pending";
        notifData[4] = finishedState[4] ? "Bathroom Cleaning finished" : "Bathroom Cleaning Pending";
        notifData[5] = finishedState[5] ? "Trash Takeout finished" : "Trash Takeout Pending";
        notifData[6] = finishedState[6] ? "Grocery Shopping finished" : "Grocery Shopping Pending";
        notifData[7] = finishedState[7] ? "Phone Bill Payment finished" : "Phone Bill Payment Pending";
    }
}


#endif
