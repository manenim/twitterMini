import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    console.log(state)
}

const General = () => {
    return (
        <div>
            helo
        </div>
    )
}

export default connect(mapStateToProps)(General)
