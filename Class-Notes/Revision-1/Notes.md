- JSX and Bable
- component and props
  - component
- props
  - Normal props

    - String properties
    - Object properties
    - array properties
    - boolean properties
    - function properties

  - children props
- event handling in React
- sharing data between two component
  - parent to child
  - child to parent

- vite to create React project  





Activity 1 :
Complete the following code :

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Template</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://www.unpkg.com/react@18.2.0/umd/react.development.js"></script>
  <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    function SuperheroCard(props) {
      return <>Superhero Card</>;
    }

    // Pass the following props here and the same should be displayed in Superhero Card
    // name - String
    // imageUrl - String
    // isMarried - Boolean
    // Superpowers - Array
    // address - Object

    function App() {
      return (
        <>
          <SuperheroCard />
        </>
      );
    }

    let reactRoot = ReactDOM.createRoot(document.getElementById("root"));
    reactRoot.render(<App />);
  </script>
</html>





Activity 2 :
<script>
  const superheroes = [
          {
            name: "Batman",
            powers: ["Rich", "Fly", "Genius"],
            address: {
              street: "Gotham St",
              city: "Gotham",
              country: "USA",
            },
            age: 21,
            isBachelor: true,
            imageUrl:
              "https://rukminim2.flixcart.com/image/850/1000/poster/7/d/g/batman-portrait-bt455566-medium-original-imaekp86fhb3fhxf.jpeg",
          },
          {
            name: "Superman",
            powers: ["Laser Fry", "Fly", "Runs Fast"],
            address: {
              street: "Central St",
              city: "New York",
              country: "USA",
            },
            age: 41,
            isBachelor: false,
            imageUrl:
              "https://c8.alamy.com/comp/2R7EMM0/portrait-of-a-drawing-of-superman-superhero-warner-dc-and-comics-concept-2R7EMM0.jpg",
          },
        ];

</script>





task 3:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Template</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://www.unpkg.com/react@18.2.0/umd/react.development.js"></script>
  <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <script type="text/babel">
    // Agenda : to send some info from child to parent component

    function Child(props) {
      const someInfo = "someInformation";
      return <div>Child </div>;
    }

    function App() {
      return (
        <>
          <Child />
        </>
      );
    }

    let reactRoot = ReactDOM.createRoot(document.getElementById("root"));
    reactRoot.render(<App />);
  </script>
</html>