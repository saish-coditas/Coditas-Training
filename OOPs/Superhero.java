// Java Program to show Constructor Overloading in Superhero Class

public class Superhero 
{
    String characterName;
    int powerLevel; //out of 100
    boolean canFly;
    String weapon;

    Superhero()
    {
    }

    Superhero(String name)
    {
        this.characterName = name;
    }

    Superhero(String name, int power)
    {
        this.characterName = name;
        this.powerLevel = power;
    }
    
    Superhero(String name, int power, boolean fly)
    {
        this.characterName = name;
        this.powerLevel = power;
        this.canFly = fly;
    }

    Superhero(String name, int power, boolean fly, String weapon)
    {
        this.characterName = name;
        this.powerLevel = power;
        this.canFly = fly;
        this.weapon = weapon;
    }
    public static void main(String[] args) {
        Superhero newbie = new Superhero();
        Superhero captainAmerica = new Superhero("Steve Rogers");
        Superhero hulk = new Superhero("Bruce Banner", 99);
        Superhero spiderman = new Superhero("Peter Parker", 82, true);
        Superhero thor = new Superhero("Thor Odinson", 95, false, "hammer");

        // To check what values a default constructor gives 
        System.out.println(newbie.characterName);
        System.out.println(newbie.powerLevel);
        System.out.println(newbie.canFly);
        System.out.println(newbie.weapon+"\n");

        System.out.println(captainAmerica.characterName);
        System.out.println(captainAmerica.canFly+"\n");

        System.out.println(hulk.characterName);
        System.out.println(hulk.canFly);
        System.out.println(hulk.weapon+"\n");

        System.out.println(spiderman.characterName);
        System.out.println(spiderman.powerLevel);
        System.out.println(spiderman.canFly);
        System.out.println(spiderman.weapon+"\n");

        System.out.println(thor.characterName);
        System.out.println(thor.powerLevel);
        System.out.println(thor.canFly);
        System.out.println(thor.weapon);
    }
}
