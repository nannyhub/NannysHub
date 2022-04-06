"""empty message

Revision ID: 542b6a361dad
Revises: b1b714bcec39
Create Date: 2022-03-27 10:35:20.080823

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '542b6a361dad'
down_revision = 'b1b714bcec39'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('nannys', 'longitude',
               existing_type=sa.NUMERIC(precision=10, scale=2),
               type_=sa.Numeric(precision=20, scale=10),
               existing_nullable=True)
    op.alter_column('nannys', 'latitude',
               existing_type=sa.NUMERIC(precision=10, scale=2),
               type_=sa.Numeric(precision=20, scale=10),
               existing_nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('nannys', 'latitude',
               existing_type=sa.Numeric(precision=20, scale=10),
               type_=sa.NUMERIC(precision=10, scale=2),
               existing_nullable=True)
    op.alter_column('nannys', 'longitude',
               existing_type=sa.Numeric(precision=20, scale=10),
               type_=sa.NUMERIC(precision=10, scale=2),
               existing_nullable=True)
    # ### end Alembic commands ###