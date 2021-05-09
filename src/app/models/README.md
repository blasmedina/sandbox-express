```bash
npx sequelize-cli model:generate --underscored --name User --attributes name:string
```

```javascript
{
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
  },
  /**
   * ...
   */
}
```

```javascript
{
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  /**
   * ...
   */
}
```
