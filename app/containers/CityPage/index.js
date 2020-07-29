/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

let cityArr = ['Addis Ababa, Ethiopia', 'Agra, India', 'Amsterdam, the Netherlands', 'Anchorage, Alaska', 'Angkor Wat, Cambodia', 'Athens, Greece', 'Atlantic City, New Jersey', 'Auckland, New Zealand', 'Bali, Indonesia', 'Bangkok, Thailand', 'Barcelona, Spain', 'Bay Lake, Florida', 'Beijing, China', 'Berlin, Germany', 'Hamilton, Burmuda', 'Bethlehem, Pennsylvania', 'Bogota, Columbia', 'Papeete, Bora Bora', 'Brussels, Belgium', 'Budapest, Hungary', 'Buenos Aires, Argentina', 'Cairo, Egypt', 'Calgary, Canada', 'Cancun, Mexico', 'Cape Town, South Africa', 'Caracas, Venezuela', 'Casablanca, Morocco', 'Chicago, Illinois', 'Colombo, Sri Lanka', 'Columbus, Ohio', 'Copenhagen, Denmark', 'Dallas, Texas', 'New Delhi, India', 'Dubai, United Arab Emirates', 'Dublin, Ireland', 'Edinburgh, Scotland', 'Florence, Italy', 'Frankfurt, Germany', 'Geneva, Switzerland', 'Hong Kong', 'Honolulu, Hawaii', 'Indianapolis, Indiana', 'Istanbul, Turkey', 'Jakarta, Indonesia', 'Jerusalem, Israel', 'Kathmandu, Nepal', 'Kuala Lumpur, Malaysia', 'Las Vegas, Nevada', 'Lima, Peru', 'Lisbon, Portugal', 'London, England', 'Los Angeles, California', 'Madrid, Spain', 'Male, Maldives', 'Marrakech, Morocco', 'Marseille, France', 'Mexico City, Mexico', 'Miami, Florida', 'Montego Bay, Jamaica', 'Montreal, Canada', 'Moorea, Tahiti', 'Moscow, Russia', 'Munich, Germany', 'Muscat, Oman', 'Myrtle Beach, South Carolina', 'Nairobi, Kenya', 'Nassau, the Bahamas', 'New York City, United States', 'Oslo, Norway', 'Papua, New Guinea', 'Paris, France', 'Perth, Australia', 'Phoenix, Arizona', 'Phuket, Thailand', 'Point Pleasant, New Jersey', 'Prague, Czech Republic', 'Queenstown. New Zealand', 'Reykjavik, Iceland', 'Rio De Janeiro, Brazil', 'Rome, Italyl', 'Salt Lake City, Utah', 'San Francisco, California', 'Santiago, Chile', 'Santorini, Greece', 'Seoul, South Korea', 'Shanghai, China', 'Singapore, Singapore', 'Stockholm, Sweden', 'Suva, Fiji', 'Sydney, Australia', 'Taipei, Taiwan', 'Tallinn, Estonia', 'Lhasa, Tibet', 'Tokyo, Japan', 'Toronto, Canada', 'Tunis, Tunisia', 'Ulan Bator, Mongolia', 'Vancouver, British Columbia', 'Vienna, Austria', 'Washington, D.C'];


export default function CityPage() {
  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Shows cities you should visit"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <List>
        
        <ListItem>  
          
        {cityArr.map(function(item) {
          return <li key={item}>{item}</li>;
        })}
  
        </ListItem>


      </List>
    </div>
  );
}
