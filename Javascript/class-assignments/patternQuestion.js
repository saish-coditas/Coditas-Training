/*
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *    
*/
function printPattern()
{
    for(let idx = 0,counter=4,spaceCounter=1; idx<5; idx++)
    {
        let star = "";
        for(let idy = 0; idy<counter; idy++)
        {
            star=star.concat(" ");
        }
        star=star.concat("*");
        for(let idz = 0; idz<spaceCounter; idz++)
        {
            star=star.concat(" ");
        }
        star=star.concat("*");
        console.log(star);
        counter--;
        spaceCounter=spaceCounter+2;
    }
    for(let idx = 0,counter=1,spaceCounter=7; idx<4; idx++)
    {
        let star = "";
        for(let idy = 0; idy<counter; idy++)
        {
            star=star.concat(" ");
        }
        star=star.concat("*");
        for(let idz = 0; idz<spaceCounter; idz++)
        {
            star=star.concat(" ");
        }
        star=star.concat("*");
        console.log(star);
        counter++;
        spaceCounter=spaceCounter-2;
    }   
}
printPattern();