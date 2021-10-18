import React, { useState } from "react";
import {
  Wrapper,
  Row,
  Header,
  Image,
  Form,
  Search,
  Button,
} from "./components/styled/index";
import owl from "./images/owl.svg";
import { Joke } from "./common/types";
import axios from "axios";
import JokeItem from "./components/JokeItem";
const BASE_URL = "https://v2.jokeapi.dev/joke/Any;";
interface IProps {}

const App: React.FC<IProps> = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const ENDPOINT = `${BASE_URL}?contains=${search}&amount=10`;

    const { data } = await axios.get(ENDPOINT);
    if (data.error) {
      setError(true);
      setJokes([]);
    } else {
      setError(false);
      setJokes(data.jokes);
    }

    setSearch("");
  };
  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Joker App</Header>
          <Image src={owl} alt="owl" />
        </Row>
        <Form onSubmit={getJokes}>
          <Search
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>
          <div>
            {error && <p>Sorry, no jokes found.</p>}
            {jokes?.map((joke) => (
              <JokeItem key={joke.id} joke={joke} />
            ))}
          </div>
        </Form>
      </Wrapper>
    </div>
  );
}

export default App;
