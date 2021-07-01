/* eslint-disable no-nested-ternary */
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Rating = ({ value }) => (
    <div>
        {value && value > 0 ? (
            <>
                {value >= 1 ? (
                    <StarIcon style={{ color: 'green' }} />
                ) : value >= 0.5 || value >= 0.3 ? (
                    <StarHalfIcon style={{ color: 'green' }} />
                ) : (
                    <StarBorderIcon color="primary" />
                )}
                {value >= 2 ? (
                    <StarIcon style={{ color: 'green' }} />
                ) : value >= 1.5 || value >= 1.3 ? (
                    <StarHalfIcon style={{ color: 'green' }} />
                ) : (
                    <StarBorderIcon color="primary" />
                )}
                {value >= 3 ? (
                    <StarIcon style={{ color: 'green' }} />
                ) : value >= 2.5 || value >= 2.3 ? (
                    <StarHalfIcon style={{ color: 'green' }} />
                ) : (
                    <StarBorderIcon color="primary" />
                )}
                {value >= 4 ? (
                    <StarIcon style={{ color: 'green' }} />
                ) : value >= 3.5 || value >= 3.3 ? (
                    <StarHalfIcon style={{ color: 'green' }} />
                ) : (
                    <StarBorderIcon color="primary" />
                )}
                {value >= 5 ? (
                    <StarIcon style={{ color: 'green' }} />
                ) : value >= 4.5 || value >= 4.3 ? (
                    <StarHalfIcon style={{ color: 'green' }} />
                ) : (
                    <StarBorderIcon color="primary" />
                )}
            </>
        ) : (
            <>
                <StarBorderIcon color="primary" />
                <StarBorderIcon color="primary" />
                <StarBorderIcon color="primary" />
                <StarBorderIcon color="primary" />
                <StarBorderIcon color="primary" />
            </>
        )}
    </div>
);

export default Rating;
