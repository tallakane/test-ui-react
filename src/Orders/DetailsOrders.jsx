import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Icon from '../Icon';
import styles from './DetailsOrders.module.scss';

export default function DetailsOrders({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={false}
      slotProps={{ paper: { sx: { width: 740, maxWidth: '95vw', borderRadius: '28px' } } }}
    >
      <div className={styles.dialog}>
        <IconButton className={styles.close} onClick={onClose} aria-label="close">
          <Icon name="close" />
        </IconButton>

        <div className={styles.header}>
          <div className={styles.thumb}><Icon name="local_florist" /></div>
          <div className={styles.info}>
            <div className={styles.name}>Zara Perfumes</div>
            <div className={styles.sub}>100 flacons · 100 mL</div>
          </div>
          <div className={styles.ref}>BL_2024_05_22_001</div>
        </div>

        <div className={styles.deco}>
          <small>Decoration</small>
          <h3>Gold screen printing + zamac cap</h3>
        </div>

        <div className={styles.chips}>
          <span className={styles.chip}><Icon name="mail_outline" /> f.diagne@diagne.sn</span>
          <span className={styles.chip}><Icon name="phone" /> +34 77 812 34 56</span>
        </div>

        <div className={styles.sectionTitle}>ORDER STATUS</div>

        <svg className={styles.timeline} viewBox="0 0 620 330" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M205 50 Q170 65 148 95 T374 124 Q250 170 250 205 T533 295"
            fill="none"
            stroke="#2b2f6b"
            strokeWidth={5}
            strokeLinecap="round"
          />

          <g fill="#fff" stroke="#8a8c98">
            <circle cx={205} cy={22} r={11} strokeWidth={2} />
          </g>
          <text x={205} y={26} textAnchor="middle" fontSize={10}>1</text>
          <text x={228} y={27} fontSize={14}>Pending</text>

          <circle cx={147} cy={52} r={16} fill="#fff" stroke="#14b8f0" strokeWidth={2.5} />
          <text x={147} y={57} textAnchor="middle" fontSize={13} fill="#14b8f0">2</text>
          <text x={118} y={57} textAnchor="end" fontSize={14}>Sample sent</text>

          <circle cx={374} cy={70} r={22} fill="#a78bfa" fillOpacity={0.35} stroke="#a78bfa" strokeWidth={3} />
          <text x={374} y={77} textAnchor="middle" fontSize={18} fill="#7c4dff">3</text>
          <text x={408} y={75} fontSize={14} fill="#a78bfa">Sample accepted</text>

          <circle cx={250} cy={135} r={26} fill="#fff" stroke="#f5b400" strokeWidth={3.5} />
          <text x={250} y={144} textAnchor="middle" fontSize={24} fill="#f5b400">4</text>
          <text x={220} y={141} textAnchor="end" fontSize={14}>In production</text>

          <circle cx={533} cy={210} r={32} fill="#fff" stroke="#10c98f" strokeWidth={4} />
          <text x={533} y={221} textAnchor="middle" fontSize={30} fill="#10c98f">5</text>
          <text x={487} y={215} textAnchor="end" fontSize={14}>Delivered</text>
        </svg>

        <div className={styles.comment}>
          <a className={styles.commentTitle}>Comment</a>
          <p>
            Lorem ipsum dolor sit amet consectetur. Velit amet integer amet ac blandit
            magnis porta pretium.
          </p>
        </div>
      </div>
    </Dialog>
  );
}
