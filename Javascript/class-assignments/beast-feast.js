function feast(beast, dish)
{
  const beastStart = beast[0];
  const beastEnd = beast[beast.length-1];
  const dishStart = dish[0];
  const dishEnd = dish[dish.length-1];
  if(beastStart === dishStart && beastEnd===dishEnd)
    return true;
  else
     return false;
//your function here
}