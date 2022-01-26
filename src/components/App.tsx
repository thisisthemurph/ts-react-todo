import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";
import { Header } from "./Header";
import { Loading } from "./Loading";
import { TodoItem } from "./TodoItem";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({
        ...this.state,
        fetching: false,
      });
    }
  }

  onButtonClick = (): void => {
    this.setState({ ...this.state, fetching: true });
    this.props.fetchTodos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <TodoItem todo={todo} onTodoClick={this.onTodoClick} />;
    });
  }

  render() {
    return (
      <div>
        <Header onButtonClick={this.onButtonClick} />
        {this.renderList()}
        {this.state.fetching ? <Loading /> : null}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
