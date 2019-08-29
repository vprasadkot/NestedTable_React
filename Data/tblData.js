export const primary = {
  "headers": [
    {
      "field":"id",
      "name": "ID",
      "width": "80px",
    },
    {
      "field":"name",
      "name": "Name",
      "width": "200px",
    },
    {
      "field":"age",
      "name": "Age",
      "width": "80px",
    },
    {
      "field":"role",
      "name": "Role",
      "width": "150px",
    }
  ],
  "data": [
    {
      "id":"1",
      "name": "Venkat",
      "age" : 30,
      "role": "admin",
      "subTable": {
        "headers" :[
          {
            "field":"product",
            "name": "Product",
            "width": "80px",
          },
          {
            "field":"version",
            "name": "version",
            "width": "200px"
          }
        ],
        "data": [
          {
            "product":"iPad",
            "version": "mini"
          },
          {
            "product":"iPhone",
            "version": "XR"
          },
          {
            "product":"Watch",
            "version": "pro"
          }
        ]
      }
    },
    {
      "id":"2",
      "name": "Ayaan",
      "age" : 6,
      "role": "admin"
    },
    {
      "id":"3",
      "name": "Prasad",
      "age" : 28,
      "role": "admin",
      "subTable": {
        "headers" :[
          {
            "field":"product",
            "name": "Product",
            "width": "80px",
          },
          {
            "field":"version",
            "name": "version",
            "width": "200px"
          }
        ],
        "data": [
          {
            "product":"iPad",
            "version": "mini",
            "subTable": {
              "headers" :[
                {
                  "field":"product",
                  "name": "Product",
                  "width": "80px",
                },
                {
                  "field":"version",
                  "name": "version",
                  "width": "200px"
                }
              ],
              "data": [
                {
                  "product":"iPad",
                  "version": "mini"
                },
                {
                  "product":"iPhone",
                  "version": "XR"
                },
                {
                  "product":"Watch",
                  "version": "pro"
                }
              ]
            }
          },
          {
            "product":"iPhone",
            "version": "XR"
          },
          {
            "product":"Watch",
            "version": "pro"
          }
        ]
      }
    }
  ]
};