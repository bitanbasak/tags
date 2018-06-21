import React, { Component } from 'react';
import '../App.css';

class TagItem extends Component {

    static defaultProps = {
        tags: ["Software Quality", "MongoDB"]
    }

    hasBeenClicked(e, tag) {
        // Use the tag parameter in your search algorithm to find the users with that tag in their message
        console.log(tag);
        e.preventDefault();
    }

    render() {
        let tagsOptions;
        tagsOptions = this.props.tags.map(tag => {
            return <td key={tag} ref={tag}>
                        <a onClick={ (e) => this.hasBeenClicked(e, tag)}>
                            {tag}
                        </a>
                    </td>
        })
        return(
            <div className="TagItem">
                <table>
                    <tbody>
                        <tr>
                            {tagsOptions}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TagItem;