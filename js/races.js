/* ═══════════════════════════════════════════
   Missing Grid – F1 Puzzle Game
   races.js  —  Race data
   ═══════════════════════════════════════════

   HOW TO ADD A NEW RACE:
   1. Add an entry to the RACES array below.
   2. Each race needs:
      - id        : unique string key  (e.g. 'bahrain_2024')
      - name      : Grand Prix name    (e.g. 'Bahrain Grand Prix')
      - year      : season year        (e.g. 2024)
      - flag      : flag emoji         (e.g. '🇧🇭')
      - hidden    : array of 1-based positions the player must guess
      - drivers   : array of driver objects in FINISH ORDER (P1 first)
        Each driver: { abbr, name, team, color, isDNF? }
        color = team hex colour

   TEAM COLOUR REFERENCE:
     Red Bull Racing Honda  #3671C6
     Ferrari                #E8002D
     Mercedes               #27F4D2
     McLaren Mercedes       #FF8000
     McLaren Renault        #FF8000
     Aston Martin           #229971
     Alpine Renault         #FF87BC
     Williams               #64C4FF
     AlphaTauri Honda       #5E8FAA
     RB                     #6692FF
     Haas Ferrari           #B6BABD
     Alfa Romeo Racing      #C92D4B
     Sauber                 #52E252
     Racing Point           #F596C8
     Renault                #FFD800
═══════════════════════════════════════════ */

const RACES = [

  /* ─────────────────────────────────────────
     QATAR 2023
  ───────────────────────────────────────── */
  {
    id:     'qatar_2023',
    name:   'Qatar Grand Prix',
    year:   2023,
    flag:   '🇶🇦',
    hidden: [1, 3, 5, 7, 10, 12, 15, 17, 20],
    drivers: [
      { abbr:'VER', name:'Verstappen',  team:'Red Bull',      color:'#3671C6' },
      { abbr:'NOR', name:'Norris',      team:'McLaren',       color:'#FF8000' },
      { abbr:'PIA', name:'Piastri',     team:'McLaren',       color:'#FF8000' },
      { abbr:'HAM', name:'Hamilton',    team:'Mercedes',      color:'#27F4D2' },
      { abbr:'RUS', name:'Russell',     team:'Mercedes',      color:'#27F4D2' },
      { abbr:'SAI', name:'Sainz',       team:'Ferrari',       color:'#E8002D' },
      { abbr:'LEC', name:'Leclerc',     team:'Ferrari',       color:'#E8002D' },
      { abbr:'ALO', name:'Alonso',      team:'Aston Martin',  color:'#229971' },
      { abbr:'STR', name:'Stroll',      team:'Aston Martin',  color:'#229971' },
      { abbr:'GAS', name:'Gasly',       team:'Alpine',        color:'#FF87BC' },
      { abbr:'OCO', name:'Ocon',        team:'Alpine',        color:'#FF87BC' },
      { abbr:'TSU', name:'Tsunoda',     team:'AlphaTauri',    color:'#5E8FAA' },
      { abbr:'RIC', name:'Ricciardo',   team:'AlphaTauri',    color:'#5E8FAA' },
      { abbr:'HUL', name:'Hulkenberg',  team:'Haas',          color:'#B6BABD' },
      { abbr:'MAG', name:'Magnussen',   team:'Haas',          color:'#B6BABD' },
      { abbr:'BOT', name:'Bottas',      team:'Alfa Romeo',    color:'#C92D4B' },
      { abbr:'ZHO', name:'Zhou',        team:'Alfa Romeo',    color:'#C92D4B' },
      { abbr:'ALB', name:'Albon',       team:'Williams',      color:'#64C4FF' },
      { abbr:'SAR', name:'Sargeant',    team:'Williams',      color:'#64C4FF' },
      { abbr:'PER', name:'Perez',       team:'Red Bull',      color:'#3671C6' },
    ]
  },

  /* ─────────────────────────────────────────
     BAHRAIN 2024
  ───────────────────────────────────────── */
  {
    id:     'bahrain_2024',
    name:   'Bahrain Grand Prix',
    year:   2024,
    flag:   '🇧🇭',
    hidden: [1, 4, 7, 10, 13, 16, 19],
    drivers: [
      { abbr:'VER', name:'Verstappen',  team:'Red Bull',      color:'#3671C6' },
      { abbr:'SAI', name:'Sainz',       team:'Ferrari',       color:'#E8002D' },
      { abbr:'LEC', name:'Leclerc',     team:'Ferrari',       color:'#E8002D' },
      { abbr:'PER', name:'Perez',       team:'Red Bull',      color:'#3671C6' },
      { abbr:'HAM', name:'Hamilton',    team:'Mercedes',      color:'#27F4D2' },
      { abbr:'ALO', name:'Alonso',      team:'Aston Martin',  color:'#229971' },
      { abbr:'NOR', name:'Norris',      team:'McLaren',       color:'#FF8000' },
      { abbr:'PIA', name:'Piastri',     team:'McLaren',       color:'#FF8000' },
      { abbr:'RUS', name:'Russell',     team:'Mercedes',      color:'#27F4D2' },
      { abbr:'STR', name:'Stroll',      team:'Aston Martin',  color:'#229971' },
      { abbr:'TSU', name:'Tsunoda',     team:'RB',            color:'#6692FF' },
      { abbr:'ZHO', name:'Zhou',        team:'Sauber',        color:'#52E252' },
      { abbr:'HUL', name:'Hulkenberg',  team:'Haas',          color:'#B6BABD' },
      { abbr:'MAG', name:'Magnussen',   team:'Haas',          color:'#B6BABD' },
      { abbr:'SAR', name:'Sargeant',    team:'Williams',      color:'#64C4FF' },
      { abbr:'ALB', name:'Albon',       team:'Williams',      color:'#64C4FF' },
      { abbr:'BOT', name:'Bottas',      team:'Sauber',        color:'#52E252' },
      { abbr:'GAS', name:'Gasly',       team:'Alpine',        color:'#FF87BC' },
      { abbr:'OCO', name:'Ocon',        team:'Alpine',        color:'#FF87BC', isDNF: true },
      { abbr:'RIC', name:'Ricciardo',   team:'RB',            color:'#6692FF', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ABU DHABI 2021
  ───────────────────────────────────────── */
  {
    id:     'abu_dhabi_2021',
    name:   'Abu Dhabi Grand Prix',
    year:   2021,
    flag:   '🇦🇪',
    hidden: [1, 3, 5, 8, 10, 13, 15],
    drivers: [
      { abbr:'VER', name:'Verstappen',   team:'Red Bull Racing Honda',  color:'#3671C6' },
      { abbr:'HAM', name:'Hamilton',     team:'Mercedes',               color:'#27F4D2' },
      { abbr:'SAI', name:'Sainz',        team:'Ferrari',                color:'#E8002D' },
      { abbr:'TSU', name:'Tsunoda',      team:'AlphaTauri Honda',       color:'#5E8FAA' },
      { abbr:'GAS', name:'Gasly',        team:'AlphaTauri Honda',       color:'#5E8FAA' },
      { abbr:'BOT', name:'Bottas',       team:'Mercedes',               color:'#27F4D2' },
      { abbr:'NOR', name:'Norris',       team:'McLaren Mercedes',       color:'#FF8000' },
      { abbr:'ALO', name:'Alonso',       team:'Alpine Renault',         color:'#FFD800' },
      { abbr:'OCO', name:'Ocon',         team:'Alpine Renault',         color:'#FFD800' },
      { abbr:'LEC', name:'Leclerc',      team:'Ferrari',                color:'#E8002D' },
      { abbr:'VET', name:'Vettel',       team:'Aston Martin Mercedes',  color:'#229971' },
      { abbr:'RIC', name:'Ricciardo',    team:'McLaren Mercedes',       color:'#FF8000' },
      { abbr:'STR', name:'Stroll',       team:'Aston Martin Mercedes',  color:'#229971' },
      { abbr:'MSC', name:'Schumacher',   team:'Haas Ferrari',           color:'#B6BABD' },
      { abbr:'PER', name:'Perez',        team:'Red Bull Racing Honda',  color:'#3671C6', isDNF: true },
      { abbr:'LAT', name:'Latifi',       team:'Williams Mercedes',      color:'#64C4FF', isDNF: true },
      { abbr:'GIO', name:'Giovinazzi',   team:'Alfa Romeo Racing',      color:'#C92D4B', isDNF: true },
      { abbr:'RUS', name:'Russell',      team:'Williams Mercedes',      color:'#64C4FF', isDNF: true },
      { abbr:'RAI', name:'Räikkönen',    team:'Alfa Romeo Racing',      color:'#C92D4B', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     SÃO PAULO (BRAZIL) 2021
  ───────────────────────────────────────── */
  {
    id:     'sao_paulo_2021',
    name:   'São Paulo Grand Prix',
    year:   2021,
    flag:   '🇧🇷',
    hidden: [1, 4, 6, 9, 11, 14, 17],
    drivers: [
      { abbr:'HAM', name:'Hamilton',     team:'Mercedes',               color:'#27F4D2' },
      { abbr:'VER', name:'Verstappen',   team:'Red Bull Racing Honda',  color:'#3671C6' },
      { abbr:'BOT', name:'Bottas',       team:'Mercedes',               color:'#27F4D2' },
      { abbr:'PER', name:'Perez',        team:'Red Bull Racing Honda',  color:'#3671C6' },
      { abbr:'LEC', name:'Leclerc',      team:'Ferrari',                color:'#E8002D' },
      { abbr:'SAI', name:'Sainz',        team:'Ferrari',                color:'#E8002D' },
      { abbr:'GAS', name:'Gasly',        team:'AlphaTauri Honda',       color:'#5E8FAA' },
      { abbr:'OCO', name:'Ocon',         team:'Alpine Renault',         color:'#FFD800' },
      { abbr:'ALO', name:'Alonso',       team:'Alpine Renault',         color:'#FFD800' },
      { abbr:'NOR', name:'Norris',       team:'McLaren Mercedes',       color:'#FF8000' },
      { abbr:'VET', name:'Vettel',       team:'Aston Martin Mercedes',  color:'#229971' },
      { abbr:'RAI', name:'Räikkönen',    team:'Alfa Romeo Racing',      color:'#C92D4B' },
      { abbr:'RUS', name:'Russell',      team:'Williams Mercedes',      color:'#64C4FF' },
      { abbr:'GIO', name:'Giovinazzi',   team:'Alfa Romeo Racing',      color:'#C92D4B' },
      { abbr:'TSU', name:'Tsunoda',      team:'AlphaTauri Honda',       color:'#5E8FAA' },
      { abbr:'LAT', name:'Latifi',       team:'Williams Mercedes',      color:'#64C4FF' },
      { abbr:'MAZ', name:'Mazepin',      team:'Haas Ferrari',           color:'#B6BABD' },
      { abbr:'MSC', name:'Schumacher',   team:'Haas Ferrari',           color:'#B6BABD' },
      { abbr:'RIC', name:'Ricciardo',    team:'McLaren Mercedes',       color:'#FF8000', isDNF: true },
      { abbr:'STR', name:'Stroll',       team:'Aston Martin Mercedes',  color:'#229971', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ITALY (MONZA) 2021
  ───────────────────────────────────────── */
  {
    id:     'monza_2021',
    name:   'Italian Grand Prix',
    year:   2021,
    flag:   '🇮🇹',
    hidden: [1, 3, 5, 8, 10, 12, 15],
    drivers: [
      { abbr:'RIC', name:'Ricciardo',    team:'McLaren Mercedes',       color:'#FF8000' },
      { abbr:'NOR', name:'Norris',       team:'McLaren Mercedes',       color:'#FF8000' },
      { abbr:'BOT', name:'Bottas',       team:'Mercedes',               color:'#27F4D2' },
      { abbr:'LEC', name:'Leclerc',      team:'Ferrari',                color:'#E8002D' },
      { abbr:'PER', name:'Perez',        team:'Red Bull Racing Honda',  color:'#3671C6' },
      { abbr:'SAI', name:'Sainz',        team:'Ferrari',                color:'#E8002D' },
      { abbr:'STR', name:'Stroll',       team:'Aston Martin Mercedes',  color:'#229971' },
      { abbr:'ALO', name:'Alonso',       team:'Alpine Renault',         color:'#FFD800' },
      { abbr:'RUS', name:'Russell',      team:'Williams Mercedes',      color:'#64C4FF' },
      { abbr:'OCO', name:'Ocon',         team:'Alpine Renault',         color:'#FFD800' },
      { abbr:'LAT', name:'Latifi',       team:'Williams Mercedes',      color:'#64C4FF' },
      { abbr:'VET', name:'Vettel',       team:'Aston Martin Mercedes',  color:'#229971' },
      { abbr:'GIO', name:'Giovinazzi',   team:'Alfa Romeo Racing',      color:'#C92D4B' },
      { abbr:'KUB', name:'Kubica',       team:'Alfa Romeo Racing',      color:'#C92D4B' },
      { abbr:'MSC', name:'Schumacher',   team:'Haas Ferrari',           color:'#B6BABD' },
      { abbr:'MAZ', name:'Mazepin',      team:'Haas Ferrari',           color:'#B6BABD', isDNF: true },
      { abbr:'HAM', name:'Hamilton',     team:'Mercedes',               color:'#27F4D2', isDNF: true },
      { abbr:'VER', name:'Verstappen',   team:'Red Bull Racing Honda',  color:'#3671C6', isDNF: true },
      { abbr:'GAS', name:'Gasly',        team:'AlphaTauri Honda',       color:'#5E8FAA', isDNF: true },
      { abbr:'TSU', name:'Tsunoda',      team:'AlphaTauri Honda',       color:'#5E8FAA', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     HUNGARY 2021
  ───────────────────────────────────────── */
  {
    id:     'hungary_2021',
    name:   'Hungarian Grand Prix',
    year:   2021,
    flag:   '🇭🇺',
    hidden: [1, 3, 5, 7, 9, 11, 13],
    drivers: [
      { abbr:'OCO', name:'Ocon',         team:'Alpine Renault',         color:'#FFD800' },
      { abbr:'HAM', name:'Hamilton',     team:'Mercedes',               color:'#27F4D2' },
      { abbr:'SAI', name:'Sainz',        team:'Ferrari',                color:'#E8002D' },
      { abbr:'ALO', name:'Alonso',       team:'Alpine Renault',         color:'#FFD800' },
      { abbr:'GAS', name:'Gasly',        team:'AlphaTauri Honda',       color:'#5E8FAA' },
      { abbr:'TSU', name:'Tsunoda',      team:'AlphaTauri Honda',       color:'#5E8FAA' },
      { abbr:'LAT', name:'Latifi',       team:'Williams Mercedes',      color:'#64C4FF' },
      { abbr:'RUS', name:'Russell',      team:'Williams Mercedes',      color:'#64C4FF' },
      { abbr:'VER', name:'Verstappen',   team:'Red Bull Racing Honda',  color:'#3671C6' },
      { abbr:'RAI', name:'Räikkönen',    team:'Alfa Romeo Racing',      color:'#C92D4B' },
      { abbr:'RIC', name:'Ricciardo',    team:'McLaren Mercedes',       color:'#FF8000' },
      { abbr:'MSC', name:'Schumacher',   team:'Haas Ferrari',           color:'#B6BABD' },
      { abbr:'GIO', name:'Giovinazzi',   team:'Alfa Romeo Racing',      color:'#C92D4B' },
      { abbr:'MAZ', name:'Mazepin',      team:'Haas Ferrari',           color:'#B6BABD', isDNF: true },
      { abbr:'NOR', name:'Norris',       team:'McLaren Mercedes',       color:'#FF8000', isDNF: true },
      { abbr:'BOT', name:'Bottas',       team:'Mercedes',               color:'#27F4D2', isDNF: true },
      { abbr:'PER', name:'Perez',        team:'Red Bull Racing Honda',  color:'#3671C6', isDNF: true },
      { abbr:'LEC', name:'Leclerc',      team:'Ferrari',                color:'#E8002D', isDNF: true },
      { abbr:'STR', name:'Stroll',       team:'Aston Martin Mercedes',  color:'#229971', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ITALY (MONZA) 2020
  ───────────────────────────────────────── */
  {
    id:     'monza_2020',
    name:   'Italian Grand Prix',
    year:   2020,
    flag:   '🇮🇹',
    hidden: [1, 3, 5, 7, 9, 11, 14],
    drivers: [
      { abbr:'GAS', name:'Gasly',        team:'AlphaTauri Honda',       color:'#5E8FAA' },
      { abbr:'SAI', name:'Sainz',        team:'McLaren Renault',        color:'#FF8000' },
      { abbr:'STR', name:'Stroll',       team:'Racing Point BWT',       color:'#F596C8' },
      { abbr:'NOR', name:'Norris',       team:'McLaren Renault',        color:'#FF8000' },
      { abbr:'BOT', name:'Bottas',       team:'Mercedes',               color:'#27F4D2' },
      { abbr:'RIC', name:'Ricciardo',    team:'Renault',                color:'#FFD800' },
      { abbr:'HAM', name:'Hamilton',     team:'Mercedes',               color:'#27F4D2' },
      { abbr:'OCO', name:'Ocon',         team:'Renault',                color:'#FFD800' },
      { abbr:'KVY', name:'Kvyat',        team:'AlphaTauri Honda',       color:'#5E8FAA' },
      { abbr:'PER', name:'Perez',        team:'Racing Point BWT',       color:'#F596C8' },
      { abbr:'LAT', name:'Latifi',       team:'Williams Mercedes',      color:'#64C4FF' },
      { abbr:'GRO', name:'Grosjean',     team:'Haas Ferrari',           color:'#B6BABD' },
      { abbr:'RAI', name:'Räikkönen',    team:'Alfa Romeo Racing',      color:'#C92D4B' },
      { abbr:'RUS', name:'Russell',      team:'Williams Mercedes',      color:'#64C4FF' },
      { abbr:'ALB', name:'Albon',        team:'Red Bull Racing Honda',  color:'#3671C6' },
      { abbr:'GIO', name:'Giovinazzi',   team:'Alfa Romeo Racing',      color:'#C92D4B' },
      { abbr:'VER', name:'Verstappen',   team:'Red Bull Racing Honda',  color:'#3671C6', isDNF: true },
      { abbr:'LEC', name:'Leclerc',      team:'Ferrari',                color:'#E8002D', isDNF: true },
      { abbr:'MAG', name:'Magnussen',    team:'Haas Ferrari',           color:'#B6BABD', isDNF: true },
      { abbr:'VET', name:'Vettel',       team:'Ferrari',                color:'#E8002D', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     SAKHIR 2020
  ───────────────────────────────────────── */
  {
    id:     'sakhir_2020',
    name:   'Sakhir Grand Prix',
    year:   2020,
    flag:   '🇧🇭',
    hidden: [1, 3, 5, 7, 9, 12, 15],
    drivers: [
      { abbr:'PER', name:'Perez',        team:'Racing Point BWT',       color:'#F596C8' },
      { abbr:'OCO', name:'Ocon',         team:'Renault',                color:'#FFD800' },
      { abbr:'STR', name:'Stroll',       team:'Racing Point BWT',       color:'#F596C8' },
      { abbr:'SAI', name:'Sainz',        team:'McLaren Renault',        color:'#FF8000' },
      { abbr:'RIC', name:'Ricciardo',    team:'Renault',                color:'#FFD800' },
      { abbr:'ALB', name:'Albon',        team:'Red Bull Racing Honda',  color:'#3671C6' },
      { abbr:'KVY', name:'Kvyat',        team:'AlphaTauri Honda',       color:'#5E8FAA' },
      { abbr:'BOT', name:'Bottas',       team:'Mercedes',               color:'#27F4D2' },
      { abbr:'RUS', name:'Russell',      team:'Mercedes',               color:'#27F4D2' },
      { abbr:'NOR', name:'Norris',       team:'McLaren Renault',        color:'#FF8000' },
      { abbr:'GAS', name:'Gasly',        team:'AlphaTauri Honda',       color:'#5E8FAA' },
      { abbr:'VET', name:'Vettel',       team:'Ferrari',                color:'#E8002D' },
      { abbr:'GIO', name:'Giovinazzi',   team:'Alfa Romeo Racing',      color:'#C92D4B' },
      { abbr:'RAI', name:'Räikkönen',    team:'Alfa Romeo Racing',      color:'#C92D4B' },
      { abbr:'MAG', name:'Magnussen',    team:'Haas Ferrari',           color:'#B6BABD' },
      { abbr:'AIT', name:'Aitken',       team:'Williams Mercedes',      color:'#64C4FF' },
      { abbr:'FIT', name:'Fittipaldi',   team:'Haas Ferrari',           color:'#B6BABD' },
      { abbr:'LAT', name:'Latifi',       team:'Williams Mercedes',      color:'#64C4FF', isDNF: true },
      { abbr:'VER', name:'Verstappen',   team:'Red Bull Racing Honda',  color:'#3671C6', isDNF: true },
      { abbr:'LEC', name:'Leclerc',      team:'Ferrari',                color:'#E8002D', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ADD MORE RACES HERE — copy the block above
     and fill in the data.
  ───────────────────────────────────────── */


  /* ─────────────────────────────────────────
     FRANCE (DIJON) 1979
  ───────────────────────────────────────── */
  {
    id:     'france_1979',
    name:   'French Grand Prix',
    year:   1979,
    flag:   '🇫🇷',
    hidden: [1, 3, 5, 7, 10, 13, 16],
    drivers: [
      { abbr:'JAB', name:'Jabouille',      team:'Renault',          color:'#FFD800' },
      { abbr:'VIL', name:'Villeneuve',     team:'Ferrari',          color:'#E8002D' },
      { abbr:'ARN', name:'Arnoux',         team:'Renault',          color:'#FFD800' },
      { abbr:'JON', name:'Jones',          team:'Williams Ford',    color:'#64C4FF' },
      { abbr:'JAR', name:'Jarier',         team:'Tyrrell Ford',     color:'#5E8FAA' },
      { abbr:'REG', name:'Regazzoni',      team:'Williams Ford',    color:'#64C4FF' },
      { abbr:'SCH', name:'Scheckter',      team:'Ferrari',          color:'#E8002D' },
      { abbr:'LAF', name:'Laffite',        team:'Ligier Ford',      color:'#888888' },
      { abbr:'ROS', name:'Rosberg',        team:'Wolf Ford',        color:'#888888' },
      { abbr:'TAM', name:'Tambay',         team:'McLaren Ford',     color:'#FF8000' },
      { abbr:'WAT', name:'Watson',         team:'McLaren Ford',     color:'#FF8000' },
      { abbr:'REB', name:'Rebaque',        team:'Lotus Ford',       color:'#000000' },
      { abbr:'REU', name:'Reutemann',      team:'Lotus Ford',       color:'#000000' },
      { abbr:'PAT', name:'Patrese',        team:'Arrows Ford',      color:'#888888' },
      { abbr:'MAS', name:'Mass',           team:'Arrows Ford',      color:'#888888' },
      { abbr:'DEA', name:'de Angelis',     team:'Shadow Ford',      color:'#888888' },
      { abbr:'GIA', name:'Giacomelli',     team:'Alfa Romeo',       color:'#C92D4B' },
      { abbr:'LAM', name:'Lammers',        team:'Shadow Ford',      color:'#888888' },
      { abbr:'PIR', name:'Pironi',         team:'Tyrrell Ford',     color:'#5E8FAA', isDNF: true },
      { abbr:'FIT', name:'Fittipaldi',     team:'Fittipaldi Ford',  color:'#888888', isDNF: true },
      { abbr:'PIQ', name:'Piquet',         team:'Brabham Alfa Romeo',color:'#888888', isDNF: true },
      { abbr:'AND', name:'Andretti',       team:'Lotus Ford',       color:'#000000', isDNF: true },
      { abbr:'ICK', name:'Ickx',           team:'Ligier Ford',      color:'#888888', isDNF: true },
      { abbr:'LAU', name:'Lauda',          team:'Brabham Alfa Romeo',color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     JAPAN 1976
  ───────────────────────────────────────── */
  {
    id:     'japan_1976',
    name:   'Japanese Grand Prix',
    year:   1976,
    flag:   '🇯🇵',
    hidden: [1, 3, 5, 8, 11],
    drivers: [
      { abbr:'AND', name:'Andretti',       team:'Lotus Ford',       color:'#000000' },
      { abbr:'DEP', name:'Depailler',      team:'Tyrrell Ford',     color:'#5E8FAA' },
      { abbr:'HUN', name:'Hunt',           team:'McLaren Ford',     color:'#FF8000' },
      { abbr:'JON', name:'Jones',          team:'Surtees Ford',     color:'#888888' },
      { abbr:'REG', name:'Regazzoni',      team:'Ferrari',          color:'#E8002D' },
      { abbr:'NIL', name:'Nilsson',        team:'Lotus Ford',       color:'#000000' },
      { abbr:'LAF', name:'Laffite',        team:'Ligier Matra',     color:'#888888' },
      { abbr:'ERT', name:'Ertl',           team:'Hesketh Ford',     color:'#888888' },
      { abbr:'TAK', name:'Takahara',       team:'Surtees Ford',     color:'#888888' },
      { abbr:'JAR', name:'Jarier',         team:'Shadow Ford',      color:'#888888' },
      { abbr:'HAS', name:'Hasemi',         team:'Kojima Ford',      color:'#888888' },
      { abbr:'SCH', name:'Scheckter',      team:'Tyrrell Ford',     color:'#5E8FAA', isDNF: true },
      { abbr:'BIN', name:'Binder',         team:'Wolf-Williams',    color:'#64C4FF', isDNF: true },
      { abbr:'PRY', name:'Pryce',          team:'Shadow Ford',      color:'#888888', isDNF: true },
      { abbr:'BRA', name:'Brambilla',      team:'March Ford',       color:'#888888', isDNF: true },
      { abbr:'STU', name:'Stuck',          team:'March Ford',       color:'#888888', isDNF: true },
      { abbr:'MAS', name:'Mass',           team:'McLaren Ford',     color:'#FF8000', isDNF: true },
      { abbr:'WAT', name:'Watson',         team:'Penske Ford',      color:'#888888', isDNF: true },
      { abbr:'HOS', name:'Hoshino',        team:'Tyrrell Ford',     color:'#5E8FAA', isDNF: true },
      { abbr:'MER', name:'Merzario',       team:'Wolf-Williams',    color:'#64C4FF', isDNF: true },
      { abbr:'FIT', name:'Fittipaldi',     team:'Fittipaldi Ford',  color:'#888888', isDNF: true },
      { abbr:'PAC', name:'Pace',           team:'Brabham Alfa Romeo',color:'#888888', isDNF: true },
      { abbr:'LAU', name:'Lauda',          team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'PER', name:'Perkins',        team:'Brabham Alfa Romeo',color:'#888888', isDNF: true },
      { abbr:'PET', name:'Peterson',       team:'March Ford',       color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     AUSTRALIA 1994
  ───────────────────────────────────────── */
  {
    id:     'australia_1994',
    name:   'Australian Grand Prix',
    year:   1994,
    flag:   '🇦🇺',
    hidden: [1, 3, 5, 7, 10, 13],
    drivers: [
      { abbr:'MAN', name:'Mansell',        team:'Williams Renault', color:'#64C4FF' },
      { abbr:'BER', name:'Berger',         team:'Ferrari',          color:'#E8002D' },
      { abbr:'BRU', name:'Brundle',        team:'McLaren Peugeot',  color:'#FF8000' },
      { abbr:'BAR', name:'Barrichello',    team:'Jordan Hart',      color:'#888888' },
      { abbr:'PAN', name:'Panis',          team:'Ligier Renault',   color:'#888888' },
      { abbr:'ALE', name:'Alesi',          team:'Ferrari',          color:'#E8002D' },
      { abbr:'FRE', name:'Frentzen',       team:'Sauber Mercedes',  color:'#27F4D2' },
      { abbr:'CFI', name:'C.Fittipaldi',   team:'Footwork Ford',    color:'#888888' },
      { abbr:'MAR', name:'Martini',        team:'Minardi Ford',     color:'#888888' },
      { abbr:'JAR', name:'Jarvilehto',     team:'Sauber Mercedes',  color:'#27F4D2' },
      { abbr:'LAG', name:'Lagorce',        team:'Ligier Renault',   color:'#888888' },
      { abbr:'HAK', name:'Hakkinen',       team:'McLaren Peugeot',  color:'#FF8000', isDNF: true },
      { abbr:'ALB', name:'Alboreto',       team:'Minardi Ford',     color:'#888888', isDNF: true },
      { abbr:'BLU', name:'Blundell',       team:'Tyrrell Yamaha',   color:'#888888', isDNF: true },
      { abbr:'DEL', name:'Deletraz',       team:'Larrousse Ford',   color:'#888888', isDNF: true },
      { abbr:'SAL', name:'Salo',           team:'Lotus Mugen Honda',color:'#000000', isDNF: true },
      { abbr:'DBR', name:'D.Brabham',      team:'Simtek Ford',      color:'#888888', isDNF: true },
      { abbr:'ZAN', name:'Zanardi',        team:'Lotus Mugen Honda',color:'#000000', isDNF: true },
      { abbr:'MSC', name:'Schumacher',     team:'Benetton Ford',    color:'#27F4D2', isDNF: true },
      { abbr:'HIL', name:'Hill',           team:'Williams Renault', color:'#64C4FF', isDNF: true },
      { abbr:'SCH', name:'Schiattarella',  team:'Simtek Ford',      color:'#888888', isDNF: true },
      { abbr:'KAT', name:'Katayama',       team:'Tyrrell Yamaha',   color:'#888888', isDNF: true },
      { abbr:'NOD', name:'Noda',           team:'Larrousse Ford',   color:'#888888', isDNF: true },
      { abbr:'MOR', name:'Morbidelli',     team:'Footwork Ford',    color:'#888888', isDNF: true },
      { abbr:'IRV', name:'Irvine',         team:'Jordan Hart',      color:'#888888', isDNF: true },
      { abbr:'HER', name:'Herbert',        team:'Benetton Ford',    color:'#27F4D2', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     BRAZIL 2008
  ───────────────────────────────────────── */
  {
    id:     'brazil_2008',
    name:   'Brazilian Grand Prix',
    year:   2008,
    flag:   '🇧🇷',
    hidden: [1, 3, 5, 8, 11, 14],
    drivers: [
      { abbr:'MAS', name:'Massa',          team:'Ferrari',          color:'#E8002D' },
      { abbr:'ALO', name:'Alonso',         team:'Renault',          color:'#FFD800' },
      { abbr:'RAI', name:'Räikkönen',      team:'Ferrari',          color:'#E8002D' },
      { abbr:'VET', name:'Vettel',         team:'STR Ferrari',      color:'#5E8FAA' },
      { abbr:'HAM', name:'Hamilton',       team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'GLO', name:'Glock',          team:'Toyota',           color:'#888888' },
      { abbr:'KOV', name:'Kovalainen',     team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'TRU', name:'Trulli',         team:'Toyota',           color:'#888888' },
      { abbr:'WEB', name:'Webber',         team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'HEI', name:'Heidfeld',       team:'Sauber BMW',       color:'#888888' },
      { abbr:'KUB', name:'Kubica',         team:'Sauber BMW',       color:'#888888' },
      { abbr:'ROS', name:'Rosberg',        team:'Williams Toyota',  color:'#64C4FF' },
      { abbr:'BUT', name:'Button',         team:'Honda',            color:'#888888' },
      { abbr:'BOU', name:'Bourdais',       team:'STR Ferrari',      color:'#5E8FAA' },
      { abbr:'BAR', name:'Barrichello',    team:'Honda',            color:'#888888' },
      { abbr:'SUT', name:'Sutil',          team:'Force India Ferrari',color:'#FF87BC' },
      { abbr:'NAK', name:'Nakajima',       team:'Williams Toyota',  color:'#64C4FF' },
      { abbr:'FIS', name:'Fisichella',     team:'Force India Ferrari',color:'#FF87BC' },
      { abbr:'PIQ', name:'Piquet',         team:'Renault',          color:'#FFD800', isDNF: true },
      { abbr:'COU', name:'Coulthard',      team:'Red Bull Renault', color:'#3671C6', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ABU DHABI 2021 (Sprint Weekend)
  ───────────────────────────────────────── */
  {
    id:     'abu_dhabi_2021b',
    name:   'Abu Dhabi Grand Prix',
    year:   2021,
    flag:   '🇦🇪',
    hidden: [1, 3, 5, 7, 10, 13, 15],
    drivers: [
      { abbr:'VER', name:'Verstappen',     team:'Red Bull Racing Honda', color:'#3671C6' },
      { abbr:'HAM', name:'Hamilton',       team:'Mercedes',              color:'#27F4D2' },
      { abbr:'SAI', name:'Sainz',          team:'Ferrari',               color:'#E8002D' },
      { abbr:'TSU', name:'Tsunoda',        team:'AlphaTauri Honda',      color:'#5E8FAA' },
      { abbr:'GAS', name:'Gasly',          team:'AlphaTauri Honda',      color:'#5E8FAA' },
      { abbr:'BOT', name:'Bottas',         team:'Mercedes',              color:'#27F4D2' },
      { abbr:'NOR', name:'Norris',         team:'McLaren Mercedes',      color:'#FF8000' },
      { abbr:'ALO', name:'Alonso',         team:'Alpine Renault',        color:'#FF87BC' },
      { abbr:'OCO', name:'Ocon',           team:'Alpine Renault',        color:'#FF87BC' },
      { abbr:'LEC', name:'Leclerc',        team:'Ferrari',               color:'#E8002D' },
      { abbr:'VET', name:'Vettel',         team:'Aston Martin Mercedes', color:'#229971' },
      { abbr:'RIC', name:'Ricciardo',      team:'McLaren Mercedes',      color:'#FF8000' },
      { abbr:'STR', name:'Stroll',         team:'Aston Martin Mercedes', color:'#229971' },
      { abbr:'MSC', name:'M.Schumacher',   team:'Haas Ferrari',          color:'#B6BABD' },
      { abbr:'PER', name:'Perez',          team:'Red Bull Racing Honda', color:'#3671C6', isDNF: true },
      { abbr:'LAT', name:'Latifi',         team:'Williams Mercedes',     color:'#64C4FF', isDNF: true },
      { abbr:'GIO', name:'Giovinazzi',     team:'Alfa Romeo Racing',     color:'#C92D4B', isDNF: true },
      { abbr:'RUS', name:'Russell',        team:'Williams Mercedes',     color:'#64C4FF', isDNF: true },
      { abbr:'RAI', name:'Räikkönen',      team:'Alfa Romeo Racing',     color:'#C92D4B', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     MONACO 1984
  ───────────────────────────────────────── */
  {
    id:     'monaco_1984',
    name:   'Monaco Grand Prix',
    year:   1984,
    flag:   '🇲🇨',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'PRO', name:'Prost',          team:'McLaren TAG',      color:'#FF8000' },
      { abbr:'SEN', name:'Senna',          team:'Toleman Hart',     color:'#888888' },
      { abbr:'ARN', name:'Arnoux',         team:'Ferrari',          color:'#E8002D' },
      { abbr:'ROS', name:'Rosberg',        team:'Williams Honda',   color:'#64C4FF' },
      { abbr:'DEA', name:'de Angelis',     team:'Lotus Renault',    color:'#000000' },
      { abbr:'ALB', name:'Alboreto',       team:'Ferrari',          color:'#E8002D' },
      { abbr:'GHI', name:'Ghinzani',       team:'Osella Alfa Romeo',color:'#888888' },
      { abbr:'LAF', name:'Laffite',        team:'Williams Honda',   color:'#64C4FF' },
      { abbr:'PAT', name:'Patrese',        team:'Alfa Romeo',       color:'#C92D4B', isDNF: true },
      { abbr:'LAU', name:'Lauda',          team:'McLaren TAG',      color:'#FF8000', isDNF: true },
      { abbr:'WIN', name:'Winkelhock',     team:'ATS BMW',          color:'#888888', isDNF: true },
      { abbr:'MAN', name:'Mansell',        team:'Lotus Renault',    color:'#000000', isDNF: true },
      { abbr:'PIQ', name:'Piquet',         team:'Brabham BMW',      color:'#888888', isDNF: true },
      { abbr:'HES', name:'Hesnault',       team:'Ligier Renault',   color:'#888888', isDNF: true },
      { abbr:'FAB', name:'Fabi',           team:'Brabham BMW',      color:'#888888', isDNF: true },
      { abbr:'CEC', name:'Cecotto',        team:'Toleman Hart',     color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     BELGIUM 1998
  ───────────────────────────────────────── */
  {
    id:     'belgium_1998',
    name:   'Belgian Grand Prix',
    year:   1998,
    flag:   '🇧🇪',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'HIL', name:'Hill',           team:'Jordan Mugen Honda',color:'#888888' },
      { abbr:'RSC', name:'R.Schumacher',   team:'Jordan Mugen Honda',color:'#888888' },
      { abbr:'ALE', name:'Alesi',          team:'Sauber Petronas',  color:'#888888' },
      { abbr:'FRE', name:'Frentzen',       team:'Williams Mecachrome',color:'#64C4FF' },
      { abbr:'DIN', name:'Diniz',          team:'Arrows',           color:'#888888' },
      { abbr:'TRU', name:'Trulli',         team:'Prost Peugeot',    color:'#888888' },
      { abbr:'COU', name:'Coulthard',      team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'NAK', name:'Nakano',         team:'Minardi Ford',     color:'#888888' },
      { abbr:'FIS', name:'Fisichella',     team:'Benetton Playlife',color:'#27F4D2', isDNF: true },
      { abbr:'MSC', name:'M.Schumacher',   team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'IRV', name:'Irvine',         team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'TUE', name:'Tuero',          team:'Minardi Ford',     color:'#888888', isDNF: true },
      { abbr:'VIL', name:'Villeneuve',     team:'Williams Mecachrome',color:'#64C4FF', isDNF: true },
      { abbr:'TAK', name:'Takagi',         team:'Tyrrell Ford',     color:'#5E8FAA', isDNF: true },
      { abbr:'VER', name:'Verstappen',     team:'Stewart Ford',     color:'#888888', isDNF: true },
      { abbr:'HAK', name:'Hakkinen',       team:'McLaren Mercedes', color:'#27F4D2', isDNF: true },
      { abbr:'WUR', name:'Wurz',           team:'Benetton Playlife',color:'#27F4D2', isDNF: true },
      { abbr:'HER', name:'Herbert',        team:'Sauber Petronas',  color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     BELGIUM 2000
  ───────────────────────────────────────── */
  {
    id:     'belgium_2000',
    name:   'Belgian Grand Prix',
    year:   2000,
    flag:   '🇧🇪',
    hidden: [1, 3, 5, 8, 11],
    drivers: [
      { abbr:'HAK', name:'Hakkinen',       team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'MSC', name:'M.Schumacher',   team:'Ferrari',          color:'#E8002D' },
      { abbr:'RSC', name:'R.Schumacher',   team:'Williams BMW',     color:'#64C4FF' },
      { abbr:'COU', name:'Coulthard',      team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'BUT', name:'Button',         team:'Williams BMW',     color:'#64C4FF' },
      { abbr:'FRE', name:'Frentzen',       team:'Jordan Mugen Honda',color:'#888888' },
      { abbr:'VIL', name:'Villeneuve',     team:'BAR Honda',        color:'#888888' },
      { abbr:'HER', name:'Herbert',        team:'Jaguar Cosworth',  color:'#229971' },
      { abbr:'SAL', name:'Salo',           team:'Sauber Petronas',  color:'#888888' },
      { abbr:'IRV', name:'Irvine',         team:'Jaguar Cosworth',  color:'#229971' },
      { abbr:'DIN', name:'Diniz',          team:'Sauber Petronas',  color:'#888888' },
      { abbr:'ZON', name:'Zonta',          team:'BAR Honda',        color:'#888888' },
      { abbr:'WUR', name:'Wurz',           team:'Benetton Playlife',color:'#27F4D2' },
      { abbr:'GEN', name:'Gene',           team:'Minardi Fondmetal',color:'#888888' },
      { abbr:'VER', name:'Verstappen',     team:'Arrows Supertec',  color:'#888888' },
      { abbr:'ROZ', name:'de la Rosa',     team:'Arrows Supertec',  color:'#888888' },
      { abbr:'MAZ', name:'Mazzacane',      team:'Minardi Fondmetal',color:'#888888' },
      { abbr:'BAR', name:'Barrichello',    team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'ALE', name:'Alesi',          team:'Prost Peugeot',    color:'#888888', isDNF: true },
      { abbr:'HEI', name:'Heidfeld',       team:'Prost Peugeot',    color:'#888888', isDNF: true },
      { abbr:'FIS', name:'Fisichella',     team:'Benetton Playlife',color:'#27F4D2', isDNF: true },
      { abbr:'TRU', name:'Trulli',         team:'Jordan Mugen Honda',color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ITALY (MONZA) 1967
  ───────────────────────────────────────── */
  {
    id:     'monza_1967',
    name:   'Italian Grand Prix',
    year:   1967,
    flag:   '🇮🇹',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'SUR', name:'Surtees',        team:'Honda',            color:'#888888' },
      { abbr:'BRA', name:'Brabham',        team:'Brabham Repco',    color:'#888888' },
      { abbr:'CLA', name:'Clark',          team:'Lotus Ford',       color:'#000000' },
      { abbr:'RIN', name:'Rindt',          team:'Cooper Maserati',  color:'#888888' },
      { abbr:'SPE', name:'Spence',         team:'BRM',              color:'#888888' },
      { abbr:'ICK', name:'Ickx',           team:'Cooper Maserati',  color:'#888888' },
      { abbr:'AMO', name:'Amon',           team:'Ferrari',          color:'#E8002D' },
      { abbr:'HIL', name:'G.Hill',         team:'Lotus Ford',       color:'#000000', isDNF: true },
      { abbr:'BAG', name:'Baghetti',       team:'Lotus Ford',       color:'#000000', isDNF: true },
      { abbr:'SIF', name:'Siffert',        team:'Cooper Maserati',  color:'#888888', isDNF: true },
      { abbr:'MCL', name:'McLaren',        team:'McLaren BRM',      color:'#FF8000', isDNF: true },
      { abbr:'BON', name:'Bonnier',        team:'Cooper Maserati',  color:'#888888', isDNF: true },
      { abbr:'STE', name:'Stewart',        team:'BRM',              color:'#888888', isDNF: true },
      { abbr:'HUL', name:'Hulme',          team:'Brabham Repco',    color:'#888888', isDNF: true },
      { abbr:'LIG', name:'Ligier',         team:'Brabham Repco',    color:'#888888', isDNF: true },
      { abbr:'IRW', name:'Irwin',          team:'BRM',              color:'#888888', isDNF: true },
      { abbr:'SCA', name:'Scarfiotti',     team:'Eagle Weslake',    color:'#888888', isDNF: true },
      { abbr:'GUR', name:'Gurney',         team:'Eagle Weslake',    color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     EUROPE 1993 (Donington)
  ───────────────────────────────────────── */
  {
    id:     'europe_1993',
    name:   'European Grand Prix',
    year:   1993,
    flag:   '🇬🇧',
    hidden: [1, 3, 5, 8, 11],
    drivers: [
      { abbr:'SEN', name:'Senna',          team:'McLaren Ford',     color:'#FF8000' },
      { abbr:'HIL', name:'D.Hill',         team:'Williams Renault', color:'#64C4FF' },
      { abbr:'PRO', name:'Prost',          team:'Williams Renault', color:'#64C4FF' },
      { abbr:'HER', name:'Herbert',        team:'Lotus Ford',       color:'#000000' },
      { abbr:'PAT', name:'Patrese',        team:'Benetton Ford',    color:'#27F4D2' },
      { abbr:'BAR', name:'Barbazza',       team:'Minardi Ford',     color:'#888888' },
      { abbr:'CFI', name:'C.Fittipaldi',   team:'Minardi Ford',     color:'#888888' },
      { abbr:'ZAN', name:'Zanardi',        team:'Lotus Ford',       color:'#000000' },
      { abbr:'COM', name:'Comas',          team:'Larrousse Lamborghini',color:'#888888' },
      { abbr:'BRC', name:'Barrichello',    team:'Jordan Hart',      color:'#888888', isDNF: true },
      { abbr:'ALB', name:'Alboreto',       team:'Lola Ferrari',     color:'#E8002D' },
      { abbr:'WAR', name:'Warwick',        team:'Footwork Mugen Honda',color:'#888888', isDNF: true },
      { abbr:'BOU', name:'Boutsen',        team:'Jordan Hart',      color:'#888888', isDNF: true },
      { abbr:'CES', name:'de Cesaris',     team:'Tyrrell Yamaha',   color:'#888888', isDNF: true },
      { abbr:'ALE', name:'Alesi',          team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'SUZ', name:'Suzuki',         team:'Footwork Mugen Honda',color:'#888888', isDNF: true },
      { abbr:'ALL', name:'Alliot',         team:'Larrousse Lamborghini',color:'#888888', isDNF: true },
      { abbr:'MSC', name:'Schumacher',     team:'Benetton Ford',    color:'#27F4D2', isDNF: true },
      { abbr:'BLU', name:'Blundell',       team:'Ligier Renault',   color:'#888888', isDNF: true },
      { abbr:'BER', name:'Berger',         team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'JAR', name:'Jarvilehto',     team:'Sauber',           color:'#888888', isDNF: true },
      { abbr:'KAT', name:'Katayama',       team:'Tyrrell Yamaha',   color:'#888888', isDNF: true },
      { abbr:'BRU', name:'Brundle',        team:'Ligier Renault',   color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ITALY (MONZA) 1970
  ───────────────────────────────────────── */
  {
    id:     'monza_1970',
    name:   'Italian Grand Prix',
    year:   1970,
    flag:   '🇮🇹',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'REG', name:'Regazzoni',      team:'Ferrari',          color:'#E8002D' },
      { abbr:'STE', name:'Stewart',        team:'March Ford',       color:'#888888' },
      { abbr:'BEL', name:'Beltoise',       team:'Matra',            color:'#888888' },
      { abbr:'HUL', name:'Hulme',          team:'McLaren Ford',     color:'#FF8000' },
      { abbr:'STO', name:'Stommelen',      team:'Brabham Ford',     color:'#888888' },
      { abbr:'CEV', name:'Cevert',         team:'March Ford',       color:'#888888' },
      { abbr:'AMO', name:'Amon',           team:'March Ford',       color:'#888888' },
      { abbr:'ADA', name:'de Adamich',     team:'McLaren Alfa Romeo',color:'#888888' },
      { abbr:'GET', name:'Gethin',         team:'McLaren Ford',     color:'#FF8000', isDNF: true },
      { abbr:'OLI', name:'Oliver',         team:'BRM',              color:'#888888', isDNF: true },
      { abbr:'PET', name:'Peterson',       team:'March Ford',       color:'#888888', isDNF: true },
      { abbr:'BRA', name:'Brabham',        team:'Brabham Ford',     color:'#888888', isDNF: true },
      { abbr:'ICK', name:'Ickx',           team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'EAT', name:'Eaton',          team:'BRM',              color:'#888888', isDNF: true },
      { abbr:'SCH', name:'Schenken',       team:'De Tomaso Ford',   color:'#888888', isDNF: true },
      { abbr:'PES', name:'Pescarolo',      team:'Matra',            color:'#888888', isDNF: true },
      { abbr:'GIU', name:'Giunti',         team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'ROD', name:'Rodriguez',      team:'BRM',              color:'#888888', isDNF: true },
      { abbr:'SIF', name:'Siffert',        team:'March Ford',       color:'#888888', isDNF: true },
      { abbr:'SUR', name:'Surtees',        team:'Surtees Ford',     color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     BAHRAIN 2005
  ───────────────────────────────────────── */
  {
    id:     'bahrain_2005',
    name:   'Bahrain Grand Prix',
    year:   2005,
    flag:   '🇧🇭',
    hidden: [1, 3, 5, 8, 11],
    drivers: [
      { abbr:'ALO', name:'Alonso',         team:'Renault',          color:'#FFD800' },
      { abbr:'TRU', name:'Trulli',         team:'Toyota',           color:'#888888' },
      { abbr:'RAI', name:'Räikkönen',      team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'RSC', name:'R.Schumacher',   team:'Toyota',           color:'#888888' },
      { abbr:'ROZ', name:'de la Rosa',     team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'WEB', name:'Webber',         team:'Williams BMW',     color:'#64C4FF' },
      { abbr:'MAS', name:'Massa',          team:'Sauber Petronas',  color:'#888888' },
      { abbr:'COU', name:'Coulthard',      team:'RBR Cosworth',     color:'#3671C6' },
      { abbr:'BAR', name:'Barrichello',    team:'Ferrari',          color:'#E8002D' },
      { abbr:'MON', name:'Monteiro',       team:'Jordan Toyota',    color:'#888888' },
      { abbr:'VIL', name:'Villeneuve',     team:'Sauber Petronas',  color:'#888888', isDNF: true },
      { abbr:'FRI', name:'Friesacher',     team:'Minardi Cosworth', color:'#888888' },
      { abbr:'ALB', name:'Albers',         team:'Minardi Cosworth', color:'#888888' },
      { abbr:'BUT', name:'Button',         team:'BAR Honda',        color:'#888888', isDNF: true },
      { abbr:'SAT', name:'Sato',           team:'BAR Honda',        color:'#888888', isDNF: true },
      { abbr:'HEI', name:'Heidfeld',       team:'Williams BMW',     color:'#64C4FF', isDNF: true },
      { abbr:'MSC', name:'M.Schumacher',   team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'FIS', name:'Fisichella',     team:'Renault',          color:'#FFD800', isDNF: true },
      { abbr:'KAR', name:'Karthikeyan',    team:'Jordan Toyota',    color:'#888888', isDNF: true },
      { abbr:'KLI', name:'Klien',          team:'RBR Cosworth',     color:'#3671C6', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     AUSTRALIA 1986
  ───────────────────────────────────────── */
  {
    id:     'australia_1986',
    name:   'Australian Grand Prix',
    year:   1986,
    flag:   '🇦🇺',
    hidden: [1, 3, 5, 7, 10],
    drivers: [
      { abbr:'PRO', name:'Prost',          team:'McLaren TAG',      color:'#FF8000' },
      { abbr:'PIQ', name:'Piquet',         team:'Williams Honda',   color:'#64C4FF' },
      { abbr:'JOH', name:'Johansson',      team:'Ferrari',          color:'#E8002D' },
      { abbr:'BRU', name:'Brundle',        team:'Tyrrell Renault',  color:'#5E8FAA' },
      { abbr:'STR', name:'Streiff',        team:'Tyrrell Renault',  color:'#5E8FAA' },
      { abbr:'DUM', name:'Dumfries',       team:'Lotus Renault',    color:'#000000' },
      { abbr:'ARN', name:'Arnoux',         team:'Ligier Renault',   color:'#888888' },
      { abbr:'ALL', name:'Alliot',         team:'Ligier Renault',   color:'#888888' },
      { abbr:'PAL', name:'Palmer',         team:'Zakspeed',         color:'#888888' },
      { abbr:'FAB', name:'Fabi',           team:'Benetton BMW',     color:'#27F4D2' },
      { abbr:'TAM', name:'Tambay',         team:'Lola Ford',        color:'#888888', isDNF: true },
      { abbr:'MAN', name:'Mansell',        team:'Williams Honda',   color:'#64C4FF', isDNF: true },
      { abbr:'PAT', name:'Patrese',        team:'Brabham BMW',      color:'#888888', isDNF: true },
      { abbr:'ROS', name:'Rosberg',        team:'McLaren TAG',      color:'#FF8000', isDNF: true },
      { abbr:'BER', name:'Berg',           team:'Osella Alfa Romeo',color:'#888888', isDNF: true },
      { abbr:'WAR', name:'Warwick',        team:'Brabham BMW',      color:'#888888', isDNF: true },
      { abbr:'DAN', name:'Danner',         team:'Arrows BMW',       color:'#888888', isDNF: true },
      { abbr:'BOU', name:'Boutsen',        team:'Arrows BMW',       color:'#888888', isDNF: true },
      { abbr:'SEN', name:'Senna',          team:'Lotus Renault',    color:'#000000', isDNF: true },
      { abbr:'BER2', name:'Berger',        team:'Benetton BMW',     color:'#27F4D2', isDNF: true },
      { abbr:'CES', name:'de Cesaris',     team:'Minardi Motori',   color:'#888888', isDNF: true },
      { abbr:'ROT', name:'Rothengatter',   team:'Zakspeed',         color:'#888888', isDNF: true },
      { abbr:'JON', name:'Jones',          team:'Lola Ford',        color:'#888888', isDNF: true },
      { abbr:'NAN', name:'Nannini',        team:'Minardi Motori',   color:'#888888', isDNF: true },
      { abbr:'GHI', name:'Ghinzani',       team:'Osella Alfa Romeo',color:'#888888', isDNF: true },
      { abbr:'ALB', name:'Alboreto',       team:'Ferrari',          color:'#E8002D', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     BRAZIL 2012
  ───────────────────────────────────────── */
  {
    id:     'brazil_2012',
    name:   'Brazilian Grand Prix',
    year:   2012,
    flag:   '🇧🇷',
    hidden: [1, 3, 5, 7, 10, 13],
    drivers: [
      { abbr:'BUT', name:'Button',         team:'McLaren Mercedes', color:'#FF8000' },
      { abbr:'ALO', name:'Alonso',         team:'Ferrari',          color:'#E8002D' },
      { abbr:'MAS', name:'Massa',          team:'Ferrari',          color:'#E8002D' },
      { abbr:'WEB', name:'Webber',         team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'HUL', name:'Hulkenberg',     team:'Force India Mercedes',color:'#FF87BC' },
      { abbr:'VET', name:'Vettel',         team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'MSC', name:'Schumacher',     team:'Mercedes',         color:'#27F4D2' },
      { abbr:'VER', name:'Vergne',         team:'STR Ferrari',      color:'#5E8FAA' },
      { abbr:'KOB', name:'Kobayashi',      team:'Sauber Ferrari',   color:'#888888' },
      { abbr:'RAI', name:'Räikkönen',      team:'Lotus Renault',    color:'#000000' },
      { abbr:'PET', name:'Petrov',         team:'Caterham Renault', color:'#888888' },
      { abbr:'PIC', name:'Pic',            team:'Marussia Cosworth',color:'#888888' },
      { abbr:'RIC', name:'Ricciardo',      team:'STR Ferrari',      color:'#5E8FAA' },
      { abbr:'KOV', name:'Kovalainen',     team:'Caterham Renault', color:'#888888' },
      { abbr:'ROS', name:'Rosberg',        team:'Mercedes',         color:'#27F4D2' },
      { abbr:'GLO', name:'Glock',          team:'Marussia Cosworth',color:'#888888' },
      { abbr:'DLR', name:'de la Rosa',     team:'HRT Cosworth',     color:'#888888' },
      { abbr:'KAR', name:'Karthikeyan',    team:'HRT Cosworth',     color:'#888888' },
      { abbr:'DIR', name:'di Resta',       team:'Force India Mercedes',color:'#FF87BC', isDNF: true },
      { abbr:'HAM', name:'Hamilton',       team:'McLaren Mercedes', color:'#FF8000', isDNF: true },
      { abbr:'GRO', name:'Grosjean',       team:'Lotus Renault',    color:'#000000', isDNF: true },
      { abbr:'MAL', name:'Maldonado',      team:'Williams Renault', color:'#64C4FF', isDNF: true },
      { abbr:'SEN', name:'Senna',          team:'Williams Renault', color:'#64C4FF', isDNF: true },
      { abbr:'PER', name:'Perez',          team:'Sauber Ferrari',   color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     MONACO 1996
  ───────────────────────────────────────── */
  {
    id:     'monaco_1996',
    name:   'Monaco Grand Prix',
    year:   1996,
    flag:   '🇲🇨',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'PAN', name:'Panis',          team:'Ligier Mugen Honda',color:'#888888' },
      { abbr:'COU', name:'Coulthard',      team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'HER', name:'Herbert',        team:'Sauber Ford',      color:'#888888' },
      { abbr:'FRE', name:'Frentzen',       team:'Sauber Ford',      color:'#888888' },
      { abbr:'SAL', name:'Salo',           team:'Tyrrell Yamaha',   color:'#888888', isDNF: true },
      { abbr:'HAK', name:'Hakkinen',       team:'McLaren Mercedes', color:'#27F4D2', isDNF: true },
      { abbr:'IRV', name:'Irvine',         team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'VIL', name:'Villeneuve',     team:'Williams Renault', color:'#64C4FF', isDNF: true },
      { abbr:'ALE', name:'Alesi',          team:'Benetton Renault', color:'#27F4D2', isDNF: true },
      { abbr:'BAD', name:'Badoer',         team:'Forti Ford',       color:'#888888', isDNF: true },
      { abbr:'HIL', name:'Hill',           team:'Williams Renault', color:'#64C4FF', isDNF: true },
      { abbr:'BRU', name:'Brundle',        team:'Jordan Peugeot',   color:'#888888', isDNF: true },
      { abbr:'BER', name:'Berger',         team:'Benetton Renault', color:'#27F4D2', isDNF: true },
      { abbr:'DIN', name:'Diniz',          team:'Ligier Mugen Honda',color:'#888888', isDNF: true },
      { abbr:'ROS', name:'Rosset',         team:'Footwork Hart',    color:'#888888', isDNF: true },
      { abbr:'KAT', name:'Katayama',       team:'Tyrrell Yamaha',   color:'#888888', isDNF: true },
      { abbr:'MSC', name:'M.Schumacher',   team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'VER', name:'Verstappen',     team:'Footwork Hart',    color:'#888888', isDNF: true },
      { abbr:'BAR', name:'Barrichello',    team:'Jordan Peugeot',   color:'#888888', isDNF: true },
      { abbr:'LAM', name:'Lamy',           team:'Minardi Ford',     color:'#888888', isDNF: true },
      { abbr:'FIS', name:'Fisichella',     team:'Minardi Ford',     color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     BRAZIL 2003
  ───────────────────────────────────────── */
  {
    id:     'brazil_2003',
    name:   'Brazilian Grand Prix',
    year:   2003,
    flag:   '🇧🇷',
    hidden: [1, 3, 5, 8],
    drivers: [
      { abbr:'FIS', name:'Fisichella',     team:'Jordan Ford',      color:'#888888' },
      { abbr:'RAI', name:'Räikkönen',      team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'ALO', name:'Alonso',         team:'Renault',          color:'#FFD800' },
      { abbr:'COU', name:'Coulthard',      team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'FRE', name:'Frentzen',       team:'Sauber Petronas',  color:'#888888' },
      { abbr:'VIL', name:'Villeneuve',     team:'BAR Honda',        color:'#888888' },
      { abbr:'RSC', name:'R.Schumacher',   team:'Williams BMW',     color:'#64C4FF' },
      { abbr:'TRU', name:'Trulli',         team:'Renault',          color:'#FFD800' },
      { abbr:'WEB', name:'Webber',         team:'Jaguar Cosworth',  color:'#229971', isDNF: true },
      { abbr:'MAT', name:'da Matta',       team:'Toyota',           color:'#888888' },
      { abbr:'BAR', name:'Barrichello',    team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'BUT', name:'Button',         team:'BAR Honda',        color:'#888888', isDNF: true },
      { abbr:'VER', name:'Verstappen',     team:'Minardi Cosworth', color:'#888888', isDNF: true },
      { abbr:'MSC', name:'M.Schumacher',   team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'MON', name:'Montoya',        team:'Williams BMW',     color:'#64C4FF', isDNF: true },
      { abbr:'PIZ', name:'Pizzonia',       team:'Jaguar Cosworth',  color:'#229971', isDNF: true },
      { abbr:'PAN', name:'Panis',          team:'Toyota',           color:'#888888', isDNF: true },
      { abbr:'FIR', name:'Firman',         team:'Jordan Ford',      color:'#888888', isDNF: true },
      { abbr:'WIL', name:'Wilson',         team:'Minardi Cosworth', color:'#888888', isDNF: true },
      { abbr:'HEI', name:'Heidfeld',       team:'Sauber Petronas',  color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     MONACO 1982
  ───────────────────────────────────────── */
  {
    id:     'monaco_1982',
    name:   'Monaco Grand Prix',
    year:   1982,
    flag:   '🇲🇨',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'PAT', name:'Patrese',        team:'Brabham Ford',     color:'#888888' },
      { abbr:'PIR', name:'Pironi',         team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'CES', name:'de Cesaris',     team:'Alfa Romeo',       color:'#C92D4B', isDNF: true },
      { abbr:'MAN', name:'Mansell',        team:'Lotus Ford',       color:'#000000' },
      { abbr:'DEA', name:'de Angelis',     team:'Lotus Ford',       color:'#000000' },
      { abbr:'DAL', name:'Daly',           team:'Williams Ford',    color:'#64C4FF', isDNF: true },
      { abbr:'PRO', name:'Prost',          team:'Renault',          color:'#FFD800', isDNF: true },
      { abbr:'HEN', name:'Henton',         team:'Tyrrell Ford',     color:'#5E8FAA' },
      { abbr:'SUR', name:'Surer',          team:'Arrows Ford',      color:'#888888' },
      { abbr:'ALB', name:'Alboreto',       team:'Tyrrell Ford',     color:'#5E8FAA', isDNF: true },
      { abbr:'ROS', name:'Rosberg',        team:'Williams Ford',    color:'#64C4FF', isDNF: true },
      { abbr:'LAU', name:'Lauda',          team:'McLaren Ford',     color:'#FF8000', isDNF: true },
      { abbr:'PIQ', name:'Piquet',         team:'Brabham BMW',      color:'#888888', isDNF: true },
      { abbr:'WAT', name:'Watson',         team:'McLaren Ford',     color:'#FF8000', isDNF: true },
      { abbr:'WIN', name:'Winkelhock',     team:'ATS Ford',         color:'#888888', isDNF: true },
      { abbr:'LAF', name:'Laffite',        team:'Ligier Matra',     color:'#888888', isDNF: true },
      { abbr:'CHE', name:'Cheever',        team:'Ligier Matra',     color:'#888888', isDNF: true },
      { abbr:'SAL', name:'Salazar',        team:'ATS Ford',         color:'#888888', isDNF: true },
      { abbr:'ARN', name:'Arnoux',         team:'Renault',          color:'#FFD800', isDNF: true },
      { abbr:'GIA', name:'Giacomelli',     team:'Alfa Romeo',       color:'#C92D4B', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     CANADA 2011
  ───────────────────────────────────────── */
  {
    id:     'canada_2011',
    name:   'Canadian Grand Prix',
    year:   2011,
    flag:   '🇨🇦',
    hidden: [1, 3, 5, 7, 10],
    drivers: [
      { abbr:'BUT', name:'Button',         team:'McLaren Mercedes', color:'#FF8000' },
      { abbr:'VET', name:'Vettel',         team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'WEB', name:'Webber',         team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'MSC', name:'Schumacher',     team:'Mercedes',         color:'#27F4D2' },
      { abbr:'PET', name:'Petrov',         team:'Renault',          color:'#FFD800' },
      { abbr:'MAS', name:'Massa',          team:'Ferrari',          color:'#E8002D' },
      { abbr:'KOB', name:'Kobayashi',      team:'Sauber Ferrari',   color:'#888888' },
      { abbr:'ALG', name:'Alguersuari',    team:'STR Ferrari',      color:'#5E8FAA' },
      { abbr:'BAR', name:'Barrichello',    team:'Williams Cosworth',color:'#64C4FF' },
      { abbr:'BUE', name:'Buemi',          team:'STR Ferrari',      color:'#5E8FAA' },
      { abbr:'ROS', name:'Rosberg',        team:'Mercedes',         color:'#27F4D2' },
      { abbr:'DLR', name:'de la Rosa',     team:'Sauber Ferrari',   color:'#888888' },
      { abbr:'LIU', name:'Liuzzi',         team:'HRT Cosworth',     color:'#888888' },
      { abbr:'DAM', name:"d'Ambrosio",     team:'Virgin Cosworth',  color:'#888888' },
      { abbr:'GLO', name:'Glock',          team:'Virgin Cosworth',  color:'#888888' },
      { abbr:'TRU', name:'Trulli',         team:'Lotus Renault',    color:'#000000' },
      { abbr:'KAR', name:'Karthikeyan',    team:'HRT Cosworth',     color:'#888888' },
      { abbr:'DIR', name:'di Resta',       team:'Force India Mercedes',color:'#FF87BC', isDNF: true },
      { abbr:'MAL', name:'Maldonado',      team:'Williams Cosworth',color:'#64C4FF', isDNF: true },
      { abbr:'HEI', name:'Heidfeld',       team:'Renault',          color:'#FFD800', isDNF: true },
      { abbr:'SUT', name:'Sutil',          team:'Force India Mercedes',color:'#FF87BC', isDNF: true },
      { abbr:'ALO', name:'Alonso',         team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'KOV', name:'Kovalainen',     team:'Lotus Renault',    color:'#000000', isDNF: true },
      { abbr:'HAM', name:'Hamilton',       team:'McLaren Mercedes', color:'#FF8000', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     GERMANY (HOCKENHEIM) 2019
  ───────────────────────────────────────── */
  {
    id:     'germany_2019',
    name:   'German Grand Prix',
    year:   2019,
    flag:   '🇩🇪',
    hidden: [1, 3, 5, 7, 10],
    drivers: [
      { abbr:'VER', name:'Verstappen',     team:'Red Bull Racing Honda',color:'#3671C6' },
      { abbr:'VET', name:'Vettel',         team:'Ferrari',              color:'#E8002D' },
      { abbr:'KVY', name:'Kvyat',          team:'Toro Rosso Honda',     color:'#5E8FAA' },
      { abbr:'STR', name:'Stroll',         team:'Racing Point Mercedes',color:'#F596C8' },
      { abbr:'SAI', name:'Sainz',          team:'McLaren Renault',      color:'#FF8000' },
      { abbr:'ALB', name:'Albon',          team:'Toro Rosso Honda',     color:'#5E8FAA' },
      { abbr:'GRO', name:'Grosjean',       team:'Haas Ferrari',         color:'#B6BABD' },
      { abbr:'MAG', name:'Magnussen',      team:'Haas Ferrari',         color:'#B6BABD' },
      { abbr:'HAM', name:'Hamilton',       team:'Mercedes',             color:'#27F4D2' },
      { abbr:'KUB', name:'Kubica',         team:'Williams Mercedes',    color:'#64C4FF' },
      { abbr:'RUS', name:'Russell',        team:'Williams Mercedes',    color:'#64C4FF' },
      { abbr:'RAI', name:'Räikkönen',      team:'Alfa Romeo Racing Ferrari',color:'#C92D4B' },
      { abbr:'GIO', name:'Giovinazzi',     team:'Alfa Romeo Racing Ferrari',color:'#C92D4B' },
      { abbr:'GAS', name:'Gasly',          team:'Red Bull Racing Honda',color:'#3671C6', isDNF: true },
      { abbr:'BOT', name:'Bottas',         team:'Mercedes',             color:'#27F4D2', isDNF: true },
      { abbr:'HUL', name:'Hulkenberg',     team:'Renault',              color:'#FFD800', isDNF: true },
      { abbr:'LEC', name:'Leclerc',        team:'Ferrari',              color:'#E8002D', isDNF: true },
      { abbr:'NOR', name:'Norris',         team:'McLaren Renault',      color:'#FF8000', isDNF: true },
      { abbr:'RIC', name:'Ricciardo',      team:'Renault',              color:'#FFD800', isDNF: true },
      { abbr:'PER', name:'Perez',          team:'Racing Point Mercedes',color:'#F596C8', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     SAN MARINO 1989
  ───────────────────────────────────────── */
  {
    id:     'san_marino_1989',
    name:   'San Marino Grand Prix',
    year:   1989,
    flag:   '🇮🇹',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'SEN', name:'Senna',          team:'McLaren Honda',    color:'#FF8000' },
      { abbr:'PRO', name:'Prost',          team:'McLaren Honda',    color:'#FF8000' },
      { abbr:'NAN', name:'Nannini',        team:'Benetton Ford',    color:'#27F4D2' },
      { abbr:'BOU', name:'Boutsen',        team:'Williams Renault', color:'#64C4FF' },
      { abbr:'WAR', name:'Warwick',        team:'Arrows Ford',      color:'#888888' },
      { abbr:'PAL', name:'Palmer',         team:'Tyrrell Ford',     color:'#5E8FAA' },
      { abbr:'CAF', name:'Caffi',          team:'Dallara Ford',     color:'#888888' },
      { abbr:'TAR', name:'Tarquini',       team:'AGS Ford',         color:'#888888' },
      { abbr:'CHE', name:'Cheever',        team:'Arrows Ford',      color:'#888888' },
      { abbr:'CES', name:'de Cesaris',     team:'Dallara Ford',     color:'#888888' },
      { abbr:'HER', name:'Herbert',        team:'Benetton Ford',    color:'#27F4D2' },
      { abbr:'LAR', name:'Larini',         team:'Osella Ford',      color:'#888888', isDNF: true },
      { abbr:'BRU', name:'Brundle',        team:'Brabham Judd',     color:'#888888', isDNF: true },
      { abbr:'NAK', name:'Nakajima',       team:'Lotus Judd',       color:'#000000', isDNF: true },
      { abbr:'PER', name:'Perez-Sala',     team:'Minardi Ford',     color:'#888888', isDNF: true },
      { abbr:'GUG', name:'Gugelmin',       team:'March Judd',       color:'#888888', isDNF: true },
      { abbr:'PIQ', name:'Piquet',         team:'Lotus Judd',       color:'#000000', isDNF: true },
      { abbr:'MAN', name:'Mansell',        team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'PAT', name:'Patrese',        team:'Williams Renault', color:'#64C4FF', isDNF: true },
      { abbr:'MOD', name:'Modena',         team:'Brabham Judd',     color:'#888888', isDNF: true },
      { abbr:'MAR', name:'Martini',        team:'Minardi Ford',     color:'#888888', isDNF: true },
      { abbr:'GRO', name:'Grouillard',     team:'Ligier Ford',      color:'#888888', isDNF: true },
      { abbr:'BER', name:'Berger',         team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'CAP', name:'Capelli',        team:'March Judd',       color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     GERMANY (NÜRBURGRING) 2007
  ───────────────────────────────────────── */
  {
    id:     'germany_2007',
    name:   'German Grand Prix',
    year:   2007,
    flag:   '🇩🇪',
    hidden: [1, 3, 5, 8],
    drivers: [
      { abbr:'ALO', name:'Alonso',         team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'MAS', name:'Massa',          team:'Ferrari',          color:'#E8002D' },
      { abbr:'WEB', name:'Webber',         team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'WUR', name:'Wurz',           team:'Williams Toyota',  color:'#64C4FF' },
      { abbr:'COU', name:'Coulthard',      team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'HEI', name:'Heidfeld',       team:'Sauber BMW',       color:'#888888' },
      { abbr:'KUB', name:'Kubica',         team:'Sauber BMW',       color:'#888888' },
      { abbr:'KOV', name:'Kovalainen',     team:'Renault',          color:'#FFD800' },
      { abbr:'HAM', name:'Hamilton',       team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'FIS', name:'Fisichella',     team:'Renault',          color:'#FFD800' },
      { abbr:'BAR', name:'Barrichello',    team:'Honda',            color:'#888888' },
      { abbr:'DAV', name:'Davidson',       team:'Super Aguri Honda',color:'#888888' },
      { abbr:'TRU', name:'Trulli',         team:'Toyota',           color:'#888888' },
      { abbr:'RAI', name:'Räikkönen',      team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'SAT', name:'Sato',           team:'Super Aguri Honda',color:'#888888', isDNF: true },
      { abbr:'RSC', name:'R.Schumacher',   team:'Toyota',           color:'#888888', isDNF: true },
      { abbr:'WIN', name:'Winkelhock',     team:'Spyker Ferrari',   color:'#888888', isDNF: true },
      { abbr:'BUT', name:'Button',         team:'Honda',            color:'#888888', isDNF: true },
      { abbr:'SUT', name:'Sutil',          team:'Spyker Ferrari',   color:'#888888', isDNF: true },
      { abbr:'ROS', name:'Rosberg',        team:'Williams Toyota',  color:'#64C4FF', isDNF: true },
      { abbr:'SPE', name:'Speed',          team:'STR Ferrari',      color:'#5E8FAA', isDNF: true },
      { abbr:'LIU', name:'Liuzzi',         team:'STR Ferrari',      color:'#5E8FAA', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     GREAT BRITAIN 1950 (Prima cursă F1!)
  ───────────────────────────────────────── */
  {
    id:     'britain_1950',
    name:   'British Grand Prix',
    year:   1950,
    flag:   '🇬🇧',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'FAR', name:'Farina',         team:'Alfa Romeo',       color:'#C92D4B' },
      { abbr:'FAG', name:'Fagioli',        team:'Alfa Romeo',       color:'#C92D4B' },
      { abbr:'PAR', name:'Parnell',        team:'Alfa Romeo',       color:'#C92D4B' },
      { abbr:'GIR', name:'Giraud-Cabantous',team:'Talbot-Lago',    color:'#888888' },
      { abbr:'ROS', name:'Rosier',         team:'Talbot-Lago',      color:'#888888' },
      { abbr:'GER', name:'Gerard',         team:'ERA',              color:'#888888' },
      { abbr:'HAR', name:'Harrison',       team:'ERA',              color:'#888888' },
      { abbr:'ETA', name:'Etancelin',      team:'Talbot-Lago',      color:'#888888' },
      { abbr:'HAM', name:'Hampshire',      team:'Maserati',         color:'#888888' },
      { abbr:'SHA', name:'Shawe-Taylor',   team:'Maserati',         color:'#888888' },
      { abbr:'CLA', name:'Claes',          team:'Talbot-Lago',      color:'#888888' },
      { abbr:'FAN', name:'Fangio',         team:'Alfa Romeo',       color:'#C92D4B', isDNF: true },
      { abbr:'KEL', name:'Kelly',          team:'Alta',             color:'#888888', isDNF: true },
      { abbr:'BIR', name:'Bira',           team:'Maserati',         color:'#888888', isDNF: true },
      { abbr:'MUR', name:'Murray',         team:'Maserati',         color:'#888888', isDNF: true },
      { abbr:'CRO', name:'Crossley',       team:'Alta',             color:'#888888', isDNF: true },
      { abbr:'GRA', name:'de Graffenried', team:'Maserati',         color:'#888888', isDNF: true },
      { abbr:'CHI', name:'Chiron',         team:'Maserati',         color:'#888888', isDNF: true },
      { abbr:'MAR', name:'Martin',         team:'Talbot-Lago',      color:'#888888', isDNF: true },
      { abbr:'ROL', name:'Rolt',           team:'ERA',              color:'#888888', isDNF: true },
      { abbr:'JOH', name:'Johnson',        team:'ERA',              color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     MONACO 2016
  ───────────────────────────────────────── */
  {
    id:     'monaco_2016',
    name:   'Monaco Grand Prix',
    year:   2016,
    flag:   '🇲🇨',
    hidden: [1, 3, 5, 7, 10],
    drivers: [
      { abbr:'HAM', name:'Hamilton',       team:'Mercedes',         color:'#27F4D2' },
      { abbr:'RIC', name:'Ricciardo',      team:'Red Bull TAG Heuer',color:'#3671C6' },
      { abbr:'PER', name:'Perez',          team:'Force India Mercedes',color:'#FF87BC' },
      { abbr:'VET', name:'Vettel',         team:'Ferrari',          color:'#E8002D' },
      { abbr:'ALO', name:'Alonso',         team:'McLaren Honda',    color:'#FF8000' },
      { abbr:'HUL', name:'Hulkenberg',     team:'Force India Mercedes',color:'#FF87BC' },
      { abbr:'ROS', name:'Rosberg',        team:'Mercedes',         color:'#27F4D2' },
      { abbr:'SAI', name:'Sainz',          team:'Toro Rosso Ferrari',color:'#5E8FAA' },
      { abbr:'BUT', name:'Button',         team:'McLaren Honda',    color:'#FF8000' },
      { abbr:'MAS', name:'Massa',          team:'Williams Mercedes',color:'#64C4FF' },
      { abbr:'GUT', name:'Gutierrez',      team:'Haas Ferrari',     color:'#B6BABD' },
      { abbr:'BOT', name:'Bottas',         team:'Williams Mercedes',color:'#64C4FF' },
      { abbr:'GRO', name:'Grosjean',       team:'Haas Ferrari',     color:'#B6BABD' },
      { abbr:'WEH', name:'Wehrlein',       team:'MRT Mercedes',     color:'#888888' },
      { abbr:'HAR', name:'Haryanto',       team:'MRT Mercedes',     color:'#888888' },
      { abbr:'ERI', name:'Ericsson',       team:'Sauber Ferrari',   color:'#888888', isDNF: true },
      { abbr:'NAS', name:'Nasr',           team:'Sauber Ferrari',   color:'#888888', isDNF: true },
      { abbr:'VER', name:'Verstappen',     team:'Red Bull TAG Heuer',color:'#3671C6', isDNF: true },
      { abbr:'MAG', name:'Magnussen',      team:'Renault',          color:'#FFD800', isDNF: true },
      { abbr:'KVY', name:'Kvyat',          team:'Toro Rosso Ferrari',color:'#5E8FAA', isDNF: true },
      { abbr:'RAI', name:'Räikkönen',      team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'PAL', name:'Palmer',         team:'Renault',          color:'#FFD800', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     JAPAN 1977
  ───────────────────────────────────────── */
  {
    id:     'japan_1977',
    name:   'Japanese Grand Prix',
    year:   1977,
    flag:   '🇯🇵',
    hidden: [1, 3, 5, 8],
    drivers: [
      { abbr:'HUN', name:'Hunt',           team:'McLaren Ford',     color:'#FF8000' },
      { abbr:'REU', name:'Reutemann',      team:'Ferrari',          color:'#E8002D' },
      { abbr:'DEP', name:'Depailler',      team:'Tyrrell Ford',     color:'#5E8FAA' },
      { abbr:'JON', name:'Jones',          team:'Shadow Ford',      color:'#888888' },
      { abbr:'LAF', name:'Laffite',        team:'Ligier Matra',     color:'#888888', isDNF: true },
      { abbr:'PAT', name:'Patrese',        team:'Shadow Ford',      color:'#888888' },
      { abbr:'STU', name:'Stuck',          team:'Brabham Alfa Romeo',color:'#888888' },
      { abbr:'BRA', name:'Brambilla',      team:'Surtees Ford',     color:'#888888' },
      { abbr:'TAK', name:'Takahashi',      team:'Tyrrell Ford',     color:'#5E8FAA' },
      { abbr:'SCH', name:'Scheckter',      team:'Wolf Ford',        color:'#888888' },
      { abbr:'HOS', name:'Hoshino',        team:'Kojima Ford',      color:'#888888' },
      { abbr:'RIB', name:'Ribeiro',        team:'March Ford',       color:'#888888' },
      { abbr:'NIL', name:'Nilsson',        team:'Lotus Ford',       color:'#000000', isDNF: true },
      { abbr:'REG', name:'Regazzoni',      team:'Ensign Ford',      color:'#888888', isDNF: true },
      { abbr:'WAT', name:'Watson',         team:'Brabham Alfa Romeo',color:'#888888', isDNF: true },
      { abbr:'MAS', name:'Mass',           team:'McLaren Ford',     color:'#FF8000', isDNF: true },
      { abbr:'TAM', name:'Tambay',         team:'Ensign Ford',      color:'#888888', isDNF: true },
      { abbr:'PET', name:'Peterson',       team:'Tyrrell Ford',     color:'#5E8FAA', isDNF: true },
      { abbr:'VIL', name:'Villeneuve',     team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'JAR', name:'Jarier',         team:'Ligier Matra',     color:'#888888', isDNF: true },
      { abbr:'BIN', name:'Binder',         team:'Surtees Ford',     color:'#888888', isDNF: true },
      { abbr:'TAK2',name:'Takahara',       team:'Kojima Ford',      color:'#888888', isDNF: true },
      { abbr:'AND', name:'Andretti',       team:'Lotus Ford',       color:'#000000', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     GERMANY (HOCKENHEIM) 2018
  ───────────────────────────────────────── */
  {
    id:     'germany_2018',
    name:   'German Grand Prix',
    year:   2018,
    flag:   '🇩🇪',
    hidden: [1, 3, 5, 7, 10],
    drivers: [
      { abbr:'HAM', name:'Hamilton',       team:'Mercedes',         color:'#27F4D2' },
      { abbr:'BOT', name:'Bottas',         team:'Mercedes',         color:'#27F4D2' },
      { abbr:'RAI', name:'Räikkönen',      team:'Ferrari',          color:'#E8002D' },
      { abbr:'VER', name:'Verstappen',     team:'Red Bull TAG Heuer',color:'#3671C6' },
      { abbr:'HUL', name:'Hulkenberg',     team:'Renault',          color:'#FFD800' },
      { abbr:'GRO', name:'Grosjean',       team:'Haas Ferrari',     color:'#B6BABD' },
      { abbr:'PER', name:'Perez',          team:'Force India Mercedes',color:'#FF87BC' },
      { abbr:'OCO', name:'Ocon',           team:'Force India Mercedes',color:'#FF87BC' },
      { abbr:'ERI', name:'Ericsson',       team:'Sauber Ferrari',   color:'#888888' },
      { abbr:'HAR', name:'Hartley',        team:'Toro Rosso Honda', color:'#5E8FAA' },
      { abbr:'MAG', name:'Magnussen',      team:'Haas Ferrari',     color:'#B6BABD' },
      { abbr:'SAI', name:'Sainz',          team:'Renault',          color:'#FFD800' },
      { abbr:'VAN', name:'Vandoorne',      team:'McLaren Renault',  color:'#FF8000' },
      { abbr:'GAS', name:'Gasly',          team:'Toro Rosso Honda', color:'#5E8FAA' },
      { abbr:'LEC', name:'Leclerc',        team:'Sauber Ferrari',   color:'#888888' },
      { abbr:'ALO', name:'Alonso',         team:'McLaren Renault',  color:'#FF8000', isDNF: true },
      { abbr:'STR', name:'Stroll',         team:'Williams Mercedes',color:'#64C4FF', isDNF: true },
      { abbr:'VET', name:'Vettel',         team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'SIR', name:'Sirotkin',       team:'Williams Mercedes',color:'#64C4FF', isDNF: true },
      { abbr:'RIC', name:'Ricciardo',      team:'Red Bull TAG Heuer',color:'#3671C6', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     GERMANY (NÜRBURGRING) 1999
  ───────────────────────────────────────── */
  {
    id:     'germany_1999',
    name:   'European Grand Prix',
    year:   1999,
    flag:   '🇩🇪',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'HER', name:'Herbert',        team:'Stewart Ford',     color:'#888888' },
      { abbr:'TRU', name:'Trulli',         team:'Prost Peugeot',    color:'#888888' },
      { abbr:'BAR', name:'Barrichello',    team:'Stewart Ford',     color:'#888888' },
      { abbr:'RSC', name:'R.Schumacher',   team:'Williams Supertec',color:'#64C4FF' },
      { abbr:'HAK', name:'Hakkinen',       team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'GEN', name:'Gene',           team:'Minardi Ford',     color:'#888888' },
      { abbr:'IRV', name:'Irvine',         team:'Ferrari',          color:'#E8002D' },
      { abbr:'ZON', name:'Zonta',          team:'BAR Supertec',     color:'#888888' },
      { abbr:'PAN', name:'Panis',          team:'Prost Peugeot',    color:'#888888' },
      { abbr:'VIL', name:'Villeneuve',     team:'BAR Supertec',     color:'#888888', isDNF: true },
      { abbr:'BAD', name:'Badoer',         team:'Minardi Ford',     color:'#888888', isDNF: true },
      { abbr:'ROZ', name:'de la Rosa',     team:'Arrows',           color:'#888888', isDNF: true },
      { abbr:'FIS', name:'Fisichella',     team:'Benetton Playlife',color:'#27F4D2', isDNF: true },
      { abbr:'SAL', name:'Salo',           team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'TAK', name:'Takagi',         team:'Arrows',           color:'#888888', isDNF: true },
      { abbr:'COU', name:'Coulthard',      team:'McLaren Mercedes', color:'#27F4D2', isDNF: true },
      { abbr:'ALE', name:'Alesi',          team:'Sauber Petronas',  color:'#888888', isDNF: true },
      { abbr:'FRE', name:'Frentzen',       team:'Jordan Mugen Honda',color:'#888888', isDNF: true },
      { abbr:'ZAN', name:'Zanardi',        team:'Williams Supertec',color:'#64C4FF', isDNF: true },
      { abbr:'HIL', name:'D.Hill',         team:'Jordan Mugen Honda',color:'#888888', isDNF: true },
      { abbr:'WUR', name:'Wurz',           team:'Benetton Playlife',color:'#27F4D2', isDNF: true },
      { abbr:'DIN', name:'Diniz',          team:'Sauber Petronas',  color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     MONACO 2004
  ───────────────────────────────────────── */
  {
    id:     'monaco_2004',
    name:   'Monaco Grand Prix',
    year:   2004,
    flag:   '🇲🇨',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'TRU', name:'Trulli',         team:'Renault',          color:'#FFD800' },
      { abbr:'BUT', name:'Button',         team:'BAR Honda',        color:'#888888' },
      { abbr:'BAR', name:'Barrichello',    team:'Ferrari',          color:'#E8002D' },
      { abbr:'MON', name:'Montoya',        team:'Williams BMW',     color:'#64C4FF' },
      { abbr:'MAS', name:'Massa',          team:'Sauber Petronas',  color:'#888888' },
      { abbr:'MAT', name:'da Matta',       team:'Toyota',           color:'#888888' },
      { abbr:'HEI', name:'Heidfeld',       team:'Jordan Ford',      color:'#888888' },
      { abbr:'PAN', name:'Panis',          team:'Toyota',           color:'#888888' },
      { abbr:'BAU', name:'Baumgartner',    team:'Minardi Cosworth', color:'#888888' },
      { abbr:'RSC', name:'R.Schumacher',   team:'Williams BMW',     color:'#64C4FF', isDNF: true },
      { abbr:'MSC', name:'M.Schumacher',   team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'ALO', name:'Alonso',         team:'Renault',          color:'#FFD800', isDNF: true },
      { abbr:'RAI', name:'Räikkönen',      team:'McLaren Mercedes', color:'#27F4D2', isDNF: true },
      { abbr:'BRU', name:'Bruni',          team:'Minardi Cosworth', color:'#888888', isDNF: true },
      { abbr:'PAN2',name:'Pantano',        team:'Jordan Ford',      color:'#888888', isDNF: true },
      { abbr:'WEB', name:'Webber',         team:'Jaguar Cosworth',  color:'#229971', isDNF: true },
      { abbr:'SAT', name:'Sato',           team:'BAR Honda',        color:'#888888', isDNF: true },
      { abbr:'COU', name:'Coulthard',      team:'McLaren Mercedes', color:'#27F4D2', isDNF: true },
      { abbr:'FIS', name:'Fisichella',     team:'Sauber Petronas',  color:'#888888', isDNF: true },
      { abbr:'KLI', name:'Klien',          team:'Jaguar Cosworth',  color:'#229971', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ITALY (MONZA) 1953
  ───────────────────────────────────────── */
  {
    id:     'monza_1953',
    name:   'Italian Grand Prix',
    year:   1953,
    flag:   '🇮🇹',
    hidden: [1, 3, 5, 8],
    drivers: [
      { abbr:'FAN', name:'Fangio',         team:'Maserati',         color:'#888888' },
      { abbr:'FAR', name:'Farina',         team:'Ferrari',          color:'#E8002D' },
      { abbr:'VIL', name:'Villoresi',      team:'Ferrari',          color:'#E8002D' },
      { abbr:'HAW', name:'Hawthorn',       team:'Ferrari',          color:'#E8002D' },
      { abbr:'TRI', name:'Trintignant',    team:'Gordini',          color:'#888888' },
      { abbr:'MIE', name:'Mieres',         team:'Gordini',          color:'#888888' },
      { abbr:'MUS', name:'Musso',          team:'Maserati',         color:'#888888' },
      { abbr:'MAG', name:'Maglioli',       team:'Ferrari',          color:'#E8002D' },
      { abbr:'SCH', name:'Schell',         team:'Gordini',          color:'#888888' },
      { abbr:'CHI', name:'Chiron',         team:'OSCA',             color:'#888888' },
      { abbr:'BIR', name:'Bira',           team:'Maserati',         color:'#888888' },
      { abbr:'BRO', name:'Brown',          team:'Cooper Bristol',   color:'#888888' },
      { abbr:'MOS', name:'Moss',           team:'Cooper Alta',      color:'#888888' },
      { abbr:'VOS', name:'Von Stuck',      team:'AFM Bristol',      color:'#888888' },
      { abbr:'GIR', name:'Giraud-Cabantous',team:'HWM Alta',       color:'#888888' },
      { abbr:'ROS', name:'Rosier',         team:'Ferrari',          color:'#E8002D' },
      { abbr:'ASC', name:'Ascari',         team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'BON', name:'Bonetto',        team:'Maserati',         color:'#888888', isDNF: true },
      { abbr:'MAR', name:'Marimon',        team:'Maserati',         color:'#888888', isDNF: true },
      { abbr:'CAR', name:'Carini',         team:'Ferrari',          color:'#E8002D', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ABU DHABI 2010
  ───────────────────────────────────────── */
  {
    id:     'abu_dhabi_2010',
    name:   'Abu Dhabi Grand Prix',
    year:   2010,
    flag:   '🇦🇪',
    hidden: [1, 3, 5, 7, 10, 13],
    drivers: [
      { abbr:'VET', name:'Vettel',         team:'RBR Renault',      color:'#3671C6' },
      { abbr:'HAM', name:'Hamilton',       team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'BUT', name:'Button',         team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'ROS', name:'Rosberg',        team:'Mercedes',         color:'#27F4D2' },
      { abbr:'KUB', name:'Kubica',         team:'Renault',          color:'#FFD800' },
      { abbr:'PET', name:'Petrov',         team:'Renault',          color:'#FFD800' },
      { abbr:'ALO', name:'Alonso',         team:'Ferrari',          color:'#E8002D' },
      { abbr:'WEB', name:'Webber',         team:'RBR Renault',      color:'#3671C6' },
      { abbr:'ALG', name:'Alguersuari',    team:'STR Ferrari',      color:'#5E8FAA' },
      { abbr:'MAS', name:'Massa',          team:'Ferrari',          color:'#E8002D' },
      { abbr:'HEI', name:'Heidfeld',       team:'Sauber Ferrari',   color:'#888888' },
      { abbr:'BAR', name:'Barrichello',    team:'Williams Cosworth',color:'#64C4FF' },
      { abbr:'SUT', name:'Sutil',          team:'Force India Mercedes',color:'#FF87BC' },
      { abbr:'KOB', name:'Kobayashi',      team:'Sauber Ferrari',   color:'#888888' },
      { abbr:'BUE', name:'Buemi',          team:'STR Ferrari',      color:'#5E8FAA' },
      { abbr:'HUL', name:'Hulkenberg',     team:'Williams Cosworth',color:'#64C4FF' },
      { abbr:'KOV', name:'Kovalainen',     team:'Lotus Cosworth',   color:'#000000' },
      { abbr:'DIG', name:'di Grassi',      team:'Virgin Cosworth',  color:'#888888' },
      { abbr:'SEN', name:'Senna',          team:'HRT Cosworth',     color:'#888888' },
      { abbr:'KLI', name:'Klien',          team:'HRT Cosworth',     color:'#888888' },
      { abbr:'TRU', name:'Trulli',         team:'Lotus Cosworth',   color:'#000000' },
      { abbr:'GLO', name:'Glock',          team:'Virgin Cosworth',  color:'#888888', isDNF: true },
      { abbr:'MSC', name:'Schumacher',     team:'Mercedes',         color:'#27F4D2', isDNF: true },
      { abbr:'LIU', name:'Liuzzi',         team:'Force India Mercedes',color:'#FF87BC', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     MONACO 1992
  ───────────────────────────────────────── */
  {
    id:     'monaco_1992',
    name:   'Monaco Grand Prix',
    year:   1992,
    flag:   '🇲🇨',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'SEN', name:'Senna',          team:'McLaren Honda',    color:'#FF8000' },
      { abbr:'MAN', name:'Mansell',        team:'Williams Renault', color:'#64C4FF' },
      { abbr:'PAT', name:'Patrese',        team:'Williams Renault', color:'#64C4FF' },
      { abbr:'MSC', name:'Schumacher',     team:'Benetton Ford',    color:'#27F4D2' },
      { abbr:'BRU', name:'Brundle',        team:'Benetton Ford',    color:'#27F4D2' },
      { abbr:'GAC', name:'Gachot',         team:'Venturi Lamborghini',color:'#888888' },
      { abbr:'ALB', name:'Alboreto',       team:'Footwork Mugen Honda',color:'#888888' },
      { abbr:'CFI', name:'C.Fittipaldi',   team:'Minardi Lamborghini',color:'#888888' },
      { abbr:'JAR', name:'Jarvilehto',     team:'Dallara Ferrari',  color:'#888888' },
      { abbr:'COM', name:'Comas',          team:'Ligier Renault',   color:'#888888' },
      { abbr:'SUZ', name:'Suzuki',         team:'Footwork Mugen Honda',color:'#888888' },
      { abbr:'BOU', name:'Boutsen',        team:'Ligier Renault',   color:'#888888' },
      { abbr:'CAP', name:'Capelli',        team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'BER', name:'Berger',         team:'McLaren Honda',    color:'#FF8000', isDNF: true },
      { abbr:'HAK', name:'Hakkinen',       team:'Lotus Ford',       color:'#000000', isDNF: true },
      { abbr:'ALE', name:'Alesi',          team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'GUG', name:'Gugelmin',       team:'Jordan Yamaha',    color:'#888888', isDNF: true },
      { abbr:'HER', name:'Herbert',        team:'Lotus Ford',       color:'#000000', isDNF: true },
      { abbr:'MOR', name:'Moreno',         team:'Moda Judd',        color:'#888888', isDNF: true },
      { abbr:'CES', name:'de Cesaris',     team:'Tyrrell Ilmor',    color:'#888888', isDNF: true },
      { abbr:'TAR', name:'Tarquini',       team:'Fondmetal Ford',   color:'#888888', isDNF: true },
      { abbr:'MOD', name:'Modena',         team:'Jordan Yamaha',    color:'#888888', isDNF: true },
      { abbr:'GRO', name:'Grouillard',     team:'Tyrrell Ilmor',    color:'#888888', isDNF: true },
      { abbr:'WEN', name:'Wendlinger',     team:'March Ilmor',      color:'#888888', isDNF: true },
      { abbr:'MOR2',name:'Morbidelli',     team:'Minardi Lamborghini',color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     BAHRAIN 2020
  ───────────────────────────────────────── */
  {
    id:     'bahrain_2020',
    name:   'Bahrain Grand Prix',
    year:   2020,
    flag:   '🇧🇭',
    hidden: [1, 3, 5, 7, 10, 13],
    drivers: [
      { abbr:'HAM', name:'Hamilton',       team:'Mercedes',         color:'#27F4D2' },
      { abbr:'VER', name:'Verstappen',     team:'Red Bull Racing Honda',color:'#3671C6' },
      { abbr:'ALB', name:'Albon',          team:'Red Bull Racing Honda',color:'#3671C6' },
      { abbr:'NOR', name:'Norris',         team:'McLaren Renault',  color:'#FF8000' },
      { abbr:'SAI', name:'Sainz',          team:'McLaren Renault',  color:'#FF8000' },
      { abbr:'GAS', name:'Gasly',          team:'AlphaTauri Honda', color:'#5E8FAA' },
      { abbr:'RIC', name:'Ricciardo',      team:'Renault',          color:'#FFD800' },
      { abbr:'BOT', name:'Bottas',         team:'Mercedes',         color:'#27F4D2' },
      { abbr:'OCO', name:'Ocon',           team:'Renault',          color:'#FFD800' },
      { abbr:'LEC', name:'Leclerc',        team:'Ferrari',          color:'#E8002D' },
      { abbr:'KVY', name:'Kvyat',          team:'AlphaTauri Honda', color:'#5E8FAA' },
      { abbr:'RUS', name:'Russell',        team:'Williams Mercedes',color:'#64C4FF' },
      { abbr:'VET', name:'Vettel',         team:'Ferrari',          color:'#E8002D' },
      { abbr:'LAT', name:'Latifi',         team:'Williams Mercedes',color:'#64C4FF' },
      { abbr:'RAI', name:'Räikkönen',      team:'Alfa Romeo Racing Ferrari',color:'#C92D4B' },
      { abbr:'GIO', name:'Giovinazzi',     team:'Alfa Romeo Racing Ferrari',color:'#C92D4B' },
      { abbr:'MAG', name:'Magnussen',      team:'Haas Ferrari',     color:'#B6BABD' },
      { abbr:'PER', name:'Perez',          team:'Racing Point BWT Mercedes',color:'#F596C8', isDNF: true },
      { abbr:'STR', name:'Stroll',         team:'Racing Point BWT Mercedes',color:'#F596C8', isDNF: true },
      { abbr:'GRO', name:'Grosjean',       team:'Haas Ferrari',     color:'#B6BABD', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     EUROPE (JEREZ) 1997
  ───────────────────────────────────────── */
  {
    id:     'europe_1997',
    name:   'European Grand Prix',
    year:   1997,
    flag:   '🇪🇸',
    hidden: [1, 3, 5, 8, 11],
    drivers: [
      { abbr:'HAK', name:'Hakkinen',       team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'COU', name:'Coulthard',      team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'VIL', name:'Villeneuve',     team:'Williams Renault', color:'#64C4FF' },
      { abbr:'BER', name:'Berger',         team:'Benetton Renault', color:'#27F4D2' },
      { abbr:'IRV', name:'Irvine',         team:'Ferrari',          color:'#E8002D' },
      { abbr:'FRE', name:'Frentzen',       team:'Williams Renault', color:'#64C4FF' },
      { abbr:'PAN', name:'Panis',          team:'Prost Mugen Honda',color:'#888888' },
      { abbr:'HER', name:'Herbert',        team:'Sauber Petronas',  color:'#888888' },
      { abbr:'MAG', name:'Magnussen',      team:'Stewart Ford',     color:'#888888' },
      { abbr:'NAK', name:'Nakano',         team:'Prost Mugen Honda',color:'#888888' },
      { abbr:'FIS', name:'Fisichella',     team:'Jordan Peugeot',   color:'#888888' },
      { abbr:'SAL', name:'Salo',           team:'Tyrrell Ford',     color:'#5E8FAA' },
      { abbr:'ALE', name:'Alesi',          team:'Benetton Renault', color:'#27F4D2' },
      { abbr:'FON', name:'Fontana',        team:'Sauber Petronas',  color:'#888888' },
      { abbr:'MAR', name:'Marques',        team:'Minardi Hart',     color:'#888888' },
      { abbr:'VER', name:'Verstappen',     team:'Tyrrell Ford',     color:'#5E8FAA' },
      { abbr:'KAT', name:'Katayama',       team:'Minardi Hart',     color:'#888888' },
      { abbr:'MSC', name:'M.Schumacher',   team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'HIL', name:'D.Hill',         team:'Arrows Yamaha',    color:'#888888', isDNF: true },
      { abbr:'RSC', name:'R.Schumacher',   team:'Jordan Peugeot',   color:'#888888', isDNF: true },
      { abbr:'BAR', name:'Barrichello',    team:'Stewart Ford',     color:'#888888', isDNF: true },
      { abbr:'DIN', name:'Diniz',          team:'Arrows Yamaha',    color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     GREAT BRITAIN (BRANDS HATCH) 1985
  ───────────────────────────────────────── */
  {
    id:     'britain_1985',
    name:   'European Grand Prix',
    year:   1985,
    flag:   '🇬🇧',
    hidden: [1, 3, 5, 7, 10],
    drivers: [
      { abbr:'MAN', name:'Mansell',        team:'Williams Honda',   color:'#64C4FF' },
      { abbr:'SEN', name:'Senna',          team:'Lotus Renault',    color:'#000000' },
      { abbr:'ROS', name:'Rosberg',        team:'Williams Honda',   color:'#64C4FF' },
      { abbr:'PRO', name:'Prost',          team:'McLaren TAG',      color:'#FF8000' },
      { abbr:'DEA', name:'de Angelis',     team:'Lotus Renault',    color:'#000000' },
      { abbr:'BOU', name:'Boutsen',        team:'Arrows BMW',       color:'#888888' },
      { abbr:'WAT', name:'Watson',         team:'McLaren TAG',      color:'#FF8000' },
      { abbr:'STR', name:'Streiff',        team:'Ligier Renault',   color:'#888888' },
      { abbr:'PAT', name:'Patrese',        team:'Alfa Romeo',       color:'#C92D4B' },
      { abbr:'BER', name:'Berger',         team:'Arrows BMW',       color:'#888888' },
      { abbr:'CHE', name:'Cheever',        team:'Alfa Romeo',       color:'#C92D4B' },
      { abbr:'TAM', name:'Tambay',         team:'Renault',          color:'#FFD800' },
      { abbr:'SUR', name:'Surer',          team:'Brabham BMW',      color:'#888888', isDNF: true },
      { abbr:'JOH', name:'Johansson',      team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'LAF', name:'Laffite',        team:'Ligier Renault',   color:'#888888', isDNF: true },
      { abbr:'DAN', name:'Danner',         team:'Zakspeed',         color:'#888888', isDNF: true },
      { abbr:'CAP', name:'Capelli',        team:'Tyrrell Renault',  color:'#5E8FAA', isDNF: true },
      { abbr:'BRU', name:'Brundle',        team:'Tyrrell Renault',  color:'#5E8FAA', isDNF: true },
      { abbr:'FAB', name:'Fabi',           team:'Toleman Hart',     color:'#888888', isDNF: true },
      { abbr:'ALL', name:'Alliot',         team:'RAM Hart',         color:'#888888', isDNF: true },
      { abbr:'GHI', name:'Ghinzani',       team:'Toleman Hart',     color:'#888888', isDNF: true },
      { abbr:'JON', name:'Jones',          team:'Lola Hart',        color:'#888888', isDNF: true },
      { abbr:'ALB', name:'Alboreto',       team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'PIQ', name:'Piquet',         team:'Brabham BMW',      color:'#888888', isDNF: true },
      { abbr:'WAR', name:'Warwick',        team:'Renault',          color:'#FFD800', isDNF: true },
      { abbr:'MAR', name:'Martini',        team:'Minardi Motori',   color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ITALY (MONZA) 1971
  ───────────────────────────────────────── */
  {
    id:     'monza_1971',
    name:   'Italian Grand Prix',
    year:   1971,
    flag:   '🇮🇹',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'GET', name:'Gethin',         team:'BRM',              color:'#888888' },
      { abbr:'PET', name:'Peterson',       team:'March Ford',       color:'#888888' },
      { abbr:'CEV', name:'Cevert',         team:'Tyrrell Ford',     color:'#5E8FAA' },
      { abbr:'HAI', name:'Hailwood',       team:'Surtees Ford',     color:'#888888' },
      { abbr:'GAN', name:'Ganley',         team:'BRM',              color:'#888888' },
      { abbr:'AMO', name:'Amon',           team:'Matra',            color:'#888888' },
      { abbr:'OLI', name:'Oliver',         team:'McLaren Ford',     color:'#FF8000' },
      { abbr:'FIT', name:'Fittipaldi',     team:'Lotus Ford',       color:'#000000' },
      { abbr:'SIF', name:'Siffert',        team:'BRM',              color:'#888888' },
      { abbr:'BON', name:'Bonnier',        team:'McLaren Ford',     color:'#FF8000' },
      { abbr:'HIL', name:'G.Hill',         team:'Brabham Ford',     color:'#888888', isDNF: true },
      { abbr:'JAR', name:'Jarier',         team:'March Ford',       color:'#888888', isDNF: true },
      { abbr:'BEU', name:'Beuttler',       team:'March Ford',       color:'#888888', isDNF: true },
      { abbr:'PES', name:'Pescarolo',      team:'March Ford',       color:'#888888', isDNF: true },
      { abbr:'ADA', name:'de Adamich',     team:'March Alfa Romeo', color:'#888888', isDNF: true },
      { abbr:'REG', name:'Regazzoni',      team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'ICK', name:'Ickx',           team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'STE', name:'Stewart',        team:'Tyrrell Ford',     color:'#5E8FAA', isDNF: true },
      { abbr:'GAL', name:'Galli',          team:'March Ford',       color:'#888888', isDNF: true },
      { abbr:'MOS', name:'Moser',          team:'Bellasi Ford',     color:'#888888', isDNF: true },
      { abbr:'SCH', name:'Schenken',       team:'Brabham Ford',     color:'#888888', isDNF: true },
      { abbr:'MAR', name:'Marko',          team:'BRM',              color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     BRAZIL 2016
  ───────────────────────────────────────── */
  {
    id:     'brazil_2016',
    name:   'Brazilian Grand Prix',
    year:   2016,
    flag:   '🇧🇷',
    hidden: [1, 3, 5, 7, 10],
    drivers: [
      { abbr:'HAM', name:'Hamilton',       team:'Mercedes',         color:'#27F4D2' },
      { abbr:'ROS', name:'Rosberg',        team:'Mercedes',         color:'#27F4D2' },
      { abbr:'VER', name:'Verstappen',     team:'Red Bull TAG Heuer',color:'#3671C6' },
      { abbr:'PER', name:'Perez',          team:'Force India Mercedes',color:'#FF87BC' },
      { abbr:'VET', name:'Vettel',         team:'Ferrari',          color:'#E8002D' },
      { abbr:'SAI', name:'Sainz',          team:'Toro Rosso Ferrari',color:'#5E8FAA' },
      { abbr:'HUL', name:'Hulkenberg',     team:'Force India Mercedes',color:'#FF87BC' },
      { abbr:'RIC', name:'Ricciardo',      team:'Red Bull TAG Heuer',color:'#3671C6' },
      { abbr:'NAS', name:'Nasr',           team:'Sauber Ferrari',   color:'#888888' },
      { abbr:'ALO', name:'Alonso',         team:'McLaren Honda',    color:'#FF8000' },
      { abbr:'BOT', name:'Bottas',         team:'Williams Mercedes',color:'#64C4FF' },
      { abbr:'OCO', name:'Ocon',           team:'MRT Mercedes',     color:'#888888' },
      { abbr:'KVY', name:'Kvyat',          team:'Toro Rosso Ferrari',color:'#5E8FAA' },
      { abbr:'MAG', name:'Magnussen',      team:'Renault',          color:'#FFD800' },
      { abbr:'WEH', name:'Wehrlein',       team:'MRT Mercedes',     color:'#888888' },
      { abbr:'BUT', name:'Button',         team:'McLaren Honda',    color:'#FF8000' },
      { abbr:'GUT', name:'Gutierrez',      team:'Haas Ferrari',     color:'#B6BABD', isDNF: true },
      { abbr:'MAS', name:'Massa',          team:'Williams Mercedes',color:'#64C4FF', isDNF: true },
      { abbr:'PAL', name:'Palmer',         team:'Renault',          color:'#FFD800', isDNF: true },
      { abbr:'RAI', name:'Räikkönen',      team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'ERI', name:'Ericsson',       team:'Sauber Ferrari',   color:'#888888', isDNF: true },
      { abbr:'GRO', name:'Grosjean',       team:'Haas Ferrari',     color:'#B6BABD', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     HUNGARY 2009
  ───────────────────────────────────────── */
  {
    id:     'hungary_2009',
    name:   'Hungarian Grand Prix',
    year:   2009,
    flag:   '🇭🇺',
    hidden: [1, 3, 5, 8],
    drivers: [
      { abbr:'HAM', name:'Hamilton',       team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'RAI', name:'Räikkönen',      team:'Ferrari',          color:'#E8002D' },
      { abbr:'WEB', name:'Webber',         team:'RBR Renault',      color:'#3671C6' },
      { abbr:'ROS', name:'Rosberg',        team:'Williams Toyota',  color:'#64C4FF' },
      { abbr:'KOV', name:'Kovalainen',     team:'McLaren Mercedes', color:'#27F4D2' },
      { abbr:'GLO', name:'Glock',          team:'Toyota',           color:'#888888' },
      { abbr:'BUT', name:'Button',         team:'Brawn Mercedes',   color:'#27F4D2' },
      { abbr:'TRU', name:'Trulli',         team:'Toyota',           color:'#888888' },
      { abbr:'NAK', name:'Nakajima',       team:'Williams Toyota',  color:'#64C4FF' },
      { abbr:'BAR', name:'Barrichello',    team:'Brawn Mercedes',   color:'#27F4D2' },
      { abbr:'HEI', name:'Heidfeld',       team:'Sauber BMW',       color:'#888888' },
      { abbr:'PIQ', name:'Piquet',         team:'Renault',          color:'#FFD800' },
      { abbr:'KUB', name:'Kubica',         team:'Sauber BMW',       color:'#888888' },
      { abbr:'FIS', name:'Fisichella',     team:'Force India Mercedes',color:'#FF87BC' },
      { abbr:'ALG', name:'Alguersuari',    team:'STR Ferrari',      color:'#5E8FAA' },
      { abbr:'BUE', name:'Buemi',          team:'STR Ferrari',      color:'#5E8FAA' },
      { abbr:'VET', name:'Vettel',         team:'RBR Renault',      color:'#3671C6', isDNF: true },
      { abbr:'ALO', name:'Alonso',         team:'Renault',          color:'#FFD800', isDNF: true },
      { abbr:'SUT', name:'Sutil',          team:'Force India Mercedes',color:'#FF87BC', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     GERMANY (NÜRBURGRING) 1961
  ───────────────────────────────────────── */
  {
    id:     'germany_1961',
    name:   'German Grand Prix',
    year:   1961,
    flag:   '🇩🇪',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'MOS', name:'Moss',           team:'Lotus Climax',     color:'#000000' },
      { abbr:'TRI', name:'von Trips',      team:'Ferrari',          color:'#E8002D' },
      { abbr:'HIL', name:'P.Hill',         team:'Ferrari',          color:'#E8002D' },
      { abbr:'CLA', name:'Clark',          team:'Lotus Climax',     color:'#000000' },
      { abbr:'SUR', name:'Surtees',        team:'Cooper Climax',    color:'#888888' },
      { abbr:'MCL', name:'McLaren',        team:'Cooper Climax',    color:'#888888' },
      { abbr:'GUR', name:'Gurney',         team:'Porsche',          color:'#888888' },
      { abbr:'GIN', name:'Ginther',        team:'Ferrari',          color:'#E8002D' },
      { abbr:'LEW', name:'Lewis',          team:'Cooper Climax',    color:'#888888' },
      { abbr:'SAL', name:'Salvadori',      team:'Cooper Climax',    color:'#888888' },
      { abbr:'MAG', name:'Maggs',          team:'Lotus Climax',     color:'#000000' },
      { abbr:'BUR', name:'Burgess',        team:'Cooper Climax',    color:'#888888' },
      { abbr:'HER', name:'Herrmann',       team:'Porsche',          color:'#888888' },
      { abbr:'DEG', name:'de Beaufort',    team:'Porsche',          color:'#888888' },
      { abbr:'MAI', name:'Willy Mairesse', team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'MAR', name:'Marsh',          team:'Lotus Climax',     color:'#000000' },
      { abbr:'ASH', name:'Ashmore',        team:'Lotus Climax',     color:'#000000' },
      { abbr:'TRI2',name:'Trintignant',    team:'Cooper Maserati',  color:'#888888', isDNF: true },
      { abbr:'COL', name:'Collomb',        team:'Cooper Climax',    color:'#888888', isDNF: true },
      { abbr:'BAN', name:'Bandini',        team:'Cooper Maserati',  color:'#888888', isDNF: true },
      { abbr:'BRO', name:'Brooks',         team:'BRM Climax',       color:'#888888', isDNF: true },
      { abbr:'BON', name:'Bonnier',        team:'Porsche',          color:'#888888', isDNF: true },
      { abbr:'SEI', name:'Seidel',         team:'Lotus Climax',     color:'#000000', isDNF: true },
      { abbr:'IRE', name:'Ireland',        team:'Lotus Climax',     color:'#000000', isDNF: true },
      { abbr:'HIL2',name:'G.Hill',         team:'BRM Climax',       color:'#888888', isDNF: true },
      { abbr:'BRA', name:'Brabham',        team:'Cooper Climax',    color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     MONACO 1981
  ───────────────────────────────────────── */
  {
    id:     'monaco_1981',
    name:   'Monaco Grand Prix',
    year:   1981,
    flag:   '🇲🇨',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'VIL', name:'Villeneuve',     team:'Ferrari',          color:'#E8002D' },
      { abbr:'JON', name:'Jones',          team:'Williams Ford',    color:'#64C4FF' },
      { abbr:'LAF', name:'Laffite',        team:'Ligier Matra',     color:'#888888' },
      { abbr:'PIR', name:'Pironi',         team:'Ferrari',          color:'#E8002D' },
      { abbr:'CHE', name:'Cheever',        team:'Tyrrell Ford',     color:'#5E8FAA' },
      { abbr:'SUR', name:'Surer',          team:'Ensign Ford',      color:'#888888' },
      { abbr:'TAM', name:'Tambay',         team:'Theodore Ford',    color:'#888888' },
      { abbr:'PIQ', name:'Piquet',         team:'Brabham Ford',     color:'#888888', isDNF: true },
      { abbr:'WAT', name:'Watson',         team:'McLaren Ford',     color:'#FF8000', isDNF: true },
      { abbr:'ALB', name:'Alboreto',       team:'Tyrrell Ford',     color:'#5E8FAA', isDNF: true },
      { abbr:'GIA', name:'Giacomelli',     team:'Alfa Romeo',       color:'#C92D4B', isDNF: true },
      { abbr:'PRO', name:'Prost',          team:'Renault',          color:'#FFD800', isDNF: true },
      { abbr:'REU', name:'Reutemann',      team:'Williams Ford',    color:'#64C4FF', isDNF: true },
      { abbr:'DEA', name:'de Angelis',     team:'Lotus Ford',       color:'#000000', isDNF: true },
      { abbr:'ARN', name:'Arnoux',         team:'Renault',          color:'#FFD800', isDNF: true },
      { abbr:'PAT', name:'Patrese',        team:'Arrows Ford',      color:'#888888', isDNF: true },
      { abbr:'MAN', name:'Mansell',        team:'Lotus Ford',       color:'#000000', isDNF: true },
      { abbr:'STO', name:'Stohr',          team:'Arrows Ford',      color:'#888888', isDNF: true },
      { abbr:'CES', name:'de Cesaris',     team:'McLaren Ford',     color:'#FF8000', isDNF: true },
      { abbr:'AND', name:'Andretti',       team:'Alfa Romeo',       color:'#C92D4B', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     CANADA 2014
  ───────────────────────────────────────── */
  {
    id:     'canada_2014',
    name:   'Canadian Grand Prix',
    year:   2014,
    flag:   '🇨🇦',
    hidden: [1, 3, 5, 7, 10],
    drivers: [
      { abbr:'RIC', name:'Ricciardo',      team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'ROS', name:'Rosberg',        team:'Mercedes',         color:'#27F4D2' },
      { abbr:'VET', name:'Vettel',         team:'Red Bull Renault', color:'#3671C6' },
      { abbr:'BUT', name:'Button',         team:'McLaren Mercedes', color:'#FF8000' },
      { abbr:'HUL', name:'Hulkenberg',     team:'Force India Mercedes',color:'#FF87BC' },
      { abbr:'ALO', name:'Alonso',         team:'Ferrari',          color:'#E8002D' },
      { abbr:'BOT', name:'Bottas',         team:'Williams Mercedes',color:'#64C4FF' },
      { abbr:'VER', name:'Vergne',         team:'STR Renault',      color:'#5E8FAA' },
      { abbr:'MAG', name:'Magnussen',      team:'McLaren Mercedes', color:'#FF8000' },
      { abbr:'RAI', name:'Räikkönen',      team:'Ferrari',          color:'#E8002D' },
      { abbr:'PER', name:'Perez',          team:'Force India Mercedes',color:'#FF87BC', isDNF: true },
      { abbr:'MAS', name:'Massa',          team:'Williams Mercedes',color:'#64C4FF', isDNF: true },
      { abbr:'SUT', name:'Sutil',          team:'Sauber Ferrari',   color:'#888888' },
      { abbr:'GUT', name:'Gutierrez',      team:'Sauber Ferrari',   color:'#888888', isDNF: true },
      { abbr:'GRO', name:'Grosjean',       team:'Lotus Renault',    color:'#000000', isDNF: true },
      { abbr:'KVY', name:'Kvyat',          team:'STR Renault',      color:'#5E8FAA', isDNF: true },
      { abbr:'HAM', name:'Hamilton',       team:'Mercedes',         color:'#27F4D2', isDNF: true },
      { abbr:'KOB', name:'Kobayashi',      team:'Caterham Renault', color:'#888888', isDNF: true },
      { abbr:'MAL', name:'Maldonado',      team:'Lotus Renault',    color:'#000000', isDNF: true },
      { abbr:'ERI', name:'Ericsson',       team:'Caterham Renault', color:'#888888', isDNF: true },
      { abbr:'CHI', name:'Chilton',        team:'Marussia Ferrari', color:'#888888', isDNF: true },
      { abbr:'BIA', name:'Bianchi',        team:'Marussia Ferrari', color:'#888888', isDNF: true },
    ]
  },

  /* ─────────────────────────────────────────
     ITALY (MONZA) 1956
  ───────────────────────────────────────── */
  {
    id:     'monza_1956',
    name:   'Italian Grand Prix',
    year:   1956,
    flag:   '🇮🇹',
    hidden: [1, 3, 5, 7],
    drivers: [
      { abbr:'MOS', name:'Moss',           team:'Maserati',         color:'#888888' },
      { abbr:'FAN', name:'Fangio',         team:'Ferrari',          color:'#E8002D' },
      { abbr:'FLO', name:'Flockhart',      team:'Connaught Alta',   color:'#888888' },
      { abbr:'GOD', name:'Godia',          team:'Maserati',         color:'#888888' },
      { abbr:'FAI', name:'Fairman',        team:'Connaught Alta',   color:'#888888' },
      { abbr:'PIO', name:'Piotti',         team:'Maserati',         color:'#888888' },
      { abbr:'DEG', name:'de Graffenried', team:'Maserati',         color:'#888888' },
      { abbr:'CAS', name:'Castellotti',    team:'Ferrari',          color:'#E8002D' },
      { abbr:'SIM', name:'Simon',          team:'Gordini',          color:'#888888' },
      { abbr:'GER', name:'Gerini',         team:'Maserati',         color:'#888888' },
      { abbr:'SAL', name:'Salvadori',      team:'Maserati',         color:'#888888' },
      { abbr:'MUS', name:'Musso',          team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'COL', name:'Collins',        team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'BEH', name:'Behra',          team:'Maserati',         color:'#888888', isDNF: true },
      { abbr:'SCH', name:'Schell',         team:'Vanwall',          color:'#888888', isDNF: true },
      { abbr:'TRI', name:'Trintignant',    team:'Vanwall',          color:'#888888', isDNF: true },
      { abbr:'TAR', name:'Taruffi',        team:'Vanwall',          color:'#888888', isDNF: true },
      { abbr:'BON', name:'Bonnier',        team:'Maserati',         color:'#888888', isDNF: true },
      { abbr:'HAL', name:'Halford',        team:'Maserati',         color:'#888888', isDNF: true },
      { abbr:'VIL', name:'Villoresi',      team:'Maserati',         color:'#888888', isDNF: true },
      { abbr:'POR', name:'de Portago',     team:'Ferrari',          color:'#E8002D', isDNF: true },
      { abbr:'LES', name:'Leston',         team:'Connaught Alta',   color:'#888888', isDNF: true },
      { abbr:'SIL', name:'da Silva Ramos', team:'Gordini',          color:'#888888', isDNF: true },
    ]
  },



];
