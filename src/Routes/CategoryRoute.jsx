import React from 'react';
import { useBookContext } from '../Context/BookContext';
import { categoryFunc } from '../Utilities/utilities';

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

function CategoryRoute() {
    const { themeColor } = useBookContext();
    const { state } = useBookContext();
    let data = categoryFunc(state);

    return (
        <div style={{
            width: "400px",
            height: "400px"
        }}>
            <Doughnut
                datasetIdKey='id'
                data={{
                    labels: ['Action', 'Adventure', 'Drama', 'Horror', 'History', 'Romance', "Fantasy"],
                    datasets: [
                        {
                            label: '# of Votes',
                            data: data,
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(76, 175, 80)',
                                'rgb(75, 192, 192)',
                                'rgb(153, 102, 255)',
                                'rgb(255, 159, 64)',
                                'rgb(231, 45, 45)'
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

export default React.memo(CategoryRoute);