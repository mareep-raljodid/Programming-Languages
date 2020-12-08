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
  if determineReminder(laundry, 4) == 1 then print("Laundry needs to be done")
  else print("Laundry does not need to be done")

  if determineReminder(dishes, 4) == 1 then print("Dishes needs to be done")
  else print("Dishes don't need to be done")

  if determineReminder(cleanBedroom, 4) == 1 then print("Clean bedroom needs to be done")
  else print("Clean bedroom does not need to be done")

  if determineReminder(cleanBathroom, 4) == 1 then print("Clean bathroom needs to be done")
  else print("Clean bathroom does not need to be done")

  if determineReminder(trash, 4) == 1 then print("Trash needs to be done")
  else print("Trash does not need to be done")

  if determineReminder(groceryShopping, 4) == 1 then print("Grocery shopping needs to be done")
  else print("Grocery shopping does not need to be done")

  if determineReminder(phoneBill, 4) == 1 then print("Phone bill needs to be done")
  else print("Phone bill does not need to be done")
