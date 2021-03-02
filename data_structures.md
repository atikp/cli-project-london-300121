<!-- # Possible data structure for suggested topics

Reddit

```json
{
  "posts": [
    {
      "id": 1,
      "title": "Check out this CLI!",
      "content": "https://github.com/",
      "upvotes": 245,
      "downvotes": 18,
      "comments": ["Looks cool", "Have an upvote"]
    }
  ]
}
```

Movie listings

```json
{
  "movies": [
    {
      "id": 1,
      "title": "Jurassic Park",
      "ageRating": "12",
      "duration": 120,
      "times": ["12:00", "14:20", "16:40", "19:00", "21:20"],
      "seating": {
        "rows": 16,
        "seats": 25
      },
      "ticketsSold": [
        {
          "time": "14:20",
          "seat": "B20"
        },
        {
          "time": "14:20",
          "seat": "B21"
        }
      ]
    }
  ]
}
```

Recipe organiser

```json
{
  "recpies": [
    {
      "id": 1,
      "name": "Margherita Pizza",
      "tags": ["Italian", "Vegetarian", "Bread"],
      "ingredients": [
        "500g flour",
        "325g lukewarm water",
        "5g yeast",
        "10g salt",
        "400g skinned, crushed San Marzano tomatoes",
        "250g drained, fresh mozzarella",
        "Olive oil"
      ],
      "method": [
        "Mix the flour, water, yeast and salt to form a dough",
        "Knead the dough for 5 minutes, then set aside for at least an hour",
        "Heat your oven to the highest setting",
        "Split the dough into 6 portions, roll into neat balls and leave to rest for 15 minutes",
        "Spread a ball of dough onto a floured countertop, top with 2 large tablespoons of tomatoes, some mozzarella and a drizzle of olive oil",
        "Bake the pizza in the oven for 5-10 minutes, depending on your oven"
      ]
    }
  ]
}
``` -->
```json
{"games":[
  {"First Person Shooters": [
    { 
      "id":1,
      "title": "Call of Duty",
      "platforms":["pc","ps4","ps5","Xbox"],
      "rating":'';
    },
     { 
      "id":2,
      "title": "Apex Legends",
      "platforms":["pc","ps4","ps5","Xbox"],
      "rating":'';
    },
     { 
      "id":3,
      "title": "Half Life",
      "platforms":["pc"],
      "rating":'';
    },
     { 
      "id":4,
      "title": "Call of Duty",
      "platforms":["pc","ps4","ps5","Xbox"],
      "rating":'';
    }

  ]},

 {"Third Person Shooters": [
    { 
      "id":1,
      "title": "Fortnite",
      "platforms":["pc","ps4","ps5","Xbox"],
      "rating":'';
    },
     { 
      "id":2,
      "title": "The Division",
      "platforms":["pc","ps4","ps5","Xbox"],
      "rating":'';
    },
     { 
      "id":3,
      "title": "Max Payne",
      "platforms":["pc"],
      "rating":'';
    },
     { 
      "id":4,
      "title": "GTA V",
      "platforms":["pc","ps4","Xbox"],
      "rating":'';
    }

  ]},

   {"Real Time Strategy": [
    { 
      "id":1,
      "title": "StarCraft",
      "platforms":["pc"],
      "rating":'';
    },
     { 
      "id":2,
      "title": "Age Of Empires",
      "platforms":["pc"],
      "rating":'';
    },
     { 
      "id":3,
      "title": "Civilization VI",
      "platforms":["pc","nintendo switch","ps4","Xbox"],
      "rating":'';
    },
     { 
      "id":4,
      "title": "Command & Conquer",
      "platforms":["pc"],
      "rating":'';
    }

  ]},

 {"Sports": [
    { 
      "id":1,
      "title": "Fifa 21",
      "platforms":["pc","ps4","ps5","Xbox"],
      "rating":'';
    },
     { 
      "id":2,
      "title": "Madden 21",
      "platforms":["pc","ps4","ps5","Xbox"],
      "rating":'';
    },
     { 
      "id":3,
      "title": "NHL 21",
      "platforms":["ps4","Xbox"],
      "rating":'';
    },
     { 
      "id":4,
      "title": "NBA 2k21",
      "platforms":["pc","ps4","ps5","Xbox","nintendo switch"],
      "rating":'';
    }

  ]}

]};


```