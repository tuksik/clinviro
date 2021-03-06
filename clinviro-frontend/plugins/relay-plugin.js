/* global require: false */
var getBabelRelayPlugin = require('babel-relay-plugin');
var schema = {
  "__schema": {
    "directives": [
      {
        "args": [
          {
            "defaultValue": null,
            "description": "Included when true.",
            "name": "if",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          }
        ],
        "description": "Directs the executor to include this field or fragment only when the `if` argument is true.",
        "locations": [
          "FIELD",
          "FRAGMENT_SPREAD",
          "INLINE_FRAGMENT"
        ],
        "name": "include"
      },
      {
        "args": [
          {
            "defaultValue": null,
            "description": "Skipped when true.",
            "name": "if",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          }
        ],
        "description": "Directs the executor to skip this field or fragment when the `if` argument is true.",
        "locations": [
          "FIELD",
          "FRAGMENT_SPREAD",
          "INLINE_FRAGMENT"
        ],
        "name": "skip"
      }
    ],
    "mutationType": {
      "name": "Mutation"
    },
    "queryType": {
      "name": "Viewer"
    },
    "subscriptionType": null,
    "types": [
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ],
            "deprecationReason": null,
            "description": "The ID of the object",
            "isDeprecated": false,
            "name": "node",
            "type": {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "ptnums",
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "namePrefix",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "nameFuzzymatch",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "mrid",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "birthdayStart",
                "type": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "birthdayEnd",
                "type": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "patients",
            "type": {
              "kind": "OBJECT",
              "name": "PatientConnection",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "ids",
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "sampleIds",
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "ptnums",
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "namePrefix",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "clinicPrefix",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "physicianNamePrefix",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "mrid",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "vnum",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "collectedAtStart",
                "type": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "collectedAtEnd",
                "type": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "receivedAtStart",
                "type": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "receivedAtEnd",
                "type": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "enteredAtStart",
                "type": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "enteredAtEnd",
                "type": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "PatientVisitsOrderByEnum",
                    "ofType": null
                  }
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "patientVisits",
            "type": {
              "kind": "OBJECT",
              "name": "PatientVisitConnection",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "namePrefix",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "contextualPtnum",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "clinics",
            "type": {
              "kind": "OBJECT",
              "name": "ClinicConnection",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "namePrefix",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "contextualPtnum",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "physicians",
            "type": {
              "kind": "OBJECT",
              "name": "PhysicianConnection",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "ids",
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "enteredAfter",
                "type": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "enteredBefore",
                "type": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "positiveControls",
            "type": {
              "kind": "OBJECT",
              "name": "PositiveControlConnection",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "ids",
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "source",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "vnumPrefix",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "receivedAfter",
                "type": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "receivedBefore",
                "type": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "proficiencySamples",
            "type": {
              "kind": "OBJECT",
              "name": "ProficiencySampleConnection",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "viewer",
            "type": {
              "kind": "OBJECT",
              "name": "Viewer",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "version",
            "type": {
              "kind": "OBJECT",
              "name": "Version",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "userAuthenticated",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "sequenceId",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "naseq",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "enteredBefore",
                "type": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "removePositiveControls",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "ptnumExclude",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "similarSequences",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "SimilarSequence",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "Viewer",
        "possibleTypes": null
      },
      {
        "description": "An object with an ID",
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "The ID of the object.",
            "isDeprecated": false,
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "kind": "INTERFACE",
        "name": "Node",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Patient",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PatientVisit",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Physician",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Clinic",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "PositiveControl",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "ProficiencySample",
            "ofType": null
          }
        ]
      },
      {
        "description": "The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `\"4\"`) or integer (such as `4`) input value will be accepted as an ID.",
        "enumValues": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "kind": "SCALAR",
        "name": "ID",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "edges",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PatientEdge",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "PatientConnection",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "When paginating forwards, are there more items?",
            "isDeprecated": false,
            "name": "hasNextPage",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "When paginating backwards, are there more items?",
            "isDeprecated": false,
            "name": "hasPreviousPage",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "When paginating backwards, the cursor to continue.",
            "isDeprecated": false,
            "name": "startCursor",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "When paginating forwards, the cursor to continue.",
            "isDeprecated": false,
            "name": "endCursor",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "PageInfo",
        "possibleTypes": null
      },
      {
        "description": "The `Boolean` scalar type represents `true` or `false`.",
        "enumValues": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "kind": "SCALAR",
        "name": "Boolean",
        "possibleTypes": null
      },
      {
        "description": "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
        "enumValues": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "kind": "SCALAR",
        "name": "String",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "The item at the end of the edge",
            "isDeprecated": false,
            "name": "node",
            "type": {
              "kind": "OBJECT",
              "name": "Patient",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "A cursor for use in pagination",
            "isDeprecated": false,
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "PatientEdge",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "Alias of ptnum",
            "isDeprecated": false,
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "patient record unique identifier (UID)",
            "isDeprecated": false,
            "name": "ptnum",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "patient lastname",
            "isDeprecated": false,
            "name": "lastname",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "patient firstname",
            "isDeprecated": false,
            "name": "firstname",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "patient birthday",
            "isDeprecated": false,
            "name": "birthday",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "patient unique identifier (PtID) in HIVDB2",
            "isDeprecated": false,
            "name": "hivdbPtid",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "date and time this patient record was created",
            "isDeprecated": false,
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "visits",
            "type": {
              "kind": "OBJECT",
              "name": "PatientVisitConnection",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "medicalRecords",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "MedicalRecord",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "kind": "OBJECT",
        "name": "Patient",
        "possibleTypes": null
      },
      {
        "description": "\n    The `DateTime` scalar type represents a DateTime\n    value as specified by\n    [iso8601](https://en.wikipedia.org/wiki/ISO_8601).\n    ",
        "enumValues": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "kind": "SCALAR",
        "name": "DateTime",
        "possibleTypes": null
      },
      {
        "description": "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^53 - 1) and 2^53 - 1 since represented in JSON as double-precision floating point numbers specifiedby [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point).",
        "enumValues": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "kind": "SCALAR",
        "name": "Int",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "edges",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PatientVisitEdge",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "PatientVisitConnection",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "The item at the end of the edge",
            "isDeprecated": false,
            "name": "node",
            "type": {
              "kind": "OBJECT",
              "name": "PatientVisit",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "A cursor for use in pagination",
            "isDeprecated": false,
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "PatientVisitEdge",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "The ID of the object.",
            "isDeprecated": false,
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "patient UID, a foreign key to tbl_patients",
            "isDeprecated": false,
            "name": "ptnum",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "medical record number",
            "isDeprecated": false,
            "name": "mrid",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "date the samples were collected",
            "isDeprecated": false,
            "name": "collectedAt",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "patient",
            "type": {
              "kind": "OBJECT",
              "name": "Patient",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "samples",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PatientSample",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "number of samples collected in this visit",
            "isDeprecated": false,
            "name": "samplesCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "kind": "OBJECT",
        "name": "PatientVisit",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "sample UID",
            "isDeprecated": false,
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "accession number",
            "isDeprecated": false,
            "name": "vnum",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "test code",
            "isDeprecated": false,
            "name": "testCode",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "specimenType",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "SPECIMEN_TYPE_CHOICES",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "patientVisitId",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "sequenceId",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "sample could be amplified or not. Which indicates if this record has a sequence or not",
            "isDeprecated": false,
            "name": "amplifiable",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "notes for physician",
            "isDeprecated": false,
            "name": "notes",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "laboratory notes",
            "isDeprecated": false,
            "name": "labnotes",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "date the results were received",
            "isDeprecated": false,
            "name": "receivedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "date and time this record was entered",
            "isDeprecated": false,
            "name": "enteredAt",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "visit",
            "type": {
              "kind": "OBJECT",
              "name": "PatientVisit",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "sequence",
            "type": {
              "kind": "OBJECT",
              "name": "Sequence",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "reports",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Report",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "physician",
            "type": {
              "kind": "OBJECT",
              "name": "Physician",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "clinic",
            "type": {
              "kind": "OBJECT",
              "name": "Clinic",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "physician UID, a foreign key to tbl_physicians",
            "isDeprecated": false,
            "name": "physicianId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "clinic UID, a foreign key to tbl_clinics",
            "isDeprecated": false,
            "name": "clinicId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "Latest reports (if existing)",
            "isDeprecated": false,
            "name": "latestReports",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Report",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "Is the latest reports got approved or not",
            "isDeprecated": false,
            "name": "isApproved",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "PatientSample",
        "possibleTypes": null
      },
      {
        "description": "specimen type",
        "enumValues": [
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "plasma"
          }
        ],
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "kind": "ENUM",
        "name": "SPECIMEN_TYPE_CHOICES",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "sequence UID",
            "isDeprecated": false,
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "DNA sequence",
            "isDeprecated": false,
            "name": "naseq",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "subtype of this sequence",
            "isDeprecated": false,
            "name": "subtype",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "genes found in this sequence",
            "isDeprecated": false,
            "name": "genes",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "input FASTA file name",
            "isDeprecated": false,
            "name": "filename",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "Sequence",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "report UID",
            "isDeprecated": false,
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "content file where the report stored",
            "isDeprecated": false,
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "JSONString",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "contentType",
            "type": {
              "kind": "ENUM",
              "name": "TBL_REPORTS_CONTENT_TYPE",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "status",
            "type": {
              "kind": "ENUM",
              "name": "TBL_REPORTS_STATUS",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "Datetime this report get created",
            "isDeprecated": false,
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "Report",
        "possibleTypes": null
      },
      {
        "description": "JSON String",
        "enumValues": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "kind": "SCALAR",
        "name": "JSONString",
        "possibleTypes": null
      },
      {
        "description": "content type",
        "enumValues": [
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "docx"
          },
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "pdf"
          },
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "json"
          }
        ],
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "kind": "ENUM",
        "name": "TBL_REPORTS_CONTENT_TYPE",
        "possibleTypes": null
      },
      {
        "description": "report status",
        "enumValues": [
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "approved"
          },
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "failed"
          },
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "pending"
          }
        ],
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "kind": "ENUM",
        "name": "TBL_REPORTS_STATUS",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "The ID of the object.",
            "isDeprecated": false,
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "physician lastname",
            "isDeprecated": false,
            "name": "lastname",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "physician firstname",
            "isDeprecated": false,
            "name": "firstname",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "kind": "OBJECT",
        "name": "Physician",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "The ID of the object.",
            "isDeprecated": false,
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "clinic name",
            "isDeprecated": false,
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "canonicalId",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "true if this record active, else not",
            "isDeprecated": false,
            "name": "isActive",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "canonical",
            "type": {
              "kind": "OBJECT",
              "name": "Clinic",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "defaultValue": null,
                "description": null,
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "aliases",
            "type": {
              "kind": "OBJECT",
              "name": "ClinicConnection",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "kind": "OBJECT",
        "name": "Clinic",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "edges",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ClinicEdge",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "ClinicConnection",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "The item at the end of the edge",
            "isDeprecated": false,
            "name": "node",
            "type": {
              "kind": "OBJECT",
              "name": "Clinic",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "A cursor for use in pagination",
            "isDeprecated": false,
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "ClinicEdge",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "medical record number",
            "isDeprecated": false,
            "name": "mrid",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "patient UID, a foreign key to tbl_patients",
            "isDeprecated": false,
            "name": "ptnum",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "number of visits referring this MRN",
            "isDeprecated": false,
            "name": "visitsCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "MedicalRecord",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": [
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "id_asc"
          },
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "id_desc"
          },
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "ptnum_asc"
          },
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "ptnum_desc"
          },
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "collected_at_asc"
          },
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "collected_at_desc"
          }
        ],
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "kind": "ENUM",
        "name": "PatientVisitsOrderByEnum",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "edges",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PhysicianEdge",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "PhysicianConnection",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "The item at the end of the edge",
            "isDeprecated": false,
            "name": "node",
            "type": {
              "kind": "OBJECT",
              "name": "Physician",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "A cursor for use in pagination",
            "isDeprecated": false,
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "PhysicianEdge",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "edges",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PositiveControlEdge",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "PositiveControlConnection",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "The item at the end of the edge",
            "isDeprecated": false,
            "name": "node",
            "type": {
              "kind": "OBJECT",
              "name": "PositiveControl",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "A cursor for use in pagination",
            "isDeprecated": false,
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "PositiveControlEdge",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "The ID of the object.",
            "isDeprecated": false,
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "note for this positive control",
            "isDeprecated": false,
            "name": "note",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "lot number",
            "isDeprecated": false,
            "name": "lotNumber",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "test code",
            "isDeprecated": false,
            "name": "testCode",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "specimenType",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "SPECIMEN_TYPE_CHOICES",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "sequence UID, a foreign key to tbl_sequences",
            "isDeprecated": false,
            "name": "sequenceId",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "laboratory notes",
            "isDeprecated": false,
            "name": "labnotes",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "date the sample was entered",
            "isDeprecated": false,
            "name": "enteredAt",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "sequence",
            "type": {
              "kind": "OBJECT",
              "name": "Sequence",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "reports",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Report",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "Latest reports (if existing)",
            "isDeprecated": false,
            "name": "latestReports",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Report",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "Is the latest reports got approved or not",
            "isDeprecated": false,
            "name": "isApproved",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "kind": "OBJECT",
        "name": "PositiveControl",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "edges",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ProficiencySampleEdge",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "ProficiencySampleConnection",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "The item at the end of the edge",
            "isDeprecated": false,
            "name": "node",
            "type": {
              "kind": "OBJECT",
              "name": "ProficiencySample",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "A cursor for use in pagination",
            "isDeprecated": false,
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "ProficiencySampleEdge",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "The ID of the object.",
            "isDeprecated": false,
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "sample name / id from source",
            "isDeprecated": false,
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "proficiency sample source",
            "isDeprecated": false,
            "name": "source",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "accession number",
            "isDeprecated": false,
            "name": "vnum",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "test code",
            "isDeprecated": false,
            "name": "testCode",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "sequenceId",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "notes for physician",
            "isDeprecated": false,
            "name": "notes",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "laboratory notes",
            "isDeprecated": false,
            "name": "labnotes",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "date the results were received",
            "isDeprecated": false,
            "name": "receivedAt",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "date and time this record was entered",
            "isDeprecated": false,
            "name": "enteredAt",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "sequence",
            "type": {
              "kind": "OBJECT",
              "name": "Sequence",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "reports",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Report",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "Latest reports (if existing)",
            "isDeprecated": false,
            "name": "latestReports",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Report",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "Is the latest reports got approved or not",
            "isDeprecated": false,
            "name": "isApproved",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node",
            "ofType": null
          }
        ],
        "kind": "OBJECT",
        "name": "ProficiencySample",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "text",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "date",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "Version",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ControlSequenceType",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "patientSample",
            "type": {
              "kind": "OBJECT",
              "name": "PatientSample",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "positiveControl",
            "type": {
              "kind": "OBJECT",
              "name": "PositiveControl",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "proficiencySample",
            "type": {
              "kind": "OBJECT",
              "name": "ProficiencySample",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "enteredAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "pident",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "length",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "mismatch",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "SimilarSequence",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": [
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "patient_sample"
          },
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "proficiency_sample"
          },
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "positive_control"
          }
        ],
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "kind": "ENUM",
        "name": "ControlSequenceType",
        "possibleTypes": null
      },
      {
        "description": "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). ",
        "enumValues": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "kind": "SCALAR",
        "name": "Float",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreatePatientInput",
                    "ofType": null
                  }
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "createPatient",
            "type": {
              "kind": "OBJECT",
              "name": "CreatePatientPayload",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdatePatientInput",
                    "ofType": null
                  }
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "updatePatient",
            "type": {
              "kind": "OBJECT",
              "name": "UpdatePatientPayload",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreatePatientVisitInput",
                    "ofType": null
                  }
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "createPatientVisit",
            "type": {
              "kind": "OBJECT",
              "name": "CreatePatientVisitPayload",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdatePatientSampleInput",
                    "ofType": null
                  }
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "updatePatientSample",
            "type": {
              "kind": "OBJECT",
              "name": "UpdatePatientSamplePayload",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreatePositiveControlInput",
                    "ofType": null
                  }
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "createPositiveControl",
            "type": {
              "kind": "OBJECT",
              "name": "CreatePositiveControlPayload",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateProficiencySampleInput",
                    "ofType": null
                  }
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "createProficiencySample",
            "type": {
              "kind": "OBJECT",
              "name": "CreateProficiencySamplePayload",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "GenerateReportInput",
                    "ofType": null
                  }
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "generateReport",
            "type": {
              "kind": "OBJECT",
              "name": "GenerateReportPayload",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreatePhysicianInput",
                    "ofType": null
                  }
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "createPhysician",
            "type": {
              "kind": "OBJECT",
              "name": "CreatePhysicianPayload",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateClinicInput",
                    "ofType": null
                  }
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "createClinic",
            "type": {
              "kind": "OBJECT",
              "name": "CreateClinicPayload",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PreviewPatientReportInput",
                    "ofType": null
                  }
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "previewPatientReport",
            "type": {
              "kind": "OBJECT",
              "name": "PreviewPatientReportPayload",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PreviewProficiencySampleReportInput",
                    "ofType": null
                  }
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "previewProficiencySampleReport",
            "type": {
              "kind": "OBJECT",
              "name": "PreviewProficiencySampleReportPayload",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LoginUserInput",
                    "ofType": null
                  }
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "loginUser",
            "type": {
              "kind": "OBJECT",
              "name": "LoginUserPayload",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": null,
                "description": null,
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LogoutUserInput",
                    "ofType": null
                  }
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "logoutUser",
            "type": {
              "kind": "OBJECT",
              "name": "LogoutUserPayload",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "Mutation",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "patient",
            "type": {
              "kind": "OBJECT",
              "name": "Patient",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "CreatePatientPayload",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": null,
        "inputFields": [
          {
            "defaultValue": null,
            "description": null,
            "name": "lastname",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "firstname",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "birthday",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "mrids",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "interfaces": null,
        "kind": "INPUT_OBJECT",
        "name": "CreatePatientInput",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "patient",
            "type": {
              "kind": "OBJECT",
              "name": "Patient",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "UpdatePatientPayload",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": null,
        "inputFields": [
          {
            "defaultValue": null,
            "description": null,
            "name": "ptnum",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "lastname",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "firstname",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "birthday",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "newMrids",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "mergeMrids",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "MergeMRID",
                  "ofType": null
                }
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "interfaces": null,
        "kind": "INPUT_OBJECT",
        "name": "UpdatePatientInput",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": null,
        "inputFields": [
          {
            "defaultValue": null,
            "description": null,
            "name": "mridFrom",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "mridTo",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "interfaces": null,
        "kind": "INPUT_OBJECT",
        "name": "MergeMRID",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "updatedPatient",
            "type": {
              "kind": "OBJECT",
              "name": "Patient",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "patientVisit",
            "type": {
              "kind": "OBJECT",
              "name": "PatientVisit",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "patientSample",
            "type": {
              "kind": "OBJECT",
              "name": "PatientSample",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "CreatePatientVisitPayload",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": null,
        "inputFields": [
          {
            "defaultValue": null,
            "description": null,
            "name": "ptnum",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "mrid",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "collectedAt",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "sample",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PatientSampleInput",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "interfaces": null,
        "kind": "INPUT_OBJECT",
        "name": "CreatePatientVisitInput",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": null,
        "inputFields": [
          {
            "defaultValue": null,
            "description": null,
            "name": "testCode",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "specimenType",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "SPECIMEN_TYPE_CHOICES",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "sequence",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "filename",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "vnum",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "amplifiable",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "physicianId",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "clinicId",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "notes",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "labnotes",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "receivedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ],
        "interfaces": null,
        "kind": "INPUT_OBJECT",
        "name": "PatientSampleInput",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "patient",
            "type": {
              "kind": "OBJECT",
              "name": "Patient",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "updatedPatientVisit",
            "type": {
              "kind": "OBJECT",
              "name": "PatientVisit",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "updatedPatientSample",
            "type": {
              "kind": "OBJECT",
              "name": "PatientSample",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "UpdatePatientSamplePayload",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": null,
        "inputFields": [
          {
            "defaultValue": null,
            "description": null,
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "mrid",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "collectedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "sample",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PatientSampleInput",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "manuallyApproved",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "interfaces": null,
        "kind": "INPUT_OBJECT",
        "name": "UpdatePatientSampleInput",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "positiveControl",
            "type": {
              "kind": "OBJECT",
              "name": "PositiveControl",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "CreatePositiveControlPayload",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": null,
        "inputFields": [
          {
            "defaultValue": null,
            "description": null,
            "name": "note",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "lotNumber",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "testCode",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "specimenType",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "SPECIMEN_TYPE_CHOICES",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "sequence",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "filename",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "labnotes",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "interfaces": null,
        "kind": "INPUT_OBJECT",
        "name": "CreatePositiveControlInput",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "proficiencySample",
            "type": {
              "kind": "OBJECT",
              "name": "ProficiencySample",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "CreateProficiencySamplePayload",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": null,
        "inputFields": [
          {
            "defaultValue": null,
            "description": null,
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "source",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "vnum",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "testCode",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "sequence",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "filename",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "notes",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "labnotes",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "receivedAt",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "interfaces": null,
        "kind": "INPUT_OBJECT",
        "name": "CreateProficiencySampleInput",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "patientSample",
            "type": {
              "kind": "OBJECT",
              "name": "PatientSample",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "proficiencySample",
            "type": {
              "kind": "OBJECT",
              "name": "ProficiencySample",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "positiveControl",
            "type": {
              "kind": "OBJECT",
              "name": "PositiveControl",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "GenerateReportPayload",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": null,
        "inputFields": [
          {
            "defaultValue": null,
            "description": null,
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "ReportType",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "uid",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "isRegeneratedReport",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "interfaces": null,
        "kind": "INPUT_OBJECT",
        "name": "GenerateReportInput",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": [
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "patient_sample"
          },
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "proficiency_sample"
          },
          {
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "positive_control"
          }
        ],
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "kind": "ENUM",
        "name": "ReportType",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "physician",
            "type": {
              "kind": "OBJECT",
              "name": "Physician",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "CreatePhysicianPayload",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": null,
        "inputFields": [
          {
            "defaultValue": null,
            "description": null,
            "name": "lastname",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "firstname",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "interfaces": null,
        "kind": "INPUT_OBJECT",
        "name": "CreatePhysicianInput",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "clinic",
            "type": {
              "kind": "OBJECT",
              "name": "Clinic",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "CreateClinicPayload",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": null,
        "inputFields": [
          {
            "defaultValue": null,
            "description": null,
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "interfaces": null,
        "kind": "INPUT_OBJECT",
        "name": "CreateClinicInput",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "data",
            "type": {
              "kind": "SCALAR",
              "name": "JSONString",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "PreviewPatientReportPayload",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": null,
        "inputFields": [
          {
            "defaultValue": null,
            "description": null,
            "name": "ptnum",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "lastname",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "firstname",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "birthday",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "mrid",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "collectedAt",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "sample",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PatientSampleInput",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "interfaces": null,
        "kind": "INPUT_OBJECT",
        "name": "PreviewPatientReportInput",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "data",
            "type": {
              "kind": "SCALAR",
              "name": "JSONString",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "PreviewProficiencySampleReportPayload",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": null,
        "inputFields": [
          {
            "defaultValue": null,
            "description": null,
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "source",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "vnum",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "testCode",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "sequence",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "filename",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "notes",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "labnotes",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "receivedAt",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "interfaces": null,
        "kind": "INPUT_OBJECT",
        "name": "PreviewProficiencySampleReportInput",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "userAuthenticated",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "LoginUserPayload",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": null,
        "inputFields": [
          {
            "defaultValue": null,
            "description": null,
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "password",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "defaultValue": null,
            "description": null,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "interfaces": null,
        "kind": "INPUT_OBJECT",
        "name": "LoginUserInput",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "userAuthenticated",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "LogoutUserPayload",
        "possibleTypes": null
      },
      {
        "description": null,
        "enumValues": null,
        "fields": null,
        "inputFields": [
          {
            "defaultValue": null,
            "description": null,
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "interfaces": null,
        "kind": "INPUT_OBJECT",
        "name": "LogoutUserInput",
        "possibleTypes": null
      },
      {
        "description": "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation and subscription operations.",
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": "A list of all types supported by this server.",
            "isDeprecated": false,
            "name": "types",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "The type that query operations will be rooted at.",
            "isDeprecated": false,
            "name": "queryType",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "If this server supports mutation, the type that mutation operations will be rooted at.",
            "isDeprecated": false,
            "name": "mutationType",
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "If this server support subscription, the type that subscription operations will be rooted at.",
            "isDeprecated": false,
            "name": "subscriptionType",
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": "A list of all directives supported by this server.",
            "isDeprecated": false,
            "name": "directives",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Directive",
                    "ofType": null
                  }
                }
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "__Schema",
        "possibleTypes": null
      },
      {
        "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "kind",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "__TypeKind",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "args": [
              {
                "defaultValue": "false",
                "description": null,
                "name": "includeDeprecated",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "fields",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Field",
                  "ofType": null
                }
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "interfaces",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "possibleTypes",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              }
            }
          },
          {
            "args": [
              {
                "defaultValue": "false",
                "description": null,
                "name": "includeDeprecated",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "enumValues",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__EnumValue",
                  "ofType": null
                }
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "inputFields",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__InputValue",
                  "ofType": null
                }
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "ofType",
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "__Type",
        "possibleTypes": null
      },
      {
        "description": "An enum describing what kind of type a given `__Type` is",
        "enumValues": [
          {
            "deprecationReason": null,
            "description": "Indicates this type is a scalar.",
            "isDeprecated": false,
            "name": "SCALAR"
          },
          {
            "deprecationReason": null,
            "description": "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
            "isDeprecated": false,
            "name": "OBJECT"
          },
          {
            "deprecationReason": null,
            "description": "Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.",
            "isDeprecated": false,
            "name": "INTERFACE"
          },
          {
            "deprecationReason": null,
            "description": "Indicates this type is a union. `possibleTypes` is a valid field.",
            "isDeprecated": false,
            "name": "UNION"
          },
          {
            "deprecationReason": null,
            "description": "Indicates this type is an enum. `enumValues` is a valid field.",
            "isDeprecated": false,
            "name": "ENUM"
          },
          {
            "deprecationReason": null,
            "description": "Indicates this type is an input object. `inputFields` is a valid field.",
            "isDeprecated": false,
            "name": "INPUT_OBJECT"
          },
          {
            "deprecationReason": null,
            "description": "Indicates this type is a list. `ofType` is a valid field.",
            "isDeprecated": false,
            "name": "LIST"
          },
          {
            "deprecationReason": null,
            "description": "Indicates this type is a non-null. `ofType` is a valid field.",
            "isDeprecated": false,
            "name": "NON_NULL"
          }
        ],
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "kind": "ENUM",
        "name": "__TypeKind",
        "possibleTypes": null
      },
      {
        "description": "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "args",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "isDeprecated",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "deprecationReason",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "__Field",
        "possibleTypes": null
      },
      {
        "description": "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "defaultValue",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "__InputValue",
        "possibleTypes": null
      },
      {
        "description": "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "isDeprecated",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "deprecationReason",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "__EnumValue",
        "possibleTypes": null
      },
      {
        "description": "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
        "enumValues": null,
        "fields": [
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "locations",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "__DirectiveLocation",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "args": [],
            "deprecationReason": null,
            "description": null,
            "isDeprecated": false,
            "name": "args",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "args": [],
            "deprecationReason": "Use `locations`.",
            "description": null,
            "isDeprecated": true,
            "name": "onOperation",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": "Use `locations`.",
            "description": null,
            "isDeprecated": true,
            "name": "onFragment",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "args": [],
            "deprecationReason": "Use `locations`.",
            "description": null,
            "isDeprecated": true,
            "name": "onField",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "kind": "OBJECT",
        "name": "__Directive",
        "possibleTypes": null
      },
      {
        "description": "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
        "enumValues": [
          {
            "deprecationReason": null,
            "description": "Location adjacent to a query operation.",
            "isDeprecated": false,
            "name": "QUERY"
          },
          {
            "deprecationReason": null,
            "description": "Location adjacent to a mutation operation.",
            "isDeprecated": false,
            "name": "MUTATION"
          },
          {
            "deprecationReason": null,
            "description": "Location adjacent to a subscription operation.",
            "isDeprecated": false,
            "name": "SUBSCRIPTION"
          },
          {
            "deprecationReason": null,
            "description": "Location adjacent to a field.",
            "isDeprecated": false,
            "name": "FIELD"
          },
          {
            "deprecationReason": null,
            "description": "Location adjacent to a fragment definition.",
            "isDeprecated": false,
            "name": "FRAGMENT_DEFINITION"
          },
          {
            "deprecationReason": null,
            "description": "Location adjacent to a fragment spread.",
            "isDeprecated": false,
            "name": "FRAGMENT_SPREAD"
          },
          {
            "deprecationReason": null,
            "description": "Location adjacent to an inline fragment.",
            "isDeprecated": false,
            "name": "INLINE_FRAGMENT"
          },
          {
            "deprecationReason": null,
            "description": "Location adjacent to a schema definition.",
            "isDeprecated": false,
            "name": "SCHEMA"
          },
          {
            "deprecationReason": null,
            "description": "Location adjacent to a scalar definition.",
            "isDeprecated": false,
            "name": "SCALAR"
          },
          {
            "deprecationReason": null,
            "description": "Location adjacent to an object definition.",
            "isDeprecated": false,
            "name": "OBJECT"
          },
          {
            "deprecationReason": null,
            "description": "Location adjacent to a field definition.",
            "isDeprecated": false,
            "name": "FIELD_DEFINITION"
          },
          {
            "deprecationReason": null,
            "description": "Location adjacent to an argument definition.",
            "isDeprecated": false,
            "name": "ARGUMENT_DEFINITION"
          },
          {
            "deprecationReason": null,
            "description": "Location adjacent to an interface definition.",
            "isDeprecated": false,
            "name": "INTERFACE"
          },
          {
            "deprecationReason": null,
            "description": "Location adjacent to a union definition.",
            "isDeprecated": false,
            "name": "UNION"
          },
          {
            "deprecationReason": null,
            "description": "Location adjacent to an enum definition.",
            "isDeprecated": false,
            "name": "ENUM"
          },
          {
            "deprecationReason": null,
            "description": "Location adjacent to an enum value definition.",
            "isDeprecated": false,
            "name": "ENUM_VALUE"
          },
          {
            "deprecationReason": null,
            "description": "Location adjacent to an input object definition.",
            "isDeprecated": false,
            "name": "INPUT_OBJECT"
          },
          {
            "deprecationReason": null,
            "description": "Location adjacent to an input object field definition.",
            "isDeprecated": false,
            "name": "INPUT_FIELD_DEFINITION"
          }
        ],
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "kind": "ENUM",
        "name": "__DirectiveLocation",
        "possibleTypes": null
      }
    ]
  }
}

module.exports = getBabelRelayPlugin(schema);
