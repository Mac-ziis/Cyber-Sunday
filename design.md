- character
  -constructor() 
  - type -> ['warrior', 'wizard', 'witch', 'robot', 'astromorph']
  - vitals:
    - HP : HP is 0? isDead = true
    - Mana : Mana =0? no spell
    - Stamina: stamina = 0? no run!
   
    - injuries(
        bleed,
        burn,
        disease,
        faint,
        return false
      )

  - getLevel -> add level modifier to character traits
  - initial level: 1 - (
    - HP: +4
    - Mana: +3 
    - Stamina: +5
    - Attack: +2
  )

  - interactive:
    - attack(character)
      (
        rand(roll d8) + attack modifier -> rand(max(8+2))
        d8+2 -> injury based on weapon type -> injure(character)
      )
    - injure(character)
   
  



  ->Test: creates a character of type [], with level = 1, !injuries

- Mobs
  -constructor() 
  - type -> ['slime', 'golem', 'giant', 'goblin', 'mirrorimage']

  - load each enemy on encounter

  -> Game(player, [1,2,3]){
    if(1){
      //init goblin,
      textDialog //ui logic -> angry goblin noises

      1. goblin fights player1
      2. xp 
      
      attack:
        Rolling the Attack Roll:
       1. roll d20
        -> Math.random() -> *20; if 0, misses, else: determine branching later

        attack()
          -> P(hit) -> attack<5, it's a miss, if 1, you damage yourself
          -> attack>5, hit, 20, modifier

        
        
        Determining Damage:
        If the attack hits, the attacker rolls the appropriate damage dice for the weapon or spell used. The damage dice can vary depending on the type of weapon (e.g., 1d6 for a shortsword, 1d8 for a longsword) or spell (e.g., 2d6 for a powerful spell). The result of the damage roll is then modified by any relevant ability modifiers, magical effects, or other bonuses.

        Applying Damage to Hit Points (HP):
        The total damage is subtracted from the target's Hit Points (HP). If a creature's HP drops to 0 or below, it is typically defeated or killed.

        Critical Hits and Misses:
        20 "critical hit." A critical = injury. 

        Conversely, rolling a natural 1 on the d20 is typically considered a "critical miss" or "fumble," and the attack automatically misses, potentially leading to negative consequences


        calculating damage:
          
          Damage Calculation (d8):

        - Roll d8.
        - Add modifiers (ability, bonuses).
        - Total damage = d8 roll + modifiers.

        Note: Different attacks may use different dice (e.g., d6, d10) but follow the same process.


         2. add attack modifiers to damage
        -> attack bonus increments based on player level and difference between player level and mob level

        damage->
        Comparing to Armor Class (AC):
        The Armor Class (AC) is a value that represents how difficult it is to hit a target. It typically ranges from 10 to the mid-20s for most creatures. The total of the d20 roll plus the attack bonus is compared to the target's AC. If the total meets or exceeds the AC, the attack hits. Otherwise, it misses.
              
              
              -> skip battle (steps through until one of goblin, player hp = 0, probability depends on level, encounter1 modifier make skipping impossible //tutorial)

            }
          }
          - mirrorimage: random char


