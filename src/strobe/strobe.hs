--List of the tasks and their associated time spans (in days)

laundry = 5
dishes = 3
cleanBedroom = 2
cleanBathroom = 4
trash = 6
groceryShopping = 10
phoneBill = 30
isDue = 0
doLaundry = 0

determineReminder :: (Integer, Integer) -> Integer
determineReminder (x, y) = z where
  z = 
    if x - y <= 0 then 1
    else 0

main = do 
  if determineReminder(laundry, 4) == 1 then print(1)
  else print(0)

  if determineReminder(dishes, 4) == 1 then print(1)
  else print(0)

  if determineReminder(cleanBedroom, 4) == 1 then print(1)
  else print(0)

  if determineReminder(cleanBathroom, 4) == 1 then print(1)
  else print(0)

  if determineReminder(trash, 4) == 1 then print(1)
  else print(0)

  if determineReminder(groceryShopping, 4) == 1 then print(1)
  else print(0)

  if determineReminder(phoneBill, 4) == 1 then print(1)
  else print(0)

