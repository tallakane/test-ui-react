import Icon from './Icon';
import Orders from './Orders/Orders';
import styles from './App.module.scss';

const topNav = [
  { icon: 'space_dashboard', label: 'Dashboard', active: false },
  { icon: 'assignment', label: 'Orders', active: true },
  { icon: 'factory', label: 'Production', active: false },
  { icon: 'edit_note', label: 'NotePad', active: false },
];

const bottomNav = [
  { icon: 'settings', label: 'Settings' },
  { icon: 'hub', label: 'Integration' },
  { icon: 'logout', label: 'Sign out' },
];

export default function App() {
  return (
    <div className={styles.page}>
      <div className={styles.leftside}>
        <div className={styles.logo}>
          <div className={styles.SP}>SP</div>
          <div className={styles.spText}>
            <div style={{ fontSize: 13 }}>S E R I G R A F I A</div>
            <div style={{ fontWeight: 700, fontSize: 20 }}>P O R T A L</div>
          </div>
        </div>

        <nav className={styles.nav}>
          {topNav.map((item) => (
            <a
              key={item.label}
              className={`${styles.navItem}${item.active ? ` ${styles.active}` : ''}`}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div style={{ flex: 1 }} />

        <nav className={styles.nav}>
          {bottomNav.map((item) => (
            <a key={item.label} className={styles.navItem}>
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className={styles.company}>
          <div className={styles.companyLogo}><Icon name="..." /></div>
          <div>
            <div style={{ fontSize: 15 }}>Micro Azur</div>
            <div style={{ fontSize: 12 }}>+41 76 473 67 64</div>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <h1>Orders</h1>
          <div className={styles.topActions}>
            <Icon name="search" />
            <Icon name="chat" />
            <Icon name="notifications_none" />
            <div className={styles.userDiv}>
              <div className={styles.userIcon}><Icon name="home" /></div>
              <span>Hello, <strong>Eugenia</strong></span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <Orders />
        </div>
      </div>
    </div>
  );
}
