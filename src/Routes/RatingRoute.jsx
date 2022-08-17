import React from 'react';
import { useBookContext } from '../Context/BookContext';
import { ratingFunc } from '../Utilities/utilities';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

function RatingRoute() {
    const { themeColor } = useBookContext();
    const { state } = useBookContext();
    let data = ratingFunc(state);

    return (
        <div style={{
            width: "400px",
            height: "400px"
        }}>
            <Doughnut
                datasetIdKey='id'
                data={{
                    labels: ['1 star', '2 star', '3 star', '4 star', '5 star'],
                    datasets: [
                        {
                            label: '# of Votes',
                            data: data,
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(76, 175, 80)',
                                'rgb(153, 102, 255)',
                                'rgb(255, 159, 64)',
                            ],
                            borderColor: [
                                themeColor ? "#212121" : "#e0e0e0"
                            ],
                            borderWidth: 2,
                            hoverOffset: 6
                        },
                    ],
                }}
            />
        </div>
    )
}

export default React.memo(RatingRoute);