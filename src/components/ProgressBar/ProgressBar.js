import React, { Component } from 'react'
import CircularProgressbar from 'react-circular-progressbar'
import SegmentedProgressbar from 'react-circular-progressbar'

class ProgressBar extends Component {
    render() {
        return (
            <div >
                <img style={{position: 'absolute', width: '50%', top: '10px', left: '50%', transform: 'translateX(-50%)', marginTop: '15%', zIndex: 999}} src={this.props.src} />
                <div style={{position: 'absolute'}}>
                    <SegmentedProgressbar
                    initialAnimation={true}
                    percentage={this.props.percentage}
                    textForPercentage={null}
                    background
                    // backgroundPadding={10}
                    styles={{
                    background: {
                        fill: 'grey',
                    },
                    path: {
                        stroke: this.props.color,
                    },
                    trail: { stroke: 'transparent' },
                      }}
                    />
                </div>
            </div>
        )
    }
}

export default ProgressBar