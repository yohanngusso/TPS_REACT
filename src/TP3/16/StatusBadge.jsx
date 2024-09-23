import './StatusBadge.css';
import PropTypes from 'prop-types';

function StatusBadge({ status }) {
    let badgeClass = '';
    let badgeText = '';

    switch (status) {
        case 'ativo':
            badgeClass = 'badge-active';
            badgeText = 'Ativo';
            break;
        case 'inativo':
            badgeClass = 'badge-inactive';
            badgeText = 'Inativo';
            break;
        case 'pendente':
            badgeClass = 'badge-pending';
            badgeText = 'Pendente';
            break;
        default:
            badgeClass = 'badge-default';
            badgeText = 'Desconhecido';
            break;
    }

    return (
        <span className={`status-badge ${badgeClass}`}>
            {badgeText}
        </span>
    );
}

StatusBadge.propTypes = {
    status: PropTypes.string.isRequired,
};

export default StatusBadge;