import React, {Component} from 'react';
import {
	Text
} from 'react-native'

export default class TextInnerstyle extends Component {

	 generateText(text, phrase, innerstyle) {
	      if (text) {
	        const splitText = text
	        	.replace(phrase,'\*'+phrase+'\*')
	        	.split('\*')
	        	.map((x, i) => {
	            	if (x == phrase) {
	            		return <Text key={'phrase-'+i} style={innerstyle}>{phrase}</Text>
	            	} else {
	            		return x
	            	}
	            })
	        return splitText
	      }
	  }

	render() {
		const {children,phrase,innerstyle, style} = this.props;
		return(
			<Text style={style}>
				{this.generateText(children,phrase,innerstyle)}
			</Text>
		)
	}
}