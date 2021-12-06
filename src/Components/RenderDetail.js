const RenderDetail = ({label, value}) => {
    return (
        <div
            style={{ display: 'flex', alignItems: 'center' }}
        >
            <h5
                style={{marginRight: '20px'}}
            >{label}:</h5>{value || '--'}
        </div>
    )
}

export default RenderDetail
