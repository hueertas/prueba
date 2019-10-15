import React from 'react';
export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.activateButton = this.activateButton.bind(this);
    }

    activateButton(i) {
        switch (this.props.name) {
            case "Previous":
                if (i === 0) {
                    return true;
                } else {
                    return false;
                }
            case "Next":
                if ((this.props.lengthQuestions - 1) === i) {
                    return true;
                } else {
                    return false;
                }
            default:
                return false;
        }
    }

    render() {
        switch (this.props.name) {
            case "Previous":
                return (
                    <button type="submit" disabled={this.activateButton(this.props.currentQuestion)}
                            onClick={() => this.props.onChangeQuestion(this.props.currentQuestion - 1)} value="Submit"
                            class="bPrevious">{this.props.name}
                    </button>
                );
            case "Next":
                return (
                    <button type="submit" disabled={this.activateButton(this.props.currentQuestion)}
                            onClick={() => this.props.onChangeQuestion(this.props.currentQuestion + 1)} value="Submit"
                            class="bNext">{this.props.name}
                    </button>
                );
            case "Submit":
                return (
                    <button type="submit" disabled={this.activateButton(this.props.currentQuestion)}
                            onClick={() => this.props.onSubmit(this.props.questions)} value="Submit"
                            class="bSubmit">{this.props.name}
                    </button>
                );
            case "Reset":
                return (
                    <button type="submit" onClick={() => this.props.onReset()} value="Submit"
                            class="bReset">{this.props.name}
                    </button>
                );
            default:
                return (
                    <button type="submit" value="Submit">{this.props.name}
                    </button>
                );
        }

    }
}
