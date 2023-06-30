import "./App.css";
import Header from "./components/header";
import Weather from "./components/Weather";
import Clock from "./components/Clock";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import { Bookmark } from "./components/Bookmark";
import { AddBookmark } from "./components/AddBookmark";
import { About } from "./components/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  // TODO RELATED STUFF.
  let initTodo;
  if (localStorage.getItem("todos_array") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos_array"));
  }

  const onDelete_func = (todo_func_parameter) => {
    // console.log("I am being deleted" + todo_func_parameter);
    setTodos(
      todos_array.filter((e) => {
        return e !== todo_func_parameter;
      })
    );
  };

  const new_add_todo = (title, descr) => {
    console.log("I am adding a new todo");
    let sno = todos_array.length + 1;
    const my_new_todo = {
      s_no: sno,
      todo_title: title,
      descr: descr,
    };

    setTodos([...todos_array, my_new_todo]);
  };

  const [todos_array, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos_array", JSON.stringify(todos_array));
  }, [todos_array]);

  // Bookmark related stuff
  let initBookmark;
  if (localStorage.getItem("bookmark_array") === null) {
    initBookmark = [];
  } else {
    initBookmark = JSON.parse(localStorage.getItem("bookmark_array"));
  }
  const onDelete_bookmark = (bookmark_parameter) => {
    // console.log("I am being deleted" + todo_func_parameter);
    setBookmark(
      bookmark_array.filter((e) => {
        return e !== bookmark_parameter;
      })
    );
  };
  const add_new_bookmark = (b_title, b_url) => {
    console.log("I am adding a new bookmark");
    let sno = 0;
    if (bookmark_array !== undefined) {
      sno = bookmark_array.length + 1;
    }
    const my_new_bookmark = {
      s_no: sno,

      b_title: b_title,
      b_url: b_url,
    };

    setBookmark([...bookmark_array, my_new_bookmark]);
  };

  const [bookmark_array, setBookmark] = useState(initBookmark);

  useEffect(() => {
    localStorage.setItem("bookmark_array", JSON.stringify(bookmark_array));
  }, [bookmark_array]);

  // Quote related stuff.
  const [random_quote, setQuote] = useState("helo");

  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: "https://quotes15.p.rapidapi.com/quotes/random/",
      headers: {
        "X-RapidAPI-Key": "cfa1b35f81msh318716049a636b8p19a700jsn41049c1ceff9",
        "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
      },
    })
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.content);
        setQuote(response.data.content);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Router className="whole-page">
        <Header title="MY TODO's list" searchbar={true} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Clock quote={random_quote} />
              </>
            }
          ></Route>

          <Route
            path="/todo"
            element={
              <>
                <AddTodo add_todo_props={new_add_todo} />

                <Todos
                  todos_props={todos_array}
                  onDelete_props={onDelete_func}
                />
              </>
            }
          ></Route>

          <Route
            path="/bookmark"
            element={
              <>
                <Bookmark
                  bookmark_props={bookmark_array}
                  onDelete_bookmark_props={onDelete_bookmark}
                />
                <AddBookmark add_bookmark_props={add_new_bookmark} />
              </>
            }
          ></Route>
          <Route path="/weather" element={<Weather />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
