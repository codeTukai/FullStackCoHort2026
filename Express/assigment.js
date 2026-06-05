// import express from "express";

// const app = express();

// const users = [
//     {
//       name: "john",
//       kidneys:[
//         {
//             healthy: false
//         }
//       ]  
//     }
// ]

// app.use(express.json());
// //query parameter
// app.get("/", (req, res) => {
//   const johnKidney = users[0].kidneys;
//   const noOfKid = johnKidney.length;

//   let healthyKid = 0;
//   for(let i = 0; i < johnKidney.length; i++){
//     if(healthyKid){
//         healthyKid = healthyKid + 1
//     }
//   }
//   const unHealthyKid = noOfKid - healthyKid

//   res.json({
//     noOfKid,
//     healthyKid,
//     unHealthyKid
//   })
  
// });
// app.post("/", (req, res) => {
//   const isHealthy = req.body.isHealthy;
//   users[0].kidneys.push({
//     healthy: isHealthy
//   })
//   res.json({
//     msg: "Added Kidneys"
//   })

// });
// app.put("/", (req, res) => {
//    for(let i = 0; i < users[0].kidneys.length; i++){
//     users[0].kidneys[i].healthy = true;
//    }
//    res.json({
    
//    })
// });
// app.delete("/", (req, res) => {
//   const newKidArr = [];
//   for(let i = 0; i < users[0].kidneys.length; i++){
//     if (users[0].kidneys[i].healthy) {
//         newKidArr.push({
//             healthy: true
//         })
//     }
//    }
//    users[0].kidneys = newKidArr;
//    res.json({
//     msg: "success"
//    })
// });

// app.listen(3001, () => {
//   console.log("Server running on port 3001");
// });

import express from "express";

const app = express();

app.use(express.json());

const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

// GET - Get kidney statistics
app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const noOfKidneys = johnKidneys.length;

  let healthyKidneys = 0;

  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      healthyKidneys++;
    }
  }

  const unhealthyKidneys = noOfKidneys - healthyKidneys;

  res.status(200).json({
    totalKidneys: noOfKidneys,
    healthyKidneys,
    unhealthyKidneys,
  });
});

// POST - Add a new kidney
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;

  if (typeof isHealthy !== "boolean") {
    return res.status(400).json({
      msg: "isHealthy must be true or false",
    });
  }

  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.status(201).json({
    msg: "Kidney added successfully",
  });
});

// PUT - Make all kidneys healthy
app.put("/", (req, res) => {
  users[0].kidneys.forEach((kidney) => {
    kidney.healthy = true;
  });

  res.status(200).json({
    msg: "All kidneys marked as healthy",
  });
});

// Helper Function
function hasUnhealthyKidneys() {
  return users[0].kidneys.some((kidney) => !kidney.healthy);
}

// DELETE - Remove unhealthy kidneys
app.delete("/", (req, res) => {
  if (!hasUnhealthyKidneys()) {
    return res.status(411).json({
      msg: "No unhealthy kidneys found",
    });
  }

  users[0].kidneys = users[0].kidneys.filter(
    (kidney) => kidney.healthy
  );

  res.status(200).json({
    msg: "Unhealthy kidneys removed successfully",
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});