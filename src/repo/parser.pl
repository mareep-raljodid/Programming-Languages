title(['Laundry, Do your laundry', 'Dishes, Clean your dishes', 'Bedroom, Clean your room!', 'Bathroom Cleaning, Clean the bathroom', 'Takeout the trash, Take out the garbage', 'Grocery Shopping, Buy Groceries', 'Phone Bill Payments, Pay your phone bill']).
reminderTime(['12:00 am', '1:00 am', '2:00 am', '3:00 am', '4:00 am', '5:00 am', '6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm', '11:00 pm']).
inTime(['0000', '0100', '0200', '0300', '0400', '0500', '0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000', '2100', '2200', '2300']).
inTitle(['<Laundry>', '<Dishes>', '<Bedroom>', '<Bathroom Cleaning>', '<Trash Takeout>', '<Grocery Shopping>', '<Phone Bill Payment>']).

readUntil(Line):-
    at_end_of_stream(InStream) -> false ; (
        rewriteMessage(Line).
        read_line_to_string(InStream, Line).
        readUntil(Line).
    ).

readFile(F) :-
    open(F, read, InStream).
    open('.../Gui_Notifs.txt', write, OutStream).
    read_line_to_string(InStream, Line).
    readUntil(Line).

    close(InStream).
    close(OutStream).

rewriteMessage(Line) :-
    forall(member(X, inTitle), forall(member(X, Line), nth0(I, inTitle, X))).
    forall(member(X, inTime), forall(member(X, Line), nth0(J, inTime, X))).
    nth0(I, title, OutTitle).
    nth0(J, reminderTime, OutTime).
    write(OutStream, OutTitle).
    write(OutStream, OutTime).
    write(OutStream, '\n').

readFile(".../data/notifObjects.txt").