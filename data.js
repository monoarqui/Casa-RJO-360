var APP_DATA = {
  "scenes": [
    {
      "id": "0-ingreso",
      "name": "INGRESO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4223063009110914,
          "pitch": 0.2744704477170341,
          "rotation": 7.0685834705770345,
          "target": "1-portico"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-portico",
      "name": "PORTICO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6488355727892152,
          "pitch": 0.2587131175056818,
          "rotation": 5.497787143782138,
          "target": "0-ingreso"
        },
        {
          "yaw": -3.0959105073879307,
          "pitch": 0.360115945068177,
          "rotation": 7.853981633974483,
          "target": "2-recibidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-recibidor",
      "name": "RECIBIDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.049474145347559784,
          "pitch": 0.4277715443983787,
          "rotation": 0,
          "target": "1-portico"
        },
        {
          "yaw": -1.8569504199455587,
          "pitch": 0.33256744452268094,
          "rotation": 4.71238898038469,
          "target": "3-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sala",
      "name": "SALA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0890996233897532,
          "pitch": 0.18555942848071183,
          "rotation": 5.497787143782138,
          "target": "2-recibidor"
        },
        {
          "yaw": -2.906968273591893,
          "pitch": 0.399364438244314,
          "rotation": 4.71238898038469,
          "target": "4-vestibulo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-vestibulo",
      "name": "VESTIBULO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08235059515203957,
          "pitch": 0.4217850875065423,
          "rotation": 0,
          "target": "3-sala"
        },
        {
          "yaw": 2.3041770304117453,
          "pitch": 0.2222911015744291,
          "rotation": 2.356194490192345,
          "target": "6-cocina"
        },
        {
          "yaw": -2.810354362768157,
          "pitch": 0.2235231061465761,
          "rotation": 3.9269908169872414,
          "target": "5-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-comedor",
      "name": "COMEDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08420131863337588,
          "pitch": 0.31999934288315224,
          "rotation": 0,
          "target": "4-vestibulo"
        },
        {
          "yaw": 1.6091784668547229,
          "pitch": 0.13878776422374273,
          "rotation": 3.141592653589793,
          "target": "6-cocina"
        },
        {
          "yaw": -3.085420999154511,
          "pitch": 0.3080416837661488,
          "rotation": 3.141592653589793,
          "target": "7-recibidor-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cocina",
      "name": "COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6441352743026414,
          "pitch": 0.13319748431846357,
          "rotation": 3.141592653589793,
          "target": "5-comedor"
        },
        {
          "yaw": -0.7675445467846629,
          "pitch": 0.2600724871854041,
          "rotation": 7.0685834705770345,
          "target": "4-vestibulo"
        },
        {
          "yaw": -2.321273852727815,
          "pitch": 0.13740009769271389,
          "rotation": 3.141592653589793,
          "target": "7-recibidor-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-recibidor-ii",
      "name": "RECIBIDOR II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.004286210219017761,
          "pitch": 0.20925281625124725,
          "rotation": 0,
          "target": "5-comedor"
        },
        {
          "yaw": 1.05117730754516,
          "pitch": 0.03407348689742662,
          "rotation": 3.9269908169872414,
          "target": "6-cocina"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
