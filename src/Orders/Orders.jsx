import { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import Icon from '../Icon';
import DetailsOrders from './DetailsOrders';
import styles from './Orders.module.scss';

const orders = [
  { customer: 'Zara Perfumes', urgent: true, ref: 'BL_2024_05_22_001', icon: 'local_florist', decoration: 'Gold screen printing + zamac cap', bottles: 1000, price: '4 200 €', statusLabel: 'Pending...', delivery: '15/09/2026', order: 'CMD_2024_05_18_0156', selected: true },
  { customer: 'Druni Perfumeries', ref: 'BL_2024_05_23_002', icon: 'liquor', decoration: 'Matte black lacquer + hot stamping', bottles: 20, price: '8 500 €', statusLabel: 'Sample sent', delivery: '18/09/2026', order: 'CMD_2024_05_19_0157' },
  { customer: 'Primor Perfumeries', ref: 'BL_2024_05_24_003', icon: 'wine_bar', decoration: 'Silver metallisation + laser engraving', bottles: 700, price: '12 750 €', statusLabel: 'Sample accepted', delivery: '22/09/2026', order: 'CMD_2024_05_20_0158' },
  { customer: 'Bodybell', ref: 'BL_2024_05_23_002', icon: 'water_drop', decoration: 'Blue gradient + white screen printing', bottles: 50, price: '8 500 €', statusLabel: 'In production...', delivery: '25/09/2026', order: 'CMD_2024_05_19_0187' },
  { customer: 'Julia Perfumería', urgent: true, ref: 'BL_2024_05_24_003', icon: 'local_florist', decoration: 'Sandblasting + gold label', bottles: 150, price: '4 200 €', statusLabel: 'Delivered', delivery: '01/10/2026', order: 'CMD_2024_05_20_0198' },
  { customer: 'Paco Perfumerías', ref: 'BL_2024_05_25_004', icon: 'spa', decoration: 'Powder pink lacquer + embossing', bottles: 200, price: '6 750 €', statusLabel: 'Sample rejected', delivery: '06/10/2026', order: 'CMD_2024_05_21_0205' },
  { customer: 'Perfumerías If', urgent: true, ref: 'BL_2024_05_24_003', icon: 'science', decoration: '360° UV printing + selective varnish', bottles: 150, price: '12 300 €', statusLabel: 'Returned', delivery: '10/10/2026', order: 'CMD_2024_05_20_0203' },
  { customer: 'Marvimundo', ref: 'BL_2024_05_24_007', icon: 'wine_bar', decoration: 'Galvanisation + floral decal', bottles: 320, price: '8 750 €', statusLabel: 'Pending...', delivery: '15/10/2026', order: 'CMD_2024_05_19_0187' },
];

export default function Orders() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className={styles.orders}>
      <div className={styles.head}>
        <div>
          <h2>Order list</h2>
          <p className={styles.sub}>Here is the tracking of your perfume decoration orders.</p>
        </div>
        <Button
          variant="contained"
          disableElevation
          className={styles.addBtn}
          startIcon={<Icon name="add" />}
          onClick={() => setDialogOpen(true)}
        >
          ADD ORDER
        </Button>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.search}>
          <Icon name="search" />
          <span>Search...</span>
        </div>
        <div className={styles.filters}>
          <span className={styles.filterLabel}>Filter by</span>
          <Button className={styles.filterBtn} endIcon={<Icon name="expand_more" />}>
            All customers
          </Button>
          <Button className={styles.filterBtn} endIcon={<Icon name="expand_more" />}>
            Period
          </Button>
        </div>
      </div>

      <div className={styles.total}>Value : 250 000 € ● Total : 23</div>

      <div className={styles.grid}>
        {orders.map((o, i) => (
          <Card
            key={i}
            className={`${styles.order}${o.selected ? ` ${styles.selected}` : ''}`}
            elevation={0}
          >
            <div className={`${styles.row} ${styles.top}`}>
              <div className={styles.thumb}><Icon name={o.icon} /></div>
              <div className={styles.title}>
                <div className={styles.name}>
                  {o.customer}
                  {o.urgent && <span className={styles.urgent}>Urgent</span>}
                </div>
                <div className={styles.ref}>{o.ref}</div>
              </div>
              <IconButton className={styles.more} aria-label="more">
                <Icon name="more_vert" />
              </IconButton>
            </div>

            <div className={styles.deco}>
              <small>Decoration</small>
              <div>{o.decoration}</div>
            </div>

            <div className={styles.mid}>
              <div>
                <small>Bottles</small>
                <div className={styles.bottles}>{o.bottles}</div>
              </div>
              <div className={styles.price}>{o.price}</div>
            </div>

            <div className={styles.status}>{o.statusLabel}</div>

            <div className={styles.foot}>
              <div>
                <small>Delivery date</small>
                <div className={styles.date}>{o.delivery}</div>
              </div>
              <div className={styles.right}>
                <small>Order</small>
                <div className={styles.date}>{o.order}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className={styles.pager}>
        <span className={styles.showing}>Showing 1 to 10 of 150 orders</span>
        <div className={styles.rows}>
          <span>Rows per page</span>
          <Button className={styles.filterBtn} endIcon={<Icon name="expand_more" />}>
            10
          </Button>
        </div>
      </div>

      <DetailsOrders open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </div>
  );
}
