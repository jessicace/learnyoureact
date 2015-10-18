var React = require('react');

var style = {
    checkedTodo: {
        textDecoration: "line-through"
    },
    notCheckedTodo: {
        textDecoration: "none"
    },
    tableContent: {
        border: "1px solid black"
    }
};


var TodoBox = React.createClass({
    render: function() {
        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList data={this.props.data} />
                <TodoForm/>
            </div>
        );
    }
});

var TodoList = React.createClass({
    getInitialState: function() {
        return {
            data: this.props.data,
            titleValue: "",
            detailValue: ""
        }
    },

    changeTitle: function(event) {
        this.setState({
            titleValue: event.target.value
        });
    },
    
    changeDetail: function(event) {
        this.setState({
            detailValue: event.target.value
        });
    },
    
    addTodo: function() {
        var newData = this.state.data;
        newData.push({
            title: this.state.titleValue,
            detail: this.state.detailValue
        });
        this.setState({
            data: newData,
            titleValue: "",
            detailValue: ""
        });
    },
    
    render: function() {
        var todo = this.props.data.map(function(object) {
            return <Todo title={object.title} key={object.title}>{object.detail}</Todo>;
        });
        return (
            <div className="todoList">
                <div>
                    Title:
                    <input type="text"
                           value={this.state.titleValue}
                           onChange={this.changeTitle}
                    />
                    Detail:
                    <input type="text"
                           value={this.state.detailValue}
                           onChange={this.changeTitle}
                    />
                    <button onClick={this.addTodo}>Add</button>
                </div>
                <table style={{border: "2px solid black"}}>
                    <tbody>
                        {todo}
                    </tbody>
                </table>
            </div>
        );
    }
});

var Todo = React.createClass({
    getInitialState: function() {
        return {
            checked: false,
            todoStyle: style.notCheckedTodo
        }
    },
    
    handleChange: function(event) {
        this.setState({
            checked: event.target.checked
        });
        if (event.target.checked) {
            this.setState({
                todoStyle: style.checkedTodo
            });
        } else {
            this.setState({
                todoStyle: style.uncheckedTodo
            });
        }
    },

    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    
    render: function() {
        return (
            <tr style={this.state.todoStyle}>
                <td style={style.tableContent}>
                    <input ref="checkBox"
                           type="checkbox"
                           checked={this.state.checked}
                           onChange={this.handleChange}
                    />
                </td>
                <td style={style.tableContent}>{this.props.title}</td>
                <td style={style.tableContent}>{this.props.children}</td>
            </tr>
        );
    }
});

var TodoForm = React.createClass({
    render: function() {
        return (
            <div className="todoForm">
                I am a TodoForm.
            </div>
        );
    }
});



module.exports = TodoBox;
