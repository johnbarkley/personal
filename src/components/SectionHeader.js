import React from 'react'

const SectionHeader = props => {
    const isNotTop = props.nontop
    return (
        <div className={isNotTop ? 'section-header non-top' : 'section-header'}>
            {props.value + '—'}
        </div>
    )
}

export default SectionHeader
