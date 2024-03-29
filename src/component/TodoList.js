import React, {useEffect} from 'react';
import { Row, Col} from 'antd';
import { useSelector } from 'react-redux';
import TodoItem from "../component/TodoItem";

function TodoList(){
    const todos = useSelector((state) => state.todoReducer.todos);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Tất cả công việc";
    }, []);
    return(
        <>
            <Row>
                <h2 className="title-List">All todo list</h2>
            </Row>
            <Row>
                <Col span={24}>
                    <Row>
                        {todos.map((todo) => (
                            <TodoItem todo={todo} key={todo.id} />
                        ))}
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default TodoList;