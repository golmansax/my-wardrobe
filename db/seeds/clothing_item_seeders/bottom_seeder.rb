require_relative '../clothing_item_seeder'

class BottomSeeder < ClothingItemSeeder
  def seed!
    create_bottom!(
      brand: 'prAna',
      model: 'Stretch Zion Pant',
      purchases: [
        {
          date: Date.parse('April 2013'),
          version: 'Khaki',
        },
        {
          date: Date.parse('June 2014'),
          version: 'Brown',
          purposes: %w(Yoga),
        },
      ],
    )

    create_bottom!(
      brand: 'Outlier',
      model: 'New Way Short',
      purchases: [
        {
          date: Date.parse('April 2015'),
          version: 'Deep Gray',
          purposes: %w(Essential Swimming),
        },
      ],
    )

    create_bottom!(
      brand: 'prAna',
      model: 'Stretch Zion Short',
      purchases: [
        {
          date: Date.parse('April 2014'),
          version: 'Charcoal',
        },
      ],
    )

    create_bottom!(
      brand: 'Stonemaster',
      model: 'Pant',
      purchases: [
        {
          date: Date.parse('May 2014'),
          version: 'Black Slim',
        },
      ],
    )

    create_bottom!(
      brand: 'O\'Neill',
      model: 'Hybrid Freak Short',
      purchases: [
        {
          date: Date.parse('Jan 2014'),
          version: 'Navy Plaid',
          purposes: ['Backup'],
        },
      ],
    )

    create_bottom!(
      brand: 'Nike',
      model: 'Jordan Aero Fly Mania Basketball Short',
      purchases: [
        {
          date: Date.parse('April 2013'),
          version: 'Green',
          purposes: %w(Lounging Colorful),
        },
      ],
    )

    create_bottom!(
      brand: 'White Sierra',
      model: 'Baz Az Fleece Pant',
      purchases: [
        {
          date: Date.parse('Dec 2013'),
          version: 'Black',
        },
      ],
    )

    create_bottom!(
      brand: 'REI',
      model: 'Sariska Yoga Pant',
      purchases: [
        {
          date: Date.parse('April 2015'),
          version: 'Slate',
          purposes: ['Lounging'],
        },
      ],
    )

    create_bottom!(
      brand: 'Outlier',
      model: 'New OG Pant',
    )

    create_bottom!(
      brand: 'Myles',
      model: 'Everyday Short',
    )

    create_bottom!(
      brand: 'Ministry of Supply',
      model: 'Aviator Chino',
      purchases: [
        {
          date: Date.parse('May 2015'),
          version: 'Black Slim',
          purposes: ['Formal', 'For Girlfriend'],
        },
      ],
    )

    create_bottom!(
      brand: 'Rapha',
      model: 'Loopback Trouser',
      purchases: [
        {
          date: Date.parse('May 2015'),
          version: 'Navy',
          purposes: ['Essential', 'Formal', 'For Girlfriend'],
        },
      ],
    )

    # Ski Pants
  end

  def create_bottom!(bottom_params)
    create_clothing_item!(bottom_params.merge(type: 'Bottom'))
  end
end
