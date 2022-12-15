const express = require('express');
const app = express();
const Pokemon = require('../models/pokemon.js');


// I
app.get('/', (req, res) => {
res.render('index.ejs', { data: Pokemon });
});

// N
app.get("/new", (req, res) => {
    res.render("new.ejs")
  });

// D
app.delete("/:id", (req, res) =>{
    Pokemon.splice(req.params.id, 1)
    res.redirect("/")
  })
  

// U
app.put("/:id", (req, res) =>{
  
    Pokemon[req.params.id] = req.body
    res.redirect("/")
  })

// C
app.post("/", (req, res) =>{
 
    console.log(req.body)
    pokemon.push(req.body)
    res.redirect("/")
  })
  

// E
app.get("/:id/edit", (req, res) =>{
    res.render(
      "edit.ejs",
      {
        characters: Pokemon[req.params.id],
        index: req.params.id,
      }
    )
  })

// S
app.get('/:id', (req, res) => {
res.render('show.ejs', { data: Pokemon[req.params.id] });
});


app.get("/", (req, res) => {
    res.send(Pokemon)
  })

