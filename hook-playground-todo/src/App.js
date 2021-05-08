import {
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    List,
    ListItem,
    ListItemText,
    TextField,
} from '@material-ui/core';
import { useState } from 'react';

const Initial_task = {
    title: 'try react hook',
    status: false,
};

const App = () => {
    const [tasks, setTasks] = useState([Initial_task]);
    const [task_title, setTask_title] = useState('');

    const resetTextField = () => setTask_title('');

    const handleTextFiledChanges = (e) => setTask_title(e.target.value);

    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    const isTaskInclude = () =>
        tasks.some(
            // some の引数に関数を渡し、配列内の要素の内1つでも関数のテストを満たすと true が返る
            // 同じ名前の場合、ボタンを disable にし、作成できなくする
            (task) => task.title === task_title
        );

    const addTask = () => {
        // spread operator @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        setTasks([...tasks, { title: task_title, status: false }]);
        resetTextField();
    };

    const handleCheckboxChanges = (task) => {
        setTasks(
            tasks.filter((x) => {
                if (x === task) x.status = !x.status;
                return x;
            })
        );
    };

    const deleteTask = (task) => {
        setTasks(tasks.filter((x) => x !== task));
    };

    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box mt={5} display="flex" justifyContent="space-around">
                    <TextField
                        label="title"
                        value={task_title}
                        onChange={handleTextFiledChanges}
                    />
                    <Button
                        disabled={task_title === '' || isTaskInclude()}
                        variant="contained"
                        color="primary"
                        onClick={addTask}
                        href=""
                    >
                        Create
                    </Button>
                </Box>
                <List style={{ marginTop: '25px' }} component="ul">
                    {console.log(tasks)}
                    {tasks.map((task, index) => {
                        return (
                            <ListItem key={index} component="li">
                                <Checkbox
                                    checked={task.status}
                                    value="primary"
                                    onChange={() => handleCheckboxChanges(task)}
                                />
                                <ListItemText>{task.title}</ListItemText>
                                <Button
                                    href=""
                                    onClick={() => deleteTask(task)}
                                >
                                    delete
                                </Button>
                            </ListItem>
                        );
                    })}
                </List>
            </Container>
        </>
    );
};

export default App;
