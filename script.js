TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "panorama_6BFBDCF3_6215_9E73_41CD_C358FCF22E1D",
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "panorama": {
     "id": "panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333",
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": {
        "id": "panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": {
           "id": "panorama_6B1B7FCC_6216_9A94_41D1_15946F9EF20F",
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99",
             "class": "AdjacentPanorama",
             "yaw": -156.44,
             "distance": 1,
             "backwardYaw": 70.76
            }
           ],
           "thumbnailUrl": "media/panorama_6B1B7FCC_6216_9A94_41D1_15946F9EF20F_t.jpg",
           "class": "Panorama",
           "hfov": 360,
           "pitch": 0,
           "partial": false,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_6B1B7FCC_6216_9A94_41D1_15946F9EF20F_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3217,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_6B1B7FCC_6216_9A94_41D1_15946F9EF20F_hq.jpeg"
               },
               {
                "height": 1608,
                "class": "ImageResourceLevel",
                "width": 3217,
                "url": "media/panorama_6B1B7FCC_6216_9A94_41D1_15946F9EF20F.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99, this.camera_76BF07D7_631F_E908_41D7_3FB05E4E46F8); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": -156.44,
                 "hfov": 5.54,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 98,
                    "class": "ImageResourceLevel",
                    "width": 99,
                    "url": "media/panorama_6B1B7FCC_6216_9A94_41D1_15946F9EF20F_0_HS_0_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -7.99
                }
               ],
               "id": "overlay_6C333CAE_6230_FFFF_41D8_8AB8908FDE34",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 49,
                    "class": "ImageResourceLevel",
                    "width": 49,
                    "url": "media/panorama_6B1B7FCC_6216_9A94_41D1_15946F9EF20F_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -156.44,
                 "hfov": 5.54,
                 "pitch": -7.99
                }
               ]
              },
              {
               "yaw": -16.19,
               "bleachingDistance": 0.4,
               "bleaching": 0.97,
               "id": "overlay_6CC05D0D_6302_F918_41B1_F9C911F8E16D",
               "class": "LensFlarePanoramaOverlay",
               "pitch": 46
              }
             ]
            }
           ],
           "hfovMax": 120,
           "label": "4",
           "vfov": 180
          },
          "class": "AdjacentPanorama",
          "yaw": 70.76,
          "distance": 1,
          "backwardYaw": -156.44
         },
         {
          "panorama": "this.panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333",
          "class": "AdjacentPanorama",
          "yaw": -112.03,
          "distance": 1,
          "backwardYaw": 91.21
         }
        ],
        "thumbnailUrl": "media/panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99_t.jpg",
        "class": "Panorama",
        "hfov": 360,
        "pitch": 0,
        "partial": false,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2976,
             "class": "ImageResourceLevel",
             "width": 5952,
             "url": "media/panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_6B1B7FCC_6216_9A94_41D1_15946F9EF20F, this.camera_761C776E_631F_E918_4181_5FFF209FBB41); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": 70.76,
              "hfov": 11.57,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 290,
                 "class": "ImageResourceLevel",
                 "width": 192,
                 "url": "media/panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99_0_HS_0_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -4.67
             }
            ],
            "id": "overlay_6C24F464_6230_0F63_41D1_E4751AA0188C",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 145,
                 "class": "ImageResourceLevel",
                 "width": 96,
                 "url": "media/panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 70.76,
              "hfov": 11.57,
              "pitch": -4.67
             }
            ]
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333, this.camera_7669978A_631F_E918_4199_75E1D7E284B0); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -112.03,
              "hfov": 11.22,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 190,
                 "class": "ImageResourceLevel",
                 "width": 188,
                 "url": "media/panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99_0_HS_1_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -9.27
             }
            ],
            "id": "overlay_6C58E8AE_6230_07FF_41D6_90064F399C50",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 95,
                 "class": "ImageResourceLevel",
                 "width": 94,
                 "url": "media/panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -112.03,
              "hfov": 11.22,
              "pitch": -9.27
             }
            ]
           },
           {
            "yaw": 39.24,
            "bleachingDistance": 0.4,
            "bleaching": 0.97,
            "id": "overlay_6CB9F321_6303_2908_41D0_AB74F2446B91",
            "class": "LensFlarePanoramaOverlay",
            "pitch": 42.76
           }
          ]
         }
        ],
        "hfovMax": 120,
        "label": "3",
        "vfov": 180
       },
       "class": "AdjacentPanorama",
       "yaw": 91.21,
       "distance": 1,
       "backwardYaw": -112.03
      },
      {
       "panorama": {
        "id": "panorama_6B047525_6216_AF94_41AF_6517E2817B2E",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333",
          "class": "AdjacentPanorama",
          "yaw": -95.08,
          "distance": 1,
          "backwardYaw": -156.41
         }
        ],
        "thumbnailUrl": "media/panorama_6B047525_6216_AF94_41AF_6517E2817B2E_t.jpg",
        "class": "Panorama",
        "hfov": 360,
        "pitch": 0,
        "partial": false,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_6B047525_6216_AF94_41AF_6517E2817B2E_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2976,
             "class": "ImageResourceLevel",
             "width": 5952,
             "url": "media/panorama_6B047525_6216_AF94_41AF_6517E2817B2E_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_6B047525_6216_AF94_41AF_6517E2817B2E.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333, this.camera_77CD76CC_631F_EB18_41C2_C4E71D484A30); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -95.08,
              "hfov": 11.35,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 190,
                 "class": "ImageResourceLevel",
                 "width": 188,
                 "url": "media/panorama_6B047525_6216_AF94_41AF_6517E2817B2E_0_HS_0_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -3.75
             }
            ],
            "id": "overlay_6C3AAB91_6230_79A5_41C8_295F6ECCD122",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 95,
                 "class": "ImageResourceLevel",
                 "width": 94,
                 "url": "media/panorama_6B047525_6216_AF94_41AF_6517E2817B2E_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -95.08,
              "hfov": 11.35,
              "pitch": -3.75
             }
            ]
           }
          ]
         }
        ],
        "hfovMax": 120,
        "label": "5",
        "vfov": 180
       },
       "class": "AdjacentPanorama",
       "yaw": -156.41,
       "distance": 1,
       "backwardYaw": -95.08
      },
      {
       "panorama": "this.panorama_6BFBDCF3_6215_9E73_41CD_C358FCF22E1D",
       "class": "AdjacentPanorama",
       "yaw": -96.41,
       "distance": 1,
       "backwardYaw": -10.79
      }
     ],
     "thumbnailUrl": "media/panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333_t.jpg",
     "class": "Panorama",
     "hfov": 360,
     "pitch": 0,
     "partial": false,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2976,
          "class": "ImageResourceLevel",
          "width": 5952,
          "url": "media/panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_6BFBDCF3_6215_9E73_41CD_C358FCF22E1D, this.camera_762DF71F_631F_E938_41BD_FA0AEB402730); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -96.41,
           "hfov": 11.16,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 190,
              "class": "ImageResourceLevel",
              "width": 188,
              "url": "media/panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333_0_HS_0_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -11.17
          }
         ],
         "id": "overlay_6FC6B00B_6230_06A5_41D6_FC74FF599C16",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 95,
              "class": "ImageResourceLevel",
              "width": 94,
              "url": "media/panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -96.41,
           "hfov": 11.16,
           "pitch": -11.17
          }
         ]
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99, this.camera_77C406E9_631F_EB18_4176_9FFF186EA208); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": 91.21,
           "hfov": 11.03,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 290,
              "class": "ImageResourceLevel",
              "width": 188,
              "url": "media/panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333_0_HS_1_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -14.01
          }
         ],
         "id": "overlay_6CB2B73D_6230_0ADD_41C9_7775CFDF61CB",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 145,
              "class": "ImageResourceLevel",
              "width": 94,
              "url": "media/panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 91.21,
           "hfov": 11.03,
           "pitch": -14.01
          }
         ]
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_6B047525_6216_AF94_41AF_6517E2817B2E, this.camera_77DA5703_631F_E908_41C3_93DE0BF7BFDE); this.mainPlayList.set('selectedIndex', 4)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -156.41,
           "hfov": 11.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 190,
              "class": "ImageResourceLevel",
              "width": 188,
              "url": "media/panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333_0_HS_2_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -9.46
          }
         ],
         "id": "overlay_6DE3FA4C_6230_1AA3_41CB_14DBC6A6B0E4",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 95,
              "class": "ImageResourceLevel",
              "width": 94,
              "url": "media/panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -156.41,
           "hfov": 11.22,
           "pitch": -9.46
          }
         ]
        }
       ]
      }
     ],
     "hfovMax": 120,
     "label": "2",
     "vfov": 180
    },
    "class": "AdjacentPanorama",
    "yaw": -10.79,
    "distance": 1,
    "backwardYaw": -96.41
   }
  ],
  "thumbnailUrl": "media/panorama_6BFBDCF3_6215_9E73_41CD_C358FCF22E1D_t.jpg",
  "class": "Panorama",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6BFBDCF3_6215_9E73_41CD_C358FCF22E1D_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2976,
       "class": "ImageResourceLevel",
       "width": 5952,
       "url": "media/panorama_6BFBDCF3_6215_9E73_41CD_C358FCF22E1D_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_6BFBDCF3_6215_9E73_41CD_C358FCF22E1D.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333, this.camera_7682B7F2_631F_E908_41CF_C0F4BEA5CC8E); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -10.79,
        "hfov": 7.06,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "class": "ImageResourceLevel",
           "width": 117,
           "url": "media/panorama_6BFBDCF3_6215_9E73_41CD_C358FCF22E1D_0_HS_1_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -4.34
       }
      ],
      "id": "overlay_6C148C66_6230_3F6F_41B7_F812C786E944",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 58,
           "url": "media/panorama_6BFBDCF3_6215_9E73_41CD_C358FCF22E1D_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -10.79,
        "hfov": 7.06,
        "pitch": -4.34
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 120,
  "label": "1",
  "vfov": 180
 },
 {
  "mouseControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 172.57,
   "pitch": -0.38
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -104.95,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -35.52
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -41.33,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -9.24
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -9.14,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -2.19
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 25.52,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -10.57
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 81.71,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -12.48
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 133.52,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -11.52
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -19.62,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -2.38
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_6BFBDCF3_6215_9E73_41CD_C358FCF22E1D_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.1,
   "pitch": -4
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 111.24,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -51.33
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 142.29,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 0.29
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 169.9,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -29.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -151.43,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -5.24
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -113.71,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -8.48
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -92.57,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -1.43
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -72.76,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -13.62
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -48.38,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -17.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 0.19,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -10
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 80.38,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -0.48
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 70.78,
   "pitch": -2.14
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 16.95,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -1.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 132.38,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 1.62
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -174.29,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 7.9
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -142.67,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -47.71
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -14.86,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -24.29
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 42.48,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 3.52
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_6B1B7FCC_6216_9A94_41D1_15946F9EF20F",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 15.05,
   "pitch": 3.05
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -49.33,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -3.9
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 92.19,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 1.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -155.43,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -14.19
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_6B1B7FCC_6216_9A94_41D1_15946F9EF20F_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_6B047525_6216_AF94_41AF_6517E2817B2E",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 64.71,
   "pitch": -23.95
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 22.29,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -21.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 88.38,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -5.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -95.62,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -5.81
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -35.05,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -1.62
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_6B047525_6216_AF94_41AF_6517E2817B2E_camera",
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_697F5EE0_6230_3B63_4199_7F34A66C6065",
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "panorama": {
     "id": "panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1",
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_697F5EE0_6230_3B63_4199_7F34A66C6065",
       "class": "AdjacentPanorama",
       "yaw": 150.42,
       "distance": 1,
       "backwardYaw": 133.5
      },
      {
       "panorama": {
        "id": "panorama_68D02300_6230_0AA3_41CB_7F30F51B05F6",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1",
          "class": "AdjacentPanorama",
          "yaw": 118.83,
          "distance": 1,
          "backwardYaw": -134.12
         }
        ],
        "thumbnailUrl": "media/panorama_68D02300_6230_0AA3_41CB_7F30F51B05F6_t.jpg",
        "class": "Panorama",
        "hfov": 360,
        "pitch": 0,
        "partial": false,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_68D02300_6230_0AA3_41CB_7F30F51B05F6_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2976,
             "class": "ImageResourceLevel",
             "width": 5952,
             "url": "media/panorama_68D02300_6230_0AA3_41CB_7F30F51B05F6_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_68D02300_6230_0AA3_41CB_7F30F51B05F6.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1, this.camera_7631C755_631F_E908_41B0_2619C3D76C6F); this.mainPlayList.set('selectedIndex', 6)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": 118.83,
              "hfov": 11.18,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 190,
                 "class": "ImageResourceLevel",
                 "width": 188,
                 "url": "media/panorama_68D02300_6230_0AA3_41CB_7F30F51B05F6_0_HS_0_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -10.41
             }
            ],
            "id": "overlay_6C242E60_6230_1B63_41CA_2B8F32A19420",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 95,
                 "class": "ImageResourceLevel",
                 "width": 94,
                 "url": "media/panorama_68D02300_6230_0AA3_41CB_7F30F51B05F6_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 118.83,
              "hfov": 11.18,
              "pitch": -10.41
             }
            ]
           }
          ]
         }
        ],
        "hfovMax": 120,
        "label": "8",
        "vfov": 180
       },
       "class": "AdjacentPanorama",
       "yaw": -134.12,
       "distance": 1,
       "backwardYaw": 118.83
      }
     ],
     "thumbnailUrl": "media/panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1_t.jpg",
     "class": "Panorama",
     "hfov": 360,
     "pitch": 0,
     "partial": false,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2976,
          "class": "ImageResourceLevel",
          "width": 5952,
          "url": "media/panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_68D02300_6230_0AA3_41CB_7F30F51B05F6, this.camera_7659B7BF_631F_E978_41CF_6B66FE31E8AF); this.mainPlayList.set('selectedIndex', 7)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -134.12,
           "hfov": 10.74,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 190,
              "class": "ImageResourceLevel",
              "width": 188,
              "url": "media/panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1_0_HS_0_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -19.17
          }
         ],
         "id": "overlay_6FB34F6E_6230_197F_41D7_2622D4FBE091",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 95,
              "class": "ImageResourceLevel",
              "width": 94,
              "url": "media/panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -134.12,
           "hfov": 10.74,
           "pitch": -19.17
          }
         ]
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_697F5EE0_6230_3B63_4199_7F34A66C6065, this.camera_7670F7A4_631F_E908_41CC_A9EF56B9EDE7); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": 150.42,
           "hfov": 17.13,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 290,
              "class": "ImageResourceLevel",
              "width": 288,
              "url": "media/panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1_0_HS_1_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -10.39
          }
         ],
         "id": "overlay_6C0EF77B_6230_0965_41C0_6FD04BB527CD",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 145,
              "class": "ImageResourceLevel",
              "width": 144,
              "url": "media/panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 150.42,
           "hfov": 17.13,
           "pitch": -10.39
          }
         ]
        },
        {
         "yaw": 11.62,
         "bleachingDistance": 0.4,
         "bleaching": 0.97,
         "id": "overlay_6CC81AF0_6301_5B09_41C0_7F39E04F2ACC",
         "class": "LensFlarePanoramaOverlay",
         "pitch": 45.05
        }
       ]
      }
     ],
     "hfovMax": 120,
     "label": "7",
     "vfov": 180
    },
    "class": "AdjacentPanorama",
    "yaw": 133.5,
    "distance": 1,
    "backwardYaw": 150.42
   }
  ],
  "thumbnailUrl": "media/panorama_697F5EE0_6230_3B63_4199_7F34A66C6065_t.jpg",
  "class": "Panorama",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_697F5EE0_6230_3B63_4199_7F34A66C6065_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2976,
       "class": "ImageResourceLevel",
       "width": 5952,
       "url": "media/panorama_697F5EE0_6230_3B63_4199_7F34A66C6065_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_697F5EE0_6230_3B63_4199_7F34A66C6065.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1, this.camera_7620B73A_631F_E978_418B_18041EF7FB4C); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 133.5,
        "hfov": 11.03,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 190,
           "class": "ImageResourceLevel",
           "width": 188,
           "url": "media/panorama_697F5EE0_6230_3B63_4199_7F34A66C6065_0_HS_0_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -14.03
       }
      ],
      "id": "overlay_6F92AD04_6230_1EA3_41D6_6F8F767A2905",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 95,
           "class": "ImageResourceLevel",
           "width": 94,
           "url": "media/panorama_697F5EE0_6230_3B63_4199_7F34A66C6065_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 133.5,
        "hfov": 11.03,
        "pitch": -14.03
       }
      ]
     },
     {
      "yaw": -173.9,
      "bleachingDistance": 0.4,
      "bleaching": 0.97,
      "id": "overlay_734ED8BE_6301_2779_41C6_C403ACCB030C",
      "class": "LensFlarePanoramaOverlay",
      "pitch": 43.14
     }
    ]
   }
  ],
  "hfovMax": 120,
  "label": "6",
  "vfov": 180
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -23.24,
   "pitch": -2.29
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 23.24,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 4.67
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 107.43,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -11.33
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 164.76,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -3.9
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -2.1,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 2.95
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_697F5EE0_6230_3B63_4199_7F34A66C6065_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -19.62,
   "pitch": -4.76
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 112.19,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 2
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -134.48,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -19.14
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_68D02300_6230_0AA3_41CB_7F30F51B05F6",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.95,
   "pitch": -19.05
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 149.71,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -13.81
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -149.14,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -19.52
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -82.67,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -7.71
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 24.95,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -14
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_68D02300_6230_0AA3_41CB_7F30F51B05F6_camera",
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6BFBDCF3_6215_9E73_41CD_C358FCF22E1D_camera",
    "media": "this.panorama_6BFBDCF3_6215_9E73_41CD_C358FCF22E1D"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333_camera",
    "media": "this.panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99_camera",
    "media": "this.panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6B1B7FCC_6216_9A94_41D1_15946F9EF20F_camera",
    "media": "this.panorama_6B1B7FCC_6216_9A94_41D1_15946F9EF20F"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6B047525_6216_AF94_41AF_6517E2817B2E_camera",
    "media": "this.panorama_6B047525_6216_AF94_41AF_6517E2817B2E"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_697F5EE0_6230_3B63_4199_7F34A66C6065_camera",
    "media": "this.panorama_697F5EE0_6230_3B63_4199_7F34A66C6065"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1_camera",
    "media": "this.panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_68D02300_6230_0AA3_41CB_7F30F51B05F6_camera",
    "media": "this.panorama_68D02300_6230_0AA3_41CB_7F30F51B05F6"
   }
  ]
 },
 {
  "id": "playList_6C27A20F_622F_6594_41D1_0D182316BF2E",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.playList_6C27A20F_622F_6594_41D1_0D182316BF2E, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6BFBDCF3_6215_9E73_41CD_C358FCF22E1D_camera",
    "media": "this.panorama_6BFBDCF3_6215_9E73_41CD_C358FCF22E1D"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_6C27A20F_622F_6594_41D1_0D182316BF2E, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333_camera",
    "media": "this.panorama_6B01DF9F_6215_7AB4_41C6_04C5D8ED4333"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_6C27A20F_622F_6594_41D1_0D182316BF2E, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99_camera",
    "media": "this.panorama_6B1B77AB_6215_6A9C_41D4_C09045094F99"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_6C27A20F_622F_6594_41D1_0D182316BF2E, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6B1B7FCC_6216_9A94_41D1_15946F9EF20F_camera",
    "media": "this.panorama_6B1B7FCC_6216_9A94_41D1_15946F9EF20F"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_6C27A20F_622F_6594_41D1_0D182316BF2E, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6B047525_6216_AF94_41AF_6517E2817B2E_camera",
    "media": "this.panorama_6B047525_6216_AF94_41AF_6517E2817B2E"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_6C27A20F_622F_6594_41D1_0D182316BF2E, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_697F5EE0_6230_3B63_4199_7F34A66C6065_camera",
    "media": "this.panorama_697F5EE0_6230_3B63_4199_7F34A66C6065"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_6C27A20F_622F_6594_41D1_0D182316BF2E, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1_camera",
    "media": "this.panorama_68D31B1F_6230_1ADD_41AB_1A1AA84A59B1"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_6C27A20F_622F_6594_41D1_0D182316BF2E, 7, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_68D02300_6230_0AA3_41CB_7F30F51B05F6_camera",
    "media": "this.panorama_68D02300_6230_0AA3_41CB_7F30F51B05F6"
   }
  ]
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 23.59,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 42.45,
     "pitchSpeed": 21.63,
     "targetYaw": 90.1,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -4
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 111.24,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -51.33
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 142.29,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 0.29
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 169.9,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -29.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -151.43,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -5.24
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -113.71,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -8.48
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -92.57,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -1.43
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -72.76,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -13.62
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -48.38,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -17.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 0.19,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -10
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 80.38,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -0.48
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_77CD76CC_631F_EB18_41C2_C4E71D484A30",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 67.97,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 3.12,
     "pitchSpeed": 2.05,
     "targetYaw": 70.78,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -2.14
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 16.95,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -1.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 132.38,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 1.62
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -174.29,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 7.9
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -142.67,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -47.71
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -14.86,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -24.29
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 42.48,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 3.52
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_77C406E9_631F_EB18_4176_9FFF186EA208",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 84.92,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 24.77,
     "pitchSpeed": 12.83,
     "targetYaw": 64.71,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -23.95
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 22.29,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -21.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 88.38,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -5.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -95.62,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -5.81
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -35.05,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -1.62
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_77DA5703_631F_E908_41C3_93DE0BF7BFDE",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 169.21,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 1.39,
     "pitchSpeed": 1.19,
     "targetYaw": 172.57,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -0.38
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -104.95,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -35.52
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -41.33,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -9.24
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -9.14,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -2.19
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 25.52,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -10.57
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 81.71,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -12.48
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 133.52,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -11.52
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -19.62,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -2.38
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_762DF71F_631F_E938_41BD_FA0AEB402730",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -29.58,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 3.7,
     "pitchSpeed": 2.34,
     "targetYaw": -19.62,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -4.76
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 112.19,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 2
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -134.48,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -19.14
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7620B73A_631F_E978_418B_18041EF7FB4C",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 45.88,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 17.05,
     "pitchSpeed": 8.99,
     "targetYaw": -19.62,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -4.76
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 112.19,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 2
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -134.48,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -19.14
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7631C755_631F_E908_41B0_2619C3D76C6F",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 23.56,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 5.5,
     "pitchSpeed": 3.24,
     "targetYaw": 15.05,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 3.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -49.33,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -3.9
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 92.19,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 1.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -155.43,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -14.19
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_761C776E_631F_E918_4181_5FFF209FBB41",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -88.79,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 112.31,
     "pitchSpeed": 56.4,
     "targetYaw": 90.1,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -4
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 111.24,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -51.33
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 142.29,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 0.29
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 169.9,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -29.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -151.43,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -5.24
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -113.71,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -8.48
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -92.57,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -1.43
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -72.76,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -13.62
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -48.38,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -17.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 0.19,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -10
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 80.38,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -0.48
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7669978A_631F_E918_4199_75E1D7E284B0",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -46.5,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 17.04,
     "pitchSpeed": 8.98,
     "targetYaw": -23.24,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -2.29
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 23.24,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 4.67
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 107.43,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -11.33
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 164.76,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -3.9
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -2.1,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 2.95
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7670F7A4_631F_E908_41CC_A9EF56B9EDE7",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -61.17,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 10.31,
     "pitchSpeed": 5.63,
     "targetYaw": -16.95,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -19.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 149.71,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -13.81
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -149.14,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -19.52
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -82.67,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -7.71
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 24.95,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -14
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7659B7BF_631F_E978_41CF_6B66FE31E8AF",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -109.24,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 108.84,
     "pitchSpeed": 54.67,
     "targetYaw": 70.78,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -2.14
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 16.95,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -1.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 132.38,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 1.62
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -174.29,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 7.9
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -142.67,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -47.71
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -14.86,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -24.29
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 42.48,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 3.52
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_76BF07D7_631F_E908_41D7_3FB05E4E46F8",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 83.59,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 5.75,
     "pitchSpeed": 3.36,
     "targetYaw": 90.1,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -4
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 111.24,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -51.33
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 142.29,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 0.29
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 169.9,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -29.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -151.43,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -5.24
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -113.71,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -8.48
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -92.57,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -1.43
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -72.76,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -13.62
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": -48.38,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -17.05
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 0.19,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -10
    },
    {
     "easing": "cubic_in_out",
     "path": "shortest",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "targetYaw": 80.38,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -0.48
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7682B7F2_631F_E908_41CF_C0F4BEA5CC8E",
  "class": "PanoramaCamera"
 },
 {
  "audio": {
   "mp3Url": "media/audio_77FEE586_6301_2908_41C1_B00E488C36BF.mp3",
   "oggUrl": "media/audio_77FEE586_6301_2908_41C1_B00E488C36BF.ogg",
   "class": "AudioResource"
  },
  "id": "audio_77FEE586_6301_2908_41C1_B00E488C36BF",
  "autoplay": true,
  "class": "MediaAudio"
 }
], "children": [
 {
  "transitionMode": "blending",
  "toolTipTextShadowBlurRadius": 3,
  "paddingRight": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingBottom": 4,
  "shadow": false,
  "paddingBottom": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "progressLeft": 0,
  "toolTipTextShadowOpacity": 0,
  "width": "100%",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "paddingTop": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowVerticalLength": 0,
  "height": "100%",
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingRight": 6,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarLeft": 0,
  "toolTipFontStyle": "normal",
  "paddingLeft": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "progressRight": 0,
  "progressOpacity": 1,
  "progressBarBorderColor": "#000000",
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontWeight": "normal",
  "toolTipFontFamily": "Arial",
  "id": "MainViewer",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipBorderSize": 1,
  "progressBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "class": "ViewerArea",
  "minHeight": 50,
  "playbackBarBottom": 5,
  "toolTipPaddingLeft": 6,
  "progressBackgroundOpacity": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "borderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBorderColor": "#000000",
  "progressBarOpacity": 1,
  "minWidth": 100,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBottom": 0,
  "progressHeight": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeight": 10,
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderSize": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "borderSize": 0,
  "playbackBarRight": 0,
  "progressBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "toolTipShadowColor": "#333333"
 },
 {
  "bottom": 0,
  "gap": 10,
  "scrollBarColor": "#000000",
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "horizontalAlign": "center",
  "class": "Container",
  "minHeight": 20,
  "shadow": false,
  "overflow": "visible",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "children": [
   {
    "itemThumbnailShadowSpread": 1,
    "itemThumbnailScaleMode": "fit_outside",
    "layout": "horizontal",
    "itemBackgroundOpacity": 0,
    "selectedItemLabelFontWeight": "bold",
    "itemThumbnailHeight": 50,
    "backgroundColor": [
     "#000000"
    ],
    "itemPaddingBottom": 3,
    "itemPaddingRight": 3,
    "scrollBarColor": "#FFFFFF",
    "itemLabelFontColor": "#FFFFFF",
    "paddingRight": 20,
    "scrollBarOpacity": 0.5,
    "backgroundColorDirection": "vertical",
    "itemBorderRadius": 0,
    "class": "ThumbnailList",
    "minHeight": 0,
    "itemPaddingTop": 3,
    "itemThumbnailBorderRadius": 5,
    "horizontalAlign": "left",
    "shadow": false,
    "gap": 10,
    "itemHorizontalAlign": "center",
    "itemBackgroundColorDirection": "vertical",
    "borderRadius": 5,
    "itemMode": "normal",
    "backgroundOpacity": 0.2,
    "itemPaddingLeft": 3,
    "minWidth": 0,
    "paddingBottom": 10,
    "itemThumbnailShadowOpacity": 0.8,
    "borderSize": 0,
    "itemLabelFontStyle": "normal",
    "itemBackgroundColorRatios": [],
    "itemLabelPosition": "bottom",
    "itemOpacity": 1,
    "itemThumbnailShadowBlurRadius": 4,
    "backgroundColorRatios": [
     0
    ],
    "itemLabelFontWeight": "normal",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "itemThumbnailOpacity": 1,
    "itemBackgroundColor": [],
    "paddingTop": 10,
    "itemThumbnailShadowHorizontalLength": 3,
    "verticalAlign": "top",
    "itemThumbnailShadow": true,
    "playList": "this.playList_6C27A20F_622F_6594_41D1_0D182316BF2E",
    "itemVerticalAlign": "middle",
    "itemThumbnailShadowVerticalLength": 3,
    "itemThumbnailShadowColor": "#000000",
    "itemLabelFontSize": 14,
    "paddingLeft": 20,
    "itemLabelGap": 5,
    "itemLabelTextDecoration": "none",
    "scrollBarMargin": 2,
    "itemLabelFontFamily": "Arial",
    "itemLabelHorizontalAlign": "center",
    "maxHeight": 600,
    "maxWidth": 800
   },
   {
    "layout": "horizontal",
    "id": "Button_71A804D7_6301_6F08_41B0_4FD676BE2AC2",
    "backgroundColor": [
     "#5794FE",
     "#0065CD"
    ],
    "textDecoration": "none",
    "paddingRight": 0,
    "iconBeforeLabel": true,
    "mode": "toggle",
    "horizontalAlign": "center",
    "shadowSpread": 1,
    "class": "Button",
    "minHeight": 0,
    "iconWidth": 40,
    "backgroundColorDirection": "vertical",
    "shadow": false,
    "shadowBlurRadius": 6,
    "rollOverIconWidth": 40,
    "borderRadius": 0,
    "fontColor": "#FFFFFF",
    "backgroundOpacity": 0,
    "rollOverIconHeight": 40,
    "minWidth": 0,
    "paddingBottom": 0,
    "fontWeight": "normal",
    "verticalAlign": "middle",
    "pressedIconHeight": 40,
    "fontFamily": "Arial",
    "borderColor": "#000000",
    "backgroundColorRatios": [
     0,
     1
    ],
    "cursor": "hand",
    "width": 76,
    "height": 103.5,
    "paddingTop": 0,
    "gap": 0,
    "pressedBackgroundOpacity": 0,
    "shadowColor": "#000000",
    "fontSize": 12,
    "fontStyle": "normal",
    "paddingLeft": 0,
    "borderSize": 0,
    "pressedIconWidth": 40,
    "iconHeight": 40,
    "iconURL": "skin/Button_71A804D7_6301_6F08_41B0_4FD676BE2AC2.png",
    "pressedIconURL": "skin/Button_71A804D7_6301_6F08_41B0_4FD676BE2AC2_pressed.png",
    "rollOverBackgroundOpacity": 0
   }
  ],
  "minWidth": 20,
  "paddingBottom": 0,
  "contentOpaque": false,
  "verticalAlign": "bottom",
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "height": 200,
  "paddingTop": 0,
  "paddingLeft": 0,
  "left": 0,
  "borderSize": 0,
  "scrollBarMargin": 2,
  "right": 0,
  "layout": "horizontal"
 }
], 
 "start": "this.playAudioList([this.audio_77FEE586_6301_2908_41C1_B00E488C36BF]); this.syncPlaylists([this.playList_6C27A20F_622F_6594_41D1_0D182316BF2E,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "id": "rootPlayer",
 "scripts": {
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "registerKey": function(key, value){  window[key] = value; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "unregisterKey": function(key){  delete window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); }
 },
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "minHeight": 20,
 "shadow": false,
 "gap": 10,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "paddingBottom": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "paddingTop": 0,
 "height": "100%",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "mouseWheelEnabled": true,
 "buttonToggleMute": "this.Button_71A804D7_6301_6F08_41B0_4FD676BE2AC2"
})