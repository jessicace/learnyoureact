var React = require('react');

var style = {
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
    render: function() {
        var todo = this.props.data.map(function(object) {
            return <Todo title={object.title} key={object.title}>{object.detail}</Todo>
        });
        return (
            <div className="todoList">
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
            checked: false
        }
    },
    
    handleChange: function(checked) {
        this.setState({
            checked: checked
        });
    },

    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    
    render: function() {
        return (
            <tr>
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
