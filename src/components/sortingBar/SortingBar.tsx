import { ITEM_FILTER_PARAMS } from '@/constants';

interface SortProps {
    activeSortingCriteria: string,
    handleClick: Function
}

export default function SortingBar({ activeSortingCriteria, handleClick }: SortProps) {

    function renderButtons() {
        const myButtons = ITEM_FILTER_PARAMS.map((filterParam, key) => {
            return <button className={activeSortingCriteria === filterParam ? 'button-active' : ''} onClick={() => { handleClick(filterParam) }} key={key}> {filterParam} </button>
        })
        return myButtons
    }

    return (
        <div className='item-list-sorting-bar'>
            <p className='item-list-sorting-text'>Sort by:</p>
            {renderButtons()}
        </div>
    )
}